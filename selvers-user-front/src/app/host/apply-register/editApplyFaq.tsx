import React, { ChangeEvent, useState, useEffect } from "react";
import { useApplyRegisterFaqQuery, useApplyRegisterFaqMutation } from "@/api/events/events.query";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { UserInformationRequest, FaqField, FaqUser } from "@/type";
import { useToast } from "@/hook/useToast";

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

  const [isFaqUsed, setIsFaqUsed] = useState<boolean>(true); // 기본값을 true로 설정
  const [fields, setFields] = useState<FaqField[]>([]);
  const [faquser, setFaquser] = useState<FaqUser>({
    contact_name: "",
    contact_email: "",
    contact_number: "",
  });
  const { mutate } = useApplyRegisterFaqMutation();

  const { openToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (faqData && faqData.success) {
      const { is_FAQ, faqs, contact_name, contact_email, contact_number } = faqData.data;

      if (is_FAQ !== undefined) {
        setIsFaqUsed(is_FAQ);
      } else {
        setIsFaqUsed(true); // is_FAQ 값이 없으면 기본값 유지
      }

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
        setFields(mappedFields);
        setFaquser(User);
      } else {
        setFields([]);
      }
    }
  }, [faqData]);

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
    setIsFaqUsed(useFaq);
    if (!useFaq) {
      setFields([]);
    } else if (fields.length === 0) {
      addField();
    }
  };

  // 저장 버튼 클릭 시 호출되는 함수
  const handleSave = (type: any) => {
    // 유효성 검사
    for (let i = 0; i < fields.length; i++) {
      const faq = fields[i];
      if (faq.question.trim() === "") {
        alert(`FAQ 질문을 입력해주세요. (${i + 1}번 FAQ)`);
        return;
      }
      if (faq.question.length > 100) {
        alert(`FAQ 질문은 100자 이하여야 합니다. (${i + 1}번 FAQ)`);
        return;
      }
      if (faq.answer.trim() === "") {
        alert(`FAQ 답변을 입력해주세요. (${i + 1}번 FAQ)`);
        return;
      }
      if (faq.answer.length > 500) {
        alert(`FAQ 답변은 500자 이하여야 합니다. (${i + 1}번 FAQ)`);
        return;
      }
    }

    if (faquser.contact_name.trim() === "") {
      alert("문의 담당자의 이름을 입력해주세요.");
      return;
    }
    if (faquser.contact_email.trim() === "") {
      alert("문의 담당자의 이메일을 입력해주세요.");
      return;
    }
    if (faquser.contact_number.trim() === "") {
      alert("문의 담당자의 휴대전화 번호를 입력해주세요.");
      return;
    }

    const data = {
      is_FAQ: isFaqUsed,
      faqs: fields.map((field) => ({
        question: field.question,
        answer: field.answer,
        required: field.required,
        is_reject: field.is_reject,
      })),
      contact_name: faquser.contact_name,
      contact_email: faquser.contact_email,
      contact_number: faquser.contact_number,
    };

    // 여기서 API 호출을 수행합니다.
    mutate(
      {
        token: authInfo.token,
        event_id: id!,
        data: data,
      },
      {
        onSuccess: (response) => {
          type ? openToast("FAQ가 성공적으로 저장되었습니다.") : navigate(`/host/my/apply-register/edit/finish`);
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
              <label htmlFor="faq_use_yes">사용함</label>
            </div>
            <div className="checkbox02 flex1">
              <input
                id="faq_use_no"
                type="radio"
                name="faqUsage"
                checked={!isFaqUsed}
                onChange={() => handleFaqUsageChange(false)}
              />
              <label htmlFor="faq_use_no">사용하지 않음</label>
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
                <div className="survey_card w_767">
                  <div className="head">
                    <input
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
                      maxLength={100} // 질문 최대 100자
                      placeholder="질문을 입력해주세요."
                      required
                    />
                    
                  </div>
                  <div className="body">
                    <input
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
                      maxLength={500} // 답변 최대 500자
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
              className="w_767"
              type="text"
              name="contact_name"
              value={faquser.contact_name}
              onChange={handleFaquserChange}
              placeholder="이름"
              maxLength={50} // 이름 최대 50자
              required
            />
            
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              className="w_767"
              type="email"
              name="contact_email"
              value={faquser.contact_email}
              onChange={handleFaquserChange}
              placeholder="이메일"
              required
            />
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              className="w_767"
              type="tel"
              name="contact_number"
              value={faquser.contact_number}
              onChange={handleFaquserChange}
              placeholder="휴대전화 번호"
              required
            />
          </div>

          {/* 저장 및 게시 버튼 */}
          <div className="dis_flex justify_between mt_48">
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
