import React, { ChangeEvent, useState, useEffect } from "react";
import {
  useApplyRegisterSurveyMutation,
  useApplyRegisterSurveyQuery,
} from "@/api/events/events.query";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import {
  UserInformationRequest,
  ApplyRegisterSurveyData,
  SurveyField,
} from "@/type";
import { useToast } from "@/hook/useToast";
import { z } from "zod";

// 전체 설문 데이터 스키마
const editApplySurveySchema = z.object({
  is_survey: z.boolean(),
  surveys: z
      .array(
          z.object({
            type: z.union([
              z.literal(0),
              z.literal(1),
              z.literal(2)
            ], {
              invalid_type_error: "설문 유형이 유효하지 않습니다."
            }),
            title: z
                .string()
                .min(1, { message: "설문 제목을 입력해주세요." })
                .max(50, { message: "설문 제목은 최대 50자입니다." }),
            options: z
                .array(
                    z.string()
                        .min(1, { message: "옵션을 입력해주세요." })
                        .max(20, { message: "옵션 텍스트는 20자를 초과할 수 없습니다." })
                )
                .max(10, { message: "옵션은 최대 10개까지 추가할 수 있습니다." })
                .optional(),
            required: z.boolean(),
            is_reject: z.boolean(),
          }).superRefine((data, ctx) => {
            if ((data.type === 0 || data.type === 1) && (!data.options || data.options.length < 1)) {
              ctx.addIssue({
                path: ['options'],
                code: z.ZodIssueCode.custom,
                message: "옵션을 최소 1개 이상 입력해주세요.",
              });
            }
          })
      )
      .max(5, { message: "최대 5개의 설문을 추가할 수 있습니다." }),
  is_reject: z.object({
    survey: z.boolean(),
  }),
});

interface UserInfoContext {
  authInfo: UserInformationRequest;
}

// FormErrors 타입 정의
type FormErrors = {
  is_survey?: string;
  surveys?: Array<{
    type?: string;
    title?: string;
    options?: string[]; // 개별 옵션 오류 메시지를 위한 배열
    required?: string;
    isReject?: string;
  }>;
  is_reject?: {
    survey?: string;
  };
};

const EditApplySurvey: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { authInfo } = useOutletContext<UserInfoContext>();
  const { data: surveyData } = useApplyRegisterSurveyQuery({
    token: authInfo.token,
    event_id: id,
  });
  const [isSurveyUsed, setIsSurveyUsed] = useState<boolean>(true); // 기본값을 true로 설정
  const [initialFields, setInitialFields] = useState<SurveyField[]>([]);
  const [fields, setFields] = useState<SurveyField[]>([]);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const { mutate } = useApplyRegisterSurveyMutation();

  const { openToast } = useToast();
  const navigate = useNavigate();

  // API 응답 데이터를 기반으로 상태 초기화
  useEffect(() => {
    if (surveyData && surveyData.success) {
      const { is_survey, surveys } = surveyData.data;

      if (is_survey !== undefined) {
        setIsSurveyUsed(is_survey);
      } else {
        setIsSurveyUsed(true); // is_survey 값이 없으면 기본값 유지
      }

      if (is_survey === true && surveys.length > 0) {
        // is_survey가 0일 때만 필드 초기화
        const mappedFields: SurveyField[] = surveys.map((field: any) => ({
          type: field.type as 0 | 1 | 2,
          title: field.title,
          options:
            field.type === 0 || field.type === 1
              ? field.options.map((opt: string) => ({
                  text: opt,
                }))
              : [],
          required: field.required,
          isReject: field.is_reject,
        }));
        setInitialFields(mappedFields)
        setFields(mappedFields);
      } else {
        setFields([]);
      }
    }
  }, [surveyData]);

  const addField = () => {
    if (fields.length >= 5) {
      openToast("최대 5개의 설문을 추가할 수 있습니다.");
      return;
    }

    setFields([
      ...fields,
      {
        type: 0, // 기본값: 단일 선택
        title: "",
        options: [{ text: "" }],
        required: true,
        isReject: false,
      },
    ]);
  };

  const removeField = (index: number) => {
    if (fields.length === 1) return;
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  // 제네릭을 사용하여 key와 value의 타입을 명확히 지정
  const updateField = <K extends keyof SurveyField>(
    index: number,
    key: K,
    value: SurveyField[K]
  ) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  const addOption = (fieldIndex: number) => {
    const currentField = fields[fieldIndex];
    if (currentField.options.length >= 10) {
      openToast("옵션은 최대 10개까지 추가할 수 있습니다.");
      return;
    }

    const newFields = [...fields];
    newFields[fieldIndex].options.push({ text: "" });
    setFields(newFields);
  };

  const removeOption = (fieldIndex: number, optionIndex: number) => {
    const newFields = [...fields];
    if (newFields[fieldIndex].options.length === 1) return;
    newFields[fieldIndex].options.splice(optionIndex, 1);
    setFields(newFields);
  };

  const updateOptionText = (
    fieldIndex: number,
    optionIndex: number,
    text: string
  ) => {
    const newFields = [...fields];
    newFields[fieldIndex].options[optionIndex].text = text;
    setFields(newFields);
  };

  const handleSurveyUsageChange = (useSurvey: boolean) => {
    setIsSurveyUsed(useSurvey);
    if (!useSurvey) {
      setFields([]);
    } else {
      if (initialFields.length > 0) {
        setFields(initialFields)
      } else {
        addField()
      }
    }
  };

  const handleSave = (type: boolean) => {
    const data: ApplyRegisterSurveyData = {
      is_survey: isSurveyUsed,
      surveys: fields.map((field) => ({
        type: field.type,
        title: field.title,
        options:
            field.type === 0 || field.type === 1
                ? field.options.map((opt) => opt.text)
                : [],
        required: field.required,
        is_reject: field.isReject,
      })),
      is_reject: {
        survey: false, // 필요에 따라 설정
      },
    };

    console.log("API 데이터:", data);

    // Zod 유효성 검사 수행
    const validation = editApplySurveySchema.safeParse(data);

    if (!validation.success) {
      const errors: FormErrors = {};

      validation.error.errors.forEach((err) => {
        const path = err.path;
        const message = err.message;

        if (path[0] === "surveys" && typeof path[1] === "number") {
          const index = path[1];
          const field = path[2];

          if (!errors.surveys) {
            errors.surveys = [];
          }
          if (!errors.surveys[index]) {
            errors.surveys[index] = {};
          }

          if (field === "options" && path.length > 3) {
            const optionIndex = path[3];
            if (!errors.surveys[index].options) {
              errors.surveys[index].options = [];
            }
            errors.surveys[index].options[optionIndex] = message;
          } else if (field) {
            errors.surveys[index][field as keyof typeof errors.surveys[number]] = message;
          }
        } else if (path[0] === "is_reject" && path[1] === "survey") {
          errors.is_reject = {
            survey: message,
          };
        } else if (path[0] === "is_survey") {
          errors.is_survey = message;
        }
      });

      setFormErrors(errors);
      console.log(validation.error);
      openToast("잘못된 입력값 입니다.");
      return;
    }

    // 유효성 검사를 통과한 경우 에러 상태 초기화
    setFormErrors({});

    // API 호출 수행
    mutate(
        {
          token: authInfo.token,
          event_id: id!,
          data: data,
        },
        {
          onSuccess: () =>
              type
                  ? openToast("임시저장 되었습니다.")
                  : navigate(`/host/my/apply-register/edit/${id}/faq`),
          onError: (error) => {
            console.error("Mutation failed:", error);
            openToast("저장 중 오류가 발생했습니다.");
          },
        }
    );
  };



  return (
    <div className="cont_area">
      <div className="cont_panel type2">
        <div className="tit_wrap">
          <h2 className="fs_40">사전 설문</h2>
        </div>
        <div className="tit_wrap mt_12">
          <h3 className="fs_18">
            사전 설문 제작을 통해 행사에 필요한 데이터를 받아보세요.
          </h3>
        </div>

        <div className="tit_wrap mt_62">
          <h3 className="fs_20">사전 설문 사용 여부</h3>
        </div>
        <div className="dis_flex align_start justify_between pr_52 mt_10">
          <div className="dis_flex w_767 gap32">
            <div className="checkbox02 flex1">
              <input
                id="useSurvey_yes"
                type="radio"
                name="useSurvey"
                value="yes"
                checked={isSurveyUsed}
                onChange={() => handleSurveyUsageChange(true)}
              />
              <label htmlFor="useSurvey_yes">사용함</label>
            </div>
            <div className="checkbox02 flex1">
              <input
                id="useSurvey_no"
                type="radio"
                name="useSurvey"
                value="no"
                checked={!isSurveyUsed}
                onChange={() => handleSurveyUsageChange(false)}
              />
              <label htmlFor="useSurvey_no">사용하지 않음</label>
            </div>
          </div>
        </div>

        {isSurveyUsed && (
          <>
            <div className="tit_wrap mt_55">
              <h3 className="fs_20">설문 리스트</h3>
            </div>

            {fields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className="dis_flex align_start justify_between pr_52 mt_14"
              >
                <div className="survey_card w_767">
                  <div className="head">
                    <input
                      type="text"
                      placeholder="설문 제목을 입력해주세요."
                      value={field.title}
                      onChange={(e) =>
                        updateField(fieldIndex, "title", e.target.value)
                      }
                      maxLength={50}
                      className={formErrors.surveys?.[fieldIndex]?.title ? "red" : ""}
                    />
                    <select
                      value={field.type}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        updateField(
                          fieldIndex,
                          "type",
                          Number(e.target.value) as SurveyField["type"]
                        )
                      }
                    >
                      <option value={0}>단일 선택</option>
                      <option value={1}>다중 선택</option>
                      <option value={2}>장문</option>
                    </select>
                  </div>

                  {(field.type === 0 || field.type === 1) && (
                    <div className="body">
                      {field.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="option_item">
                          <div className="option_input">
                            <input
                              type="text"
                              placeholder="옵션을 입력해주세요."
                              value={option.text}
                              onChange={(e) =>
                                updateOptionText(
                                  fieldIndex,
                                  optionIndex,
                                  e.target.value
                                )
                              }
                              maxLength={20}
                              className={formErrors.surveys?.[fieldIndex]?.options?.[optionIndex] ? "red" : ""} // 개별 옵션 오류 확인
                            />
                            {field.options.length > 1 && (
                              <button
                                type="button"
                                onClick={() =>
                                  removeOption(fieldIndex, optionIndex)
                                }
                                className="remove_option_btn"
                              >
                                X
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addOption(fieldIndex)}
                        className={`option_add_btn ${
                          field.options.length >= 10 ? "disabled" : ""
                        }`}
                        disabled={field.options.length >= 10}
                      >
                        옵션 추가
                      </button>
                    </div>
                  )}
                  <div className="btm">
                    <button
                      type="button"
                      onClick={() => removeField(fieldIndex)}
                      className="delete_btn"
                    ></button>
                    <i className="bor_line"></i>
                    <button
                      type="button"
                      onClick={() =>
                        updateField(fieldIndex, "required", !field.required)
                      }
                      className={`required_toggle_btn ${
                        field.required ? "active" : ""
                      }`}
                    >
                      필수
                      <i></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="dis_flex align_start justify_between pr_52 mt_25">
              <div className="w_767 dis_flex justify_end">
                <button
                  type="button"
                  onClick={addField}
                  className={`btn h_36 dark_blue ${
                    fields.length >= 5 ? "disabled" : ""
                  }`}
                  disabled={fields.length >= 5}
                >
                  추가하기
                </button>
              </div>
            </div>
          </>
        )}

        <div className="dis_flex justify_between mt_48">
          <div className="btn_wrap"></div>
          <div className="btn_wrap gap23">
            <button
              type="button"
              className="btn blue_bor"
              onClick={() => handleSave(true)}
            >
              임시 저장
            </button>
            <button
              type="button"
              className="btn dark_blue"
              onClick={() => handleSave(false)}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditApplySurvey;
