import React, { useState, useEffect } from "react";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import { Link, useParams } from "react-router-dom";
import { useApplyRegisterFaqQuery } from "@/api/events/events.query";
import { FaqCheck, FaqData, Faq } from "@/type";
import AcceptBtns from "@components/page/event/acceptBtns";

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useApplyRegisterFaqQuery({
    event_id: id,
  });

  const faqData: FaqData | undefined = data?.data;

  const [checkResult, setCheckResult] = useState<FaqCheck>({
    faq: false,
    faqs: [],
    contact: false,
  });

  const handleCheckboxChange = (key: string, idx: number) => {
    setCheckResult((prev) => {
      let newCheckResult = { ...prev };

      if (key === "faq") {
        newCheckResult.faq = !prev.faq;
      } else if (key === "faqs") {
        const newFaqs = [...prev.faqs];
        newFaqs[idx] = !newFaqs[idx];
        newCheckResult.faqs = newFaqs;
      } else if (key === "contact") {
        newCheckResult.contact = !prev.contact;
      }
      sessionStorage.setItem('EVENT_FAQ', JSON.stringify({
        id : id,
        reject: newCheckResult
      }));
      return newCheckResult;
    });
  };
// faqData 데이터가 로드되면 세션데이터 추가
  useEffect(() => {
    sessionStorage.removeItem('EVENT_FAQ');
    if (faqData) {
      let sessionData;
      const arr = faqData.faqs?.map((val) => val.is_reject) || [];
      const initialCheckedResult: FaqCheck = {
        faq: faqData.is_reject.faq,
        faqs: arr,
        contact: faqData.is_reject.contact,
      };

      sessionData = {
        id: id,
        reject: {
          faq: initialCheckedResult.faq,
          faqs: [...initialCheckedResult.faqs],
          contact: initialCheckedResult.contact,
        },
      };
      sessionStorage.setItem("EVENT_FAQ", JSON.stringify(sessionData));
      setCheckResult(initialCheckedResult);
    }
  }, [faqData, id]);

  if (isLoading) {
    return <div className="container">로딩 중...</div>;
  }

  if (isError || !faqData) {
    return <div className="container">데이터를 불러오는 데 실패했습니다.</div>;
  }

  return (
      <div className="container">
        <SideMenu />

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

            <div className="dis_flex justify_end mt_30">
              <div className="fs_18 fw_500 pr_20">수정요청 항목</div>
            </div>

            <div className="tit_wrap mt_10">
              <h3 className="fs_20">FAQ 사용 여부</h3>
            </div>
            <div className="dis_flex align_start justify_between pr_52 mt_10">
              <div className="dis_flex w_767 gap32">
                <div className="checkbox02 flex1">
                  <input
                      id="useFaq_yes"
                      type="radio"
                      name="useFaq"
                      value="yes"
                      checked={faqData.is_FAQ}
                      readOnly
                  />
                  <label htmlFor="useFaq_yes">사용함</label>
                </div>
                <div className="checkbox02 flex1">
                  <input
                      id="useFaq_no"
                      type="radio"
                      name="useFaq"
                      value="no"
                      checked={!faqData.is_FAQ}
                      readOnly
                  />
                  <label htmlFor="useFaq_no">사용하지 않음</label>
                </div>
              </div>
              <div className="checkbox big">
                <input
                    id="chk_event_info"
                    type="checkbox"
                    checked={Boolean(checkResult.faq)}
                    onChange={() => {
                      handleCheckboxChange("faq", 0);
                    }}
                />
                <label htmlFor="chk_event_info"></label>
              </div>
            </div>

            <div className="tit_wrap mt_55">
              <h3 className="fs_20">FAQ 리스트</h3>
            </div>
            {/* faqData.faqs를 안전하게 처리 */}
            {faqData.faqs && faqData.faqs.length > 0 ? (
                faqData.faqs.map((faq: Faq, index: number) => (
                    <div
                        className="dis_flex align_start justify_between pr_52 mt_14"
                        key={index}
                    >
                      <div className="survey_card w_767">
                        <div className="head">
                          <input
                              type="text"
                              placeholder="Q. 제목을 입력해주세요."
                              value={faq.question}
                              readOnly
                          />
                        </div>
                        <div className="body">
                          <input
                              type="text"
                              placeholder="A. 답변을 입력해주세요."
                              value={faq.answer}
                              readOnly
                          />
                        </div>
                      </div>
                      <div className="checkbox big">
                        <input
                            id={`chk_faq_${index}`}
                            type="checkbox"
                            checked={Boolean(checkResult.faqs[index]) ?? false}
                            onChange={() => handleCheckboxChange("faqs", index)}
                        />
                        <label htmlFor={`chk_faq_${index}`}></label>
                      </div>
                    </div>
                ))
            ) : (
                <div className="mt-4">FAQ가 없습니다.</div>
            )}

            <div className="tit_wrap mt_55">
              <h3 className="fs_20">
                문의 담당자 <i className="col_red">*</i>
              </h3>
            </div>
            <div className="dis_flex align_start justify_between pr_52 mt_10">
              <input
                  className="w_767"
                  type="text"
                  value={faqData.contact_name}
                  readOnly
              />
              <div className="checkbox big">
                <input
                    id="chk_faq_contact"
                    type="checkbox"
                    checked={Boolean(checkResult.contact)}
                    onChange={() => handleCheckboxChange("contact", 0)}
                />
                <label htmlFor="chk_faq_contact"></label>
              </div>
            </div>
            <div className="dis_flex align_start justify_between pr_52 mt_10">
              <input
                  className="w_767"
                  type="text"
                  value={faqData.contact_email}
                  readOnly
              />
            </div>
            <div className="dis_flex align_start justify_between pr_52 mt_10">
              <input
                  className="w_767"
                  type="text"
                  value={faqData.contact_number}
                  readOnly
              />
            </div>

            <div className="dis_flex justify_between mt_48">
              <Link to="/event" className="fs_18 fw_600">
                &lt; 리스트로 돌아가기
              </Link>
              <AcceptBtns />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;
