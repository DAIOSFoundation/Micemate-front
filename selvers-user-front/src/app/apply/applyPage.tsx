import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import LoadingScreen from "@components/shared/LoadingScreen";
import Thumbnail from "@components/eventDetail/thumbnailArea";
import ApplyForm from "@components/form/applyForm";
import ApplyAgreeFrom from "@components/form/applyAgreeFrom";
import { useEventDetail } from "@/api/events/events.query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEventApplyInformationQuery,
  useEventApplyMutation,
} from "@/api/events/events.query";
import {
  ApplyPageWrap,
  FormWrap,
  Main,
  MainForm,
  SideForm,
} from "./applyPageStyle";

const applyOption = (type: number) => {
  if (type === 0) {
    return [{ type: 0, value: "개인 신청" }];
  } else if (type === 1) {
    return [{ type: 1, value: "단체 신청" }];
  } else if (type === 2) {
    return [
      { type: 0, value: "개인 신청" },
      { type: 1, value: "단체 신청" },
    ];
  }
};

const getApplySchema = (applyType: number, EventApplyInformation) => {
  const baseSchema = {
    type: z.number().default(0),
    name: z.string().trim().min(1, "이름을 입력해 주세요."),
    email: z
      .string()
      .trim()
      .min(1, "이메일을 입력해 주세요.")
      .email({ message: "올바른 이메일을 입력해주세요." }),
    contact: z.string().trim().min(1, "전화번호를 입력해 주세요."),

    group:
      applyType === 1 || applyType === 2
        ? z.string().min(1, "단체명은 필수입니다.")
        : z.string().optional(),
    xlsx:
      applyType === 1 || applyType === 2
        ? z
            .instanceof(File)
            .refine(
              (file) =>
                file &&
                [
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  "application/vnd.ms-excel",
                  "application/haansoftxlsx",
                ].includes(file.type),
              {
                message: "엑셀 파일(.xlsx 또는 .xls) 형식만 업로드 가능합니다.",
              }
            )
        : z.boolean().optional(),
    excel_agree:
      applyType === 1 || applyType === 2 ? z.boolean() : z.boolean().optional(),
    allChk: z.boolean().optional(),
    agree1: z.boolean(),
    agree2: z.boolean(),
    agree3: z.boolean(),
    agree4: z.boolean().default(false).optional(),
  };

  const dynamicFields = (EventApplyInformation?.data?.information || []).reduce(
    (acc, field) => {
      acc[field.name] = field.required
        ? z.string().min(1, `${field.name}은(는) 필수입니다.`)
        : z.string().optional();
      return acc;
    },
    {}
  );

  return z.object({
    ...baseSchema,
    ...dynamicFields,
  });
};

const ApplyPage = () => {
  const [applyType, setApplyType] = useState(0);
  const [applyList, setApplyList] = useState([]);
  const [applySurvey, setApplySurvey] = useState({});
  const [multipleOption, setMultipleOption] = useState<>({});
  const [applyLong, setApplyLong] = useState({});
  const [surveyErr, setSurveyErr] = useState<number[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const eventApply = useEventApplyMutation();
  const { data: EventApplyInformation } = useEventApplyInformationQuery(
    id,
    token
  );
  const isEdit = false;
  const applySchema = getApplySchema(applyType, EventApplyInformation);
  const {
    setValue,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applySchema),
  });

  useEffect(() => {
    if (EventApplyInformation) {
      if (EventApplyInformation?.data?.application_type === 2) {
        setApplyType(0);
      } else if (EventApplyInformation?.data?.application_type > 2) {
        setApplyType(EventApplyInformation?.data?.application_type);
      }
      setApplyList(applyOption(EventApplyInformation?.data?.application_type));
    }
  }, [EventApplyInformation]);

  const {
    data: detailData,
    isLoading: isLoadingDetail,
    isError: isErrorDetail,
  } = useEventDetail(id, token);

  if (isLoadingDetail) {
    return <LoadingScreen />;
  }
  if (isErrorDetail) {
    return <div>데이터 없음</div>;
  }

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    const appendIfDefined = (key, value) => {
      if (
        value !== undefined &&
        value !== null &&
        !(value instanceof File && value.size === 0)
      ) {
        formData.append(key, value);
      }
    };

    appendIfDefined("type", data.type);
    appendIfDefined("name", data.name);
    appendIfDefined("email", data.email);
    appendIfDefined("contact", data.contact);
    appendIfDefined("group", data.group);
    appendIfDefined("xlsx", data.xlsx);

    const information = {};
    const surveys = {
      ...applySurvey,
      ...multipleOption,
      ...applyLong,
    };
    const surveysList = EventApplyInformation?.data?.surveys || [];
    let errArr = [];
    for (const survey of surveysList) {
      if (survey.required && !surveys[survey.id]) {
        errArr.push(survey.id);
      }
    }
    if (errArr.length > 0) {
      setSurveyErr(errArr);
      return;
    }
    setSurveyErr([]);
    const transformedSurveys = Object.fromEntries(
      Object.entries(surveys).map(([key, value]) => {
        if (Array.isArray(value)) {
          return [key, value.map(item => item.toString())];
        }
        return [key, value];
      })
    );

    const terms_of_uses = {
      5: data.agree1,
      6: data.agree2,
      7: data.agree3,
      8: data.agree4,
    };

    // EventApplyInformation의 dynamic 필드 추가
    if (EventApplyInformation?.data?.information) {
      EventApplyInformation.data.information.forEach((field) => {
        if (data[field.name] !== undefined) {
          information[field.id] = data[field.name];
        }
      });
    }

    // 빈 배열일 경우 JSON 문자열로 변환하여 전송
    appendIfDefined(
      "information",
      JSON.stringify(Object.keys(information).length ? information : [])
    );
    appendIfDefined(
      "surveys",
      JSON.stringify(Object.keys(transformedSurveys).length ? transformedSurveys : [])
    );
    appendIfDefined(
      "terms_of_uses",
      JSON.stringify(Object.keys(terms_of_uses).length ? terms_of_uses : [])
    );

    // FormData 전송
    eventApply.mutate(
      { token: token, event_id: id, data: formData },
      {
        onSuccess: () => {
          // if (
          //   EventApplyInformation?.data?.payable_type === 1 ||
          //   EventApplyInformation?.data?.payable_type === 2
          // ) {
          navigate("/detail/finish");
          // } else {
          //   window.open(EventApplyInformation?.data?.payable_price_url);
          // }
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  });
  console.log(EventApplyInformation)
  return (
    <ApplyPageWrap className="maxframe">
      <FormWrap onSubmit={onSubmit}>
        <Main>
          <Thumbnail thumnaildata={detailData.data} applyBtn={false} />
          <MainForm>
            <ApplyForm
              register={register}
              applyType={applyType}
              setApplyType={setApplyType}
              applyList={applyList}
              errors={errors}
              setValue={setValue}
              EventApplyInformation={EventApplyInformation}
              isEdit={isEdit}
              setSurveyOption={setApplySurvey}
              setMultipleOption={setMultipleOption}
              setApplyLong={setApplyLong}
              surveyErr={surveyErr}
            />
          </MainForm>
        </Main>
        <SideForm>
          <ApplyAgreeFrom
            watch={watch}
            setValue={setValue}
            register={register}
            applyType={applyType}
          />
        </SideForm>
      </FormWrap>
    </ApplyPageWrap>
  );
};

export default ApplyPage;
