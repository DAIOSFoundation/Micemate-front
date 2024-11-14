import React, { ChangeEvent, useState, useEffect } from "react";
import {useApplyRegisterFaqQuery, useApplyRegisterFaqMutation, useApplySubmitMutation} from "@/api/events/events.query";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { UserInformationRequest, FaqField, FaqUser } from "@/type";
import { useToast } from "@/hook/useToast";
import { z } from "zod";


// FAQ 필드 스키마 정의
const faqFieldSchema = z.object({
  question: z
    .string()
    .min(1, "질문을 입력해주세요.")
    .max(50, "질문은 최대 50자입니다."),
  answer: z
    .string()
    .min(1, "답변을 입력해주세요.")
    .max(100, "답변은 최대 100자입니다."),
});

// 전체 스키마 정의
const editApplyFaqSchema = z.object({
  is_FAQ: z.boolean(),
  faqs: z
    .array(faqFieldSchema)
    .max(5, "최대 5개의 FAQ를 추가할 수 있습니다.")
    .optional(),
  contact_name: z
    .string()
    .min(1, "이름을 입력해주세요.")
    .max(50, "이름은 최대 50자입니다."),
  contact_email: z.string().email("유효한 이메일을 입력해주세요."),
  contact_number: z
    .string()
    .min(1, "휴대전화 번호를 입력해주세요.")
    .regex(/^[0-9\-+\s()]*$/, "유효한 전화번호를 입력해주세요."),
})
  .superRefine((data, ctx) => {
    if (data.is_FAQ) {
      if (!data.faqs || data.faqs.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "is_FAQ가 true일 때는 최소 1개의 FAQ가 필요합니다.",
          path: ["faqs"],
        });
      }
    } else {
      if (data.faqs && data.faqs.length > 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "is_FAQ가 false일 때는 faqs가 비어 있어야 합니다.",
          path: ["faqs"],
        });
      }
    }
  });

// 에러 메시지 타입 정의
type FormErrors = {
  is_FAQ?: string;
  faqs?: Array<{
    question?: string;
    answer?: string;
  }>;
  contact_name?: string;
  contact_email?: string;
  contact_number?: string;
};

interface UserInfoContext {
  authInfo: UserInformationRequest;
}

const EditApplyFaq: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { authInfo } = useOutletContext<UserInfoContext>();
  const { data: faqData } = useApplyRegisterFaqQuery({
    token: authInfo.token,
    event_id: id,
  });
  const useApplySubmit = useApplySubmitMutation();

  const [isFaqUsed, setIsFaqUsed] = useState<boolean>(true); // 기본값을 true로 설정
  const [initialFields, setInitialFields] = useState<FaqField[]>([]);
  const [fields, setFields] = useState<FaqField[]>([]);
  const [faquser, setFaquser] = useState<FaqUser>({
    contact_name: "",
    contact_email: "",
    contact_number: "",
  });
  const [ isReject, setIsReject ] = useState<boolean>(false);
  const [ contactReject, setContactReject ] = useState<boolean>(false);
  const { mutate } = useApplyRegisterFaqMutation();

  const [formErrors, setFormErrors] = useState<FormErrors>({}); // 에러 상태 관리

  const { openToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (faqData && faqData.success) {
      setIsReject(faqData.data.is_reject.faq);
      setContactReject(faqData.data.is_reject.contact);
      const { is_FAQ, faqs, contact_name, contact_email, contact_number } = faqData.data;

      if (is_FAQ !== undefined) {
        setIsFaqUsed(is_FAQ);
      } else {
        setIsFaqUsed(true); // is_FAQ 값이 없으면 기본값 유지
      }
      const User: FaqUser = {
        contact_name: contact_name,
        contact_email: contact_email,
        contact_number: contact_number,
      };
      setFaquser(User);
      if (is_FAQ === true && faqs.length > 0) {
        const mappedFields: FaqField[] = faqs.map((field: any) => ({
          question: field.question,
          answer: field.answer,
          required: field.required,
          is_reject: field.is_reject,
        }));
        const User: FaqUser = {
          contact_name: contact_name,
          contact_email: contact_email,
          contact_number: contact_number,
        };
        setInitialFields(mappedFields);
        setFields(mappedFields);
        setFaquser(User);
      } else {
        if (is_FAQ === true) {
          setFields([defaultFaqField]);
        } else {
          setFields([]);
        }
      }
    }
  }, [faqData]);

  const defaultFaqField: FaqField = {
    question: "",
    answer: "",
    required: true,
    is_reject: false,
  }

  // FAQ 필드 추가 함수
  const addField = () => {
    if (fields.length >= 5) {
      openToast("최대 5개의 FAQ를 추가할 수 있습니다.");
      return;
    }
    setFields([
      ...fields,
      {
        question: "",
        answer: "",
        required: true,
        is_reject: false,
      },
    ]);
  };

  // FAQ 필드 삭제 함수
  const removeField = (index: number) => {
    if (fields.length === 1) {
      openToast("최소 1개의 FAQ는 있어야 합니다.");
      return;
    }
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  // FAQ 필드 업데이트 함수
  const updateField = <K extends keyof FaqField>(
    index: number,
    key: K,
    value: FaqField[K]
  ) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };
  

  // 문의 담당자 정보 업데이트 함수
  const handleFaquserChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFaquser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // FAQ 사용 여부 변경 함수
  const handleFaqUsageChange = (useFaq: boolean) => {
    setFields([]);
    setIsFaqUsed(useFaq);
    if (!useFaq) {
      setFields([]);
    } else {
      if (initialFields.length > 0) {
        setFields(initialFields); // 초기 데이터를 복원
      } else {
        setFields([defaultFaqField]);
      }
    }
  };

  const submitHandler = () => {
    useApplySubmit.mutate(
        { token: authInfo.token, event_id: id },
        {
          onSuccess: () => {
            navigate("/host/my/apply-register/edit/finish");
          },
          onError: () => {
            openToast("작성중인 필드가 있습니다.");
          },
        }
    );
  };

  // 저장 버튼 클릭 시 호출되는 함수
  const handleSave = (type: any) => {
    const data = {
      is_FAQ: isFaqUsed,
      faqs: fields.map((field) => ({
        question: field.question,
        answer: field.answer,
        // required 및 is_reject 필드 제거
      })),
      contact_name: faquser.contact_name || "",
      contact_email: faquser.contact_email || "",
      contact_number: faquser.contact_number || "",
    };

    console.log("API   : ", data);

    try {
      editApplyFaqSchema.parse(data);
      setFormErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        // 에러 메시지를 구조화하여 상태에 저장
        const errors: FormErrors = {};
        error.errors.forEach((err) => {
          const path = err.path;
          const message = err.message;

          if (path[0] === "faqs" && typeof path[1] === "number") {
            const index = path[1];
            if (!errors.faqs) {
              errors.faqs = [];
            }
            if (!errors.faqs[index]) {
              errors.faqs[index] = {};
            }
            if (path[2] === "question") {
              errors.faqs[index].question = message;
            }
            if (path[2] === "answer") {
              errors.faqs[index].answer = message;
            }
          } else {
            const field = path[0];
            if (field === "contact_name") {
              errors.contact_name = message;
            }
            if (field === "contact_email") {
              errors.contact_email = message;
            }
            if (field === "contact_number") {
              errors.contact_number = message;
            }
            if (field === "is_FAQ") {
              errors.is_FAQ = message;
            }
          }
        });
        setFormErrors(errors);
        console.log(error);
        openToast("잘못된 입력값 입니다.");
        return;
      }
      openToast("예기치 못한 오류가 발생했습니다.");
      return;
    }

    // 여기서 API 호출을 수행합니다.
    mutate(
        {
          token: authInfo.token,
          event_id: id!,
          data: data,
        },
        {
          onSuccess: () => {
            type ? openToast("FAQ가 성공적으로 저장되었습니다.") : submitHandler();
          },
          onError: (error) => {
            console.error("Mutation failed:", error);
            // 오류 시 사용자에게 알림
          },
        }
    );
  };

  return (
    <div className="cont_area">
      <div className="cont_panel type2">
        <div className="tit_wrap">
          <h2 className="fs_40">FAQ & 문의</h2>
        </div>
        <div className="tit_wrap mt_12">
          <h3 className="fs_18">
            참가자 문의에 대한 담당자 정보를 입력해주세요.
          </h3>
        </div>

        <div className="tit_wrap mt_62">
          <h3 className="fs_20">FAQ 사용 여부</h3>
        </div>
        <div className="dis_flex align_start justify_between pr_52 mt_10">
          <div className="dis_flex w_767 gap32">
            <div className="checkbox02 flex1">
              <input
                id="faq_use_yes"
                type="radio"
                name="faqUsage"
                checked={isFaqUsed}
                onChange={() => handleFaqUsageChange(true)}
              />
              <label htmlFor="faq_use_yes" className={isReject ? "outline" : "" }>사용함</label>
            </div>
            <div className="checkbox02 flex1">
              <input
                id="faq_use_no"
                type="radio"
                name="faqUsage"
                checked={!isFaqUsed}
                onChange={() => handleFaqUsageChange(false)}
              />
              <label htmlFor="faq_use_no" className={isReject ? "outline" : "" }>사용하지 않음</label>
            </div>
          </div>
        </div>

        {isFaqUsed && (
          <>
            <div className="tit_wrap mt_55">
              <h3 className="fs_20">FAQ 리스트</h3>
            </div>

            {fields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className="dis_flex align_start justify_between pr_52 mt_14"
              >
                <div className={field.is_reject ? "survey_card w_767 outline" :"survey_card w_767"}>
                  <div className="head">
                    <input
                      className={formErrors.faqs && formErrors.faqs[fieldIndex]?.question ? "red" : "" }
                      type="text"
                      id={`question-${fieldIndex}`}
                      name="question"
                      value={field.question}
                      onChange={(e) =>
                        updateField(
                          fieldIndex,
                          "question",
                          e.target.value
                        )
                      }
                      maxLength={50}
                      placeholder="질문을 입력해주세요."
                      required
                    />
                  </div>
                  <div className="body">
                    <input
                      className={formErrors.faqs && formErrors.faqs[fieldIndex]?.answer ? "red" : ""}
                      id={`answer-${fieldIndex}`}
                      type="text"
                      name="answer"
                      value={field.answer}
                      onChange={(e) =>
                        updateField(
                          fieldIndex,
                          "answer",
                          e.target.value
                        )
                      }
                      maxLength={100}
                      placeholder="답변을 입력해주세요."
                      required
                    />
                  </div>
                  <div className="btm">
                    <button
                      type="button"
                      onClick={() => removeField(fieldIndex)}
                      className="delete_btn"
                      aria-label={`FAQ ${fieldIndex + 1} 삭제`}
                    >
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ 필드 추가 버튼 */}
            <div className="dis_flex align_start justify_between pr_52 mt_25">
              <div className="w_767 dis_flex justify_end">
                <button
                  type="button"
                  onClick={addField}
                  className="btn h_36 dark_blue"
                  disabled={fields.length >= 5}
                >
                  추가하기
                </button>
              </div>
            </div>
          </>
        )}

        {/* 문의 담당자 정보 입력 */}
        <div className="tit_wrap mt_55">
          <h3 className="fs_20">
            문의 담당자 <i className="col_red">*</i>
          </h3>
        </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              className={contactReject ? "w_767 outline" :"w_767"}
              type="text"
              name="contact_name"
              value={faquser.contact_name}
              onChange={handleFaquserChange}
              placeholder="이름"
              maxLength={50} // 이름 최대 50자
              required
            />

          </div>
          {formErrors.contact_name && (<p className="err_msg_mt">{formErrors.contact_name}</p>)}
          <div className="dis_flex align_start justify_between pr_52 mt_10 mb-2">
            <input
              className={contactReject ? "w_767 outline" :"w_767"}
              type="email"
              name="contact_email"
              value={faquser.contact_email}
              onChange={handleFaquserChange}
              placeholder="이메일"
              required
            />
          </div>
          {formErrors.contact_email && (<p className="err_msg_mt">{formErrors.contact_email}</p>)}
          <div className="dis_flex align_start justify_between pr_52 mt_10 mb-2">
            <input
              className={contactReject ? "w_767 outline" :"w_767"}
              type="tel"
              name="contact_number"
              value={faquser.contact_number}
              onChange={handleFaquserChange}
              placeholder="휴대전화 번호"
              required
            />
          </div>
          {formErrors.contact_number && (<p className="err_msg_mt">{formErrors.contact_number}</p>)}

          {/* 저장 및 게시 버튼 */}
          <div className="dis_flex justify_between mt_48 mb-2">
            <div className="btn_wrap"></div>
            <div className="btn_wrap gap23">
              <button type="submit" className="btn dark_blue" onClick={() => handleSave(true)}>
                저장
              </button>
              <button type="button" className="btn dark_blue" onClick={() => handleSave(false)}>
                행사 게시
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default EditApplyFaq;
