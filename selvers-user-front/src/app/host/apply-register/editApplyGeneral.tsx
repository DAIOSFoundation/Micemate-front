import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  useApplyRegisterGeneralQuery,
  useApplyRegisterGeneralMutation,
} from "@/api/events/events.query";
import { useCategoryQuery } from "@/api/etc/category.query";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { UserInformationRequest } from "@/type";
import { dateTimeToString, delDate, delTime } from "@/util/stringTransition";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import DatePicker from "react-datepicker";
import { birthChangeHandler } from "@/util/inputChange";
import { useToast } from "@/hook/useToast";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

const payableTypes = [
  { type: 0, name: "행사 비용을 선택해주세요." },
  { type: 1, name: "무료" },
  { type: 2, name: "사전 신청 시 무료 / 현장 구매 시 유료" },
  { type: 3, name: "사전 신청 시 무료 / 기간 한정 유료 / 현장 구매 시 유료" },
  { type: 4, name: "사전 신청 유료 / 현장 결제 유료" },
  { type: 5, name: "유료" },
];

// zod 스키마 정의
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const EditSchema = z
  .object({
    title: z.string().trim().min(1, "제목을 입력해주세요."),
    category: z.number().nullable().optional(),
    img1: z
      .any()
      .nullable()
      .optional()
      .refine(
        (files) => {
          if (!files || files.length === 0) return true; // 파일이 없을 때는 통과
          return files[0].size < MAX_FILE_SIZE;
        },
        {
          message: "파일 크기는 10MB 이하이어야 합니다.",
        }
      ),
    img2: z
      .any()
      .nullable()
      .optional()
      .refine(
        (files) => {
          if (!files || files.length === 0) return true; // 파일이 없을 때는 통과
          return files[0].size < MAX_FILE_SIZE;
        },
        {
          message: "파일 크기는 10MB 이하이어야 합니다.",
        }
      ),
    event_start_view: z.string().nullable().optional(),
    event_end_view: z.string().nullable().optional(),
    event_start_time: z.date().nullable().optional(),
    event_end_time: z.date().nullable().optional(),
    payable_type: z.number().nullable().optional(),
    payable_start_view: z.string().nullable().optional(),
    payable_end_view: z.string().nullable().optional(),
    payable_price_url: z.string().nullable().optional(),
    payable_price1: z.number().nullable().optional(),
    payable_price2: z.number().nullable().optional(),
    progress_type: z.string().nullable().optional(),
    progress_url: z.string().nullable().optional(),
    position1: z.string().nullable().optional(),
    position2: z.string().nullable().optional(),
  })
  .refine(
    (data) => {
      if (data.event_start_view && data.event_end_view) {
        return new Date(data.event_start_view) <= new Date(data.event_end_view);
      }
      return true;
    },
    {
      message: "종료 날짜는 시작 날짜 이후여야 합니다.",
      path: ["event_end_date"],
    }
  )
  .refine(
    (data) => {
      if (data.payable_start_view && data.payable_end_view) {
        return (
          new Date(data.payable_start_view) <= new Date(data.payable_end_view)
        );
      }
      return true;
    },
    {
      message: "종료 날짜는 시작 날짜 이후여야 합니다.",
      path: ["payable_end_date"],
    }
  );

const EditApplyGeneral = () => {
  const { openToast } = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  const [nextPage, setNextPage] = useState(false);
  const OutletContext = useOutletContext<UserInfoConText>();
  const authInfo = OutletContext.authInfo;
  const [imgData1, setImgData1] = useState<File>(null);
  const [imgData2, setImgData2] = useState<File>(null);
  const [previewType1, setPreviewType1] = useState(null);
  const [previewType2, setPreviewType2] = useState(null);
  const category = useCategoryQuery();
  const useApplyRegisterGeneral = useApplyRegisterGeneralMutation();
  const open = useDaumPostcodePopup();

  const { data: GeneralData } = useApplyRegisterGeneralQuery({
    token: authInfo.token,
    event_id: id,
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditSchema),
  });

  const startTime = watch("event_start_time");
  const endTime = watch("event_end_time");
  const payableType = watch("payable_type");
  const progressType = watch("progress_type");

  useEffect(() => {
    if (GeneralData && GeneralData?.data) {
      setValue("title", GeneralData?.data?.title);
      setValue("category", GeneralData?.data?.category?.id);
      if (GeneralData?.data?.img1)
        setPreviewType1(
          `https://api-test.micemate.io/storage/${GeneralData?.data?.img1}`
        );
      if (GeneralData?.data?.img2)
        setPreviewType2(
          `https://api-test.micemate.io/storage/${GeneralData?.data?.img2}`
        );
      setValue(
        "event_start_date",
        delTime(GeneralData?.data?.event_start_date)
      );
      setValue(
        "event_start_view",
        delTime(GeneralData?.data?.event_start_date)
      );
      setValue("event_end_date", delTime(GeneralData?.data?.event_end_date));
      setValue("event_end_view", delTime(GeneralData?.data?.event_end_date));
      setValue(
        "event_start_time",
        delDate(GeneralData?.data?.event_start_date)
      );
      setValue("event_end_time", delDate(GeneralData?.data?.event_end_date));
      setValue("payable_type", GeneralData?.data?.payable_type);
      setValue(
        "payable_start_view",
        delTime(GeneralData?.data?.payable_start_date)
      );
      setValue(
        "payable_start_date",
        delTime(GeneralData?.data?.payable_start_date)
      );
      setValue(
        "payable_end_view",
        delTime(GeneralData?.data?.payable_end_date)
      );
      setValue(
        "payable_end_date",
        delTime(GeneralData?.data?.payable_end_date)
      );
      setValue("payable_price_url", GeneralData?.data?.payable_price_url);
      setValue(
        "payable_price1",
        Number(GeneralData?.data?.payable_price1) > 0
          ? GeneralData?.data?.payable_price1
          : null
      );
      setValue(
        "payable_price2",
        Number(GeneralData?.data?.payable_price2) > 0
          ? GeneralData?.data?.payable_price2
          : null
      );
      setValue(
        "progress_type",
        JSON.stringify(GeneralData?.data?.progress_type)
      );
      setValue("progress_url", GeneralData?.data?.progress_url);
      setValue("position1", GeneralData?.data?.position1);
      setValue("position2", GeneralData?.data?.position2);
    }
  }, [GeneralData]);

  // 날짜 문자금지 하이픈 추가
  const handleDateChange = (
    e: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    birthChangeHandler(e, setValue, value);
  };

  //썸네일 핸들러
  const previewHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setPriview: Dispatch<SetStateAction<string>>,
    setData: Dispatch<SetStateAction<File>>
  ) => {
    if (e.target.files) {
      const imgFile = e.target.files[0];
      const photoURL = URL.createObjectURL(imgFile);
      if (imgFile) {
        setData(imgFile);
        setPriview(photoURL);
      }
    }
  };
  //썸네일 삭제
  const thumbnailDeleteHandler = (
    e: MouseEvent<HTMLSpanElement>,
    value: string,
    setPriview: Dispatch<SetStateAction<string>>,
    setData: Dispatch<SetStateAction<File>>
  ) => {
    e.preventDefault();
    setValue(value, null);
    setPriview(null);
    setData(null);
  };

  // 시간 input 30분 증가
  const increaseTime = (date: string, value: string) => {
    const valueState = watch(value);
    const newDate = new Date(date);
    if (valueState) {
      newDate.setMinutes(newDate.getMinutes() + 30);
      setValue(value, newDate);
    }
  };

  // 시간 input 30분 감소
  const decreaseTime = (date: string, value: string) => {
    const valueState = watch(value);
    const newDate = new Date(date);
    if (valueState) {
      newDate.setMinutes(newDate.getMinutes() - 30);
      setValue(value, newDate);
    }
  };

  //카카오 주소검색
  const addressComplete = (data: Address) => {
    let addressType = "";
    if (data.userSelectedType === "R") {
      addressType = data.roadAddress;
    } else {
      addressType = data.jibunAddress;
    }
    setValue("position1", addressType);
  };
  const addressApiOpen = () => {
    open({
      onComplete: addressComplete,
    });
  };

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    const start_time = dateTimeToString(data.event_start_time);
    const end_time = dateTimeToString(data.event_end_time);

    const appendIfDefined = (key, value) => {
      if (
        value !== undefined &&
        value !== null &&
        !(value instanceof File && value.size === 0)
      ) {
        formData.append(key, value);
      }
    };
    appendIfDefined("title", data.title);
    appendIfDefined("category_id", data.category);
    appendIfDefined("img1", imgData1 ? imgData1 : undefined);
    appendIfDefined("img2", imgData2 ? imgData2 : undefined);
    appendIfDefined(
      "event_start_date",
      data.event_start_view && start_time
        ? `${data.event_start_view} ${start_time}`
        : undefined
    );
    appendIfDefined(
      "event_end_date",
      data.event_end_view && end_time
        ? `${data.event_end_view} ${end_time}`
        : undefined
    );
    appendIfDefined("payable_type", data.payable_type);
    appendIfDefined("payable_start_date", data.payable_start_view);
    appendIfDefined("payable_end_date", data.payable_end_view);
    appendIfDefined("payable_price_url", data.payable_price_url);
    appendIfDefined("payable_price1", data.payable_price1);
    appendIfDefined("payable_price2", data.payable_price2);
    appendIfDefined("progress_type", JSON.parse(data.progress_type));
    appendIfDefined("progress_url", data.progress_url);
    appendIfDefined("position1", data.position1);
    appendIfDefined("position2", data.position2);

    //API 호출
    useApplyRegisterGeneral.mutate(
      {
        token: authInfo.token,
        event_id: id,
        data: formData,
      },
      {
        onSuccess: () => {
          if (nextPage === true) {
            navigate(`/host/my/apply-register/edit/${id}/detail`);
          }
          openToast("저장 되었습니다.");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  });

  return (
    <div className="cont_area">
      <div className="cont_panel type2">
        <div className="tit_wrap">
          <h2 className="fs_40 fw_700">기본정보</h2>
        </div>
        <div className="tit_wrap mt_12">
          <h3 className="fs_18">
            참관객 모집을 위한 행사의 기본 정보를 입력해주세요.
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="tit_wrap mt_62">
            <h3 className="fs_20">
              프로젝트 제목 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              {...register("title")}
              className={`w_767 ${
                GeneralData?.data?.is_reject?.title ? "outline" : ""
              }`}
              type="text"
            />
          </div>
          {errors.title?.message && (
            <p style={{ paddingTop: "10px" }} className="err_msg">
              {errors.title?.message?.toString()}
            </p>
          )}
          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 분야 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <select
                    onChange={(e) => {
                      const selectedValue = parseInt(e.target.value);
                      onChange(selectedValue);
                    }}
                    defaultValue="defalue"
                    className={`w_767 ${
                      GeneralData?.data?.is_reject?.category ? "outline" : ""
                    }`}
                    value={value}
                  >
                    <option value={"defalue"} disabled>
                      카테고리 선택
                    </option>
                    {category &&
                      category?.data?.map((data) => {
                        return (
                          <option key={data.id} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                  </select>
                );
              }}
            />
          </div>
          <div className="tit_wrap mt_25">
            <h3 className="tit02">
              대표 이미지 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="tit_wrap mt_4">
            <p className="fs_12">
              메인페이지 및 상세페이지 내 노출할 대표 이미지를 등록해주세요.
            </p>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="infomation_blue_box w_767">
              <div className="dis_flex gap5 fs_12 fw_600">
                <i className="info_icon"></i>
                <span>대표 이미지 등록 가이드</span>
              </div>
              <div className="mt_8 fs_12 fw_500 pl_15">
                · 10MB 이하의 JPG, JPEG, PNG 파일
                <br />· 해상도 360*510픽셀(세로형), 1280*674픽셀(가로형) / 72dpi
                이상
              </div>
            </div>
          </div>
          <div className="dis_flex mt_10 gap16">
            <div
              className={`${
                GeneralData?.data?.is_reject?.img ? "outline" : ""
              }`}
            >
              <input
                id="img1"
                type="file"
                accept="image/png,image/jpg,image/jpeg"
                multiple={false}
                {...register("img1")}
                onChange={(e) => {
                  previewHandler(e, setPreviewType1, setImgData1);
                }}
                className="hide"
              />
              <label htmlFor="img1" className="file_inp vertical preview_label">
                {previewType1 && (
                  <span className="preview_img">
                    <span
                      onClick={(e) => {
                        thumbnailDeleteHandler(
                          e,
                          "img1",
                          setPreviewType1,
                          setImgData1
                        );
                      }}
                      className="cancel_btn"
                    ></span>
                    <img src={previewType1} />
                  </span>
                )}
                0 / 1
              </label>
              <p className="txt_center fs_12 mt_7">세로형</p>
            </div>
            <div
              className={`${
                GeneralData?.data?.is_reject?.img ? "outline" : ""
              }`}
            >
              <input
                id="img2"
                type="file"
                multiple={false}
                accept="image/png,image/jpg,image/jpeg"
                {...register("img2")}
                onChange={(e) => {
                  previewHandler(e, setPreviewType2, setImgData2);
                }}
                className="hide"
              />
              <label
                htmlFor="img2"
                className="file_inp horizontal preview_label"
              >
                {previewType2 && (
                  <span className="preview_img">
                    <span
                      onClick={(e) => {
                        thumbnailDeleteHandler(
                          e,
                          "img2",
                          setPreviewType2,
                          setImgData2
                        );
                      }}
                      className="cancel_btn"
                    ></span>
                    <img src={previewType2} />
                  </span>
                )}
                0 / 1
              </label>
              <p className="txt_center fs_12 mt_7">가로형</p>
            </div>
          </div>
          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 운영 일자 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div
              className={`dis_flex w_767 ${
                GeneralData?.data?.is_reject?.date ? "outline" : ""
              }`}
            >
              <div className="date_inp_wrap flex1">
                <input
                  className="w_full"
                  type="text"
                  placeholder="행사 시작 일자를 선택해주세요."
                  {...register("event_start_view")}
                  onChange={(e) => handleDateChange(e, "event_start_view")}
                />
                <label htmlFor="event_start_date"></label>
                <input
                  id="event_start_date"
                  type="date"
                  {...register("event_start_date")}
                  onChange={(e) => setValue("event_start_view", e.target.value)}
                />
              </div>
              <span className="fs_20">&nbsp;~&nbsp;</span>
              <div className="date_inp_wrap flex1">
                <input
                  type="text"
                  {...register("event_end_view")}
                  onChange={(e) => handleDateChange(e, "event_end_view")}
                  className="w_full"
                  placeholder="행사 종료 일자를 선택해주세요."
                />
                <label htmlFor="event_end_date"></label>
                <input
                  id="event_end_date"
                  type="date"
                  {...register("event_end_date")}
                  onChange={(e) => setValue("event_end_view", e.target.value)}
                />
              </div>
            </div>
          </div>
          {errors.event_end_date?.message && (
            <p className="err_msg" style={{ paddingTop: "10px" }}>
              {errors.event_end_date?.message?.toString()}
            </p>
          )}
          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 운영 시간 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div
              className={`dis_flex w_767 ${
                GeneralData?.data?.is_reject?.time ? "outline" : ""
              }`}
            >
              <div className="num_inp_wrap flex1">
                <Controller
                  name="event_start_time"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <DatePicker
                        selected={value}
                        onChange={(data: any) => onChange(data)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        showTimeCaption={false}
                        placeholderText="행사 시작 시간을 입력해주세요."
                      />
                      <span
                        onClick={() =>
                          increaseTime(startTime, "event_start_time")
                        }
                        className="increase"
                      ></span>
                      <span
                        onClick={() =>
                          decreaseTime(startTime, "event_start_time")
                        }
                        className="decrease"
                      ></span>
                    </>
                  )}
                />
              </div>
              <span className="fs_20">&nbsp;~&nbsp;</span>
              <div className="num_inp_wrap flex1">
                <Controller
                  name="event_end_time"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <DatePicker
                        selected={value}
                        onChange={(data: any) => onChange(data)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        showTimeCaption={false}
                        placeholderText="행사 종료 시간을 입력해주세요."
                      />
                      <span
                        onClick={() => increaseTime(endTime, "event_end_time")}
                        className="increase"
                      ></span>
                      <span
                        onClick={() => decreaseTime(endTime, "event_end_time")}
                        className="decrease"
                      ></span>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              비용 설정 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="dis_flex justify_between w_767">
              <Controller
                name="payable_type"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <select
                      onChange={(e) => {
                        const selectedValue = parseInt(e.target.value);
                        onChange(selectedValue);
                      }}
                      defaultValue="defalue"
                      className={`w_372 ${
                        GeneralData?.data?.is_reject?.payable ? "outline" : ""
                      }`}
                      value={value}
                    >
                      <option value={"defalue"} disabled></option>
                      {payableTypes.map((data) => {
                        return (
                          <option key={data.type} value={data.type}>
                            {data.name}
                          </option>
                        );
                      })}
                    </select>
                  );
                }}
              />
              {payableType === 2 && (
                <div id="_sel1">
                  <input
                    type="number"
                    {...register("payable_price2", { valueAsNumber: true })}
                    className="w_372"
                    placeholder="현장 신청 비용을 입력해주세요."
                  />
                </div>
              )}
              {payableType === 4 && (
                <div id="_sel1">
                  <input
                    type="number"
                    {...register("payable_price2", { valueAsNumber: true })}
                    className="w_372"
                    placeholder="현장 신청 비용을 입력해주세요."
                  />
                </div>
              )}
            </div>
          </div>
          {payableType === 3 && (
            <div id="_sel2">
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <div className="dis_flex justify_between w_767 gap23">
                  <div className="date_inp_wrap flex1">
                    <input
                      className="w_full"
                      type="text"
                      placeholder="유료 시작 날짜"
                      {...register("payable_start_view")}
                      onChange={(e) =>
                        handleDateChange(e, "payable_start_view")
                      }
                    />
                    <label htmlFor="payable_start_view"></label>
                    <input
                      id="payable_start_view"
                      type="date"
                      {...register("payable_start_date")}
                      onChange={(e) =>
                        setValue("payable_start_view", e.target.value)
                      }
                    />
                  </div>
                  <div className="date_inp_wrap flex1">
                    <input
                      className="w_full"
                      type="text"
                      placeholder="유료 종료 날짜"
                      {...register("payable_end_view")}
                      onChange={(e) => handleDateChange(e, "payable_end_view")}
                    />
                    <label htmlFor="payable_end_date"></label>
                    <input
                      id="payable_end_date"
                      type="date"
                      {...register("payable_end_date")}
                      onChange={(e) =>
                        setValue("payable_end_view", e.target.value)
                      }
                    />
                  </div>
                  <input
                    type="number"
                    {...register("payable_price1", { valueAsNumber: true })}
                    className="w_372"
                    placeholder="유료 사전 신청 기간의 비용을 입력해주세요."
                  />
                </div>
              </div>
              {errors.payable_end_date?.message && (
                <p className="err_msg" style={{ paddingTop: "10px" }}>
                  {errors.payable_end_date?.message?.toString()}
                </p>
              )}
              <div className="dis_flex align_start justify_between pr_52 mt_10">
                <input
                  type="text"
                  {...register("payable_price_url")}
                  className="w_767"
                  placeholder="외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"
                />
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <div className="w_767 txt_center">
                  <i className="blue_icon_box">+</i>
                </div>
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <input
                  type="number"
                  {...register("payable_price2", { valueAsNumber: true })}
                  className="w_372"
                  placeholder="현장 신청 비용을 입력해주세요."
                />
              </div>
            </div>
          )}
          {payableType === 4 && (
            <div id="_sel4">
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <input
                  type="text"
                  {...register("payable_price_url")}
                  className="w_767"
                  placeholder="외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"
                />
              </div>
            </div>
          )}

          {payableType === 5 && (
            <div id="_sel4">
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <input
                  type="text"
                  className="w_767"
                  {...register("payable_price_url")}
                  placeholder="외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"
                />
              </div>
            </div>
          )}
          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 진행 방식 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div
              className={`dis_flex w_767 gap11 ${
                GeneralData?.data?.is_reject?.progress ? "outline" : ""
              }`}
            >
              <div className="checkbox02 flex1 col_gray">
                <input
                  id="0"
                  {...register("progress_type")}
                  type="radio"
                  name="progress_type"
                  value={"0"}
                />
                <label htmlFor="0">오프라인 행사</label>
              </div>
              <div className="checkbox02 flex1 col_gray">
                <input
                  id="1"
                  {...register("progress_type")}
                  type="radio"
                  name="progress_type"
                  value={"1"}
                />
                <label htmlFor="1">온라인 행사</label>
              </div>
              <div className="checkbox02 flex1 col_gray">
                <input
                  id="2"
                  {...register("progress_type")}
                  type="radio"
                  name="progress_type"
                  value={"2"}
                />
                <label htmlFor="2">하이브리드 행사</label>
              </div>
            </div>
          </div>
          {(progressType === "1" || progressType === "2") && (
            <div className="dis_flex align_start justify_between pr_52 mt_18">
              <input
                className="w_767"
                {...register("progress_url")}
                type="text"
                placeholder="온라인 행사 url를 입력해주세요. (온라인 / 하이브리드 행사 선택 시)"
              />
            </div>
          )}
          {(progressType === "0" || progressType === "2") && (
            <>
              <div className="tit_wrap mt_25">
                <h3 className="fs_20">
                  행사 운영 위치 <i className="col_red">*</i>
                </h3>
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_10">
                <input
                  type="text"
                  {...register("position1")}
                  onClick={addressApiOpen}
                  className={`w_767 ${
                    GeneralData?.data?.is_reject?.position ? "outline" : ""
                  }`}
                  placeholder="도로명/지번 주소 검색 (오프라인 / 하이브리드 행사 선택 시)"
                />
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_18">
                <input
                  type="text"
                  {...register("position2")}
                  className={`w_767 ${
                    GeneralData?.data?.is_reject?.position ? "outline" : ""
                  }`}
                  placeholder="세부 주소"
                />
              </div>
            </>
          )}
          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap"></div>
            <div className="btn_wrap gap23">
              <button
                onClick={() => {
                  setNextPage(false);
                }}
                className="btn blue_bor"
              >
                임시 저장
              </button>
              <button
                onClick={() => {
                  setNextPage(true);
                }}
                className="btn dark_blue"
              >
                다음
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditApplyGeneral;
