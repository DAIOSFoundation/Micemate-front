import React, { useState, useEffect } from "react";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import { Link, useParams } from "react-router-dom";
import { useApplyRegisterSurveyQuery } from "@/api/events/events.query";
import { Survey, SurveyData, surveyCheck } from "@/type";

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useApplyRegisterSurveyQuery({
    event_id: id,
  });
  const surveyData: SurveyData | undefined = data?.data;

  // 체크 결과값 저장
  const [checkedResult, setCheckedResult] = useState<surveyCheck>({
    survey: false,
    surveys: [],
  });

  // 체크박스 변경 핸들러
  const handleCheckboxChange = (key: string, idx?: number) => {
    setCheckedResult((prev) => {
      let newCheckedResult = { ...prev };

      if (key === "survey") {
        newCheckedResult.survey = !prev.survey;
      } else if (key === "surveys" && typeof idx === "number") {
        const newSurveys = [...prev.surveys];
        newSurveys[idx] = !newSurveys[idx];
        newCheckedResult.surveys = newSurveys;
      }

      return newCheckedResult;
    });
  };

  // 데이터가 로드되면 체크박스 초기화 (필요 시)
  useEffect(() => {
    if (surveyData) {
      let sessionData;

      const getData = sessionStorage.getItem("EVENT_SURVEY");
      let storageData = null;

      if (getData) {
        try {
          storageData = JSON.parse(getData);
        } catch (error) {
          console.error("sessionStorage 데이터 파싱 실패:", error);
        }
      }

      if (storageData && storageData.id === id) {
        setCheckedResult(storageData.reject);
      } else {
        const arr = surveyData.surveys?.map((val) => val.is_reject) || [];
        const initialCheckedResult: surveyCheck = {
          survey: surveyData.is_reject.survey,
          surveys: arr,
        };

        sessionData = {
          id: id,
          reject: {
            survey: initialCheckedResult.survey,
            surveys: [...initialCheckedResult.surveys],
          },
        };
        sessionStorage.setItem("EVENT_SURVEY", JSON.stringify(sessionData));
        setCheckedResult(initialCheckedResult);
      }
    }
  }, [surveyData, id]);

  useEffect(() => {
    const sessionData = {
      id: id,
      reject: {
        survey: checkedResult.survey,
        surveys: [...checkedResult.surveys],
      },
    };
    sessionStorage.setItem("EVENT_SURVEY", JSON.stringify(sessionData));
  }, [checkedResult, id]);

  if (isLoading) {
    return <div className="container">로딩 중...</div>;
  }

  if (isError || !surveyData) {
    return <div className="container">데이터를 불러오는 데 실패했습니다.</div>;
  }

  return (
      <div className="container">
        <SideMenu />

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

            <div className="dis_flex justify_end mt_30">
              <div className="fs_18 fw_500 pr_20">수정요청 항목</div>
            </div>

            {/* 행사 정보 확인 섹션 */}
            <div className="tit_wrap mt_30">
              <h3 className="fs_20">행사 정보 확인</h3>
            </div>
            <div className="dis_flex align_start justify_between pr_52 mt_10">
              <div className="dis_flex w_767 gap32">
                <div className="checkbox02 flex1">
                  <input
                      id="useSurvey_yes"
                      type="radio"
                      name="useSurvey"
                      value="yes"
                      checked={surveyData.is_survey}
                      readOnly
                  />
                  <label htmlFor="useSurvey_yes">사용함</label>
                </div>
                <div className="checkbox02 flex1">
                  <input
                      id="useSurvey_no"
                      type="radio"
                      name="useSurvey"
                      value="no"
                      checked={!surveyData.is_survey}
                      readOnly
                  />
                  <label htmlFor="useSurvey_no">사용하지 않음</label>
                </div>
              </div>
              <div className="checkbox big">
                <input
                    id="chk_event_info"
                    type="checkbox"
                    checked={Boolean(checkedResult.survey)}
                    onChange={() => handleCheckboxChange('survey')}
                />
                <label htmlFor="chk_event_info"></label>
              </div>
            </div>

            <div className="tit_wrap mt_10">
              <h3 className="fs_20">설문 리스트</h3>
            </div>

            {/* 설문 리스트 렌더링 */}
            {surveyData.surveys && surveyData.surveys.length > 0 ? (
                surveyData.surveys.map((survey: Survey, index: number) => (
                    <div
                        className="dis_flex align_start justify_between pr_52 mt_14"
                        key={index}
                    >
                      <div className="survey_card w_767">
                        <div className="head">
                          <input
                              type="text"
                              value={survey.title}
                              readOnly
                          />
                          <select value={survey.type} disabled>
                            <option value={0}>단일 선택</option>
                            <option value={1}>다중 선택</option>
                            <option value={2}>장문</option>
                          </select>
                        </div>
                        <div className="body">
                          {(survey.type === 0 || survey.type === 1) && (
                              <>
                                {survey.options && survey.options.length > 0 ? (
                                    survey.options.map((option, optIndex) => (
                                        <div className="option_tit" key={optIndex}>
                                          <span>옵션 {optIndex + 1}:</span>
                                          <input
                                              type="text"
                                              value={option}
                                              readOnly
                                          />
                                        </div>
                                    ))
                                ) : (
                                    <div className="mt-2">옵션이 없습니다.</div>
                                )}
                              </>
                          )}
                        </div>
                        <div className="btm">
                          <button
                              className={`required_toggle_btn ${
                                  survey.required ? "active" : ""
                              }`}
                              disabled
                          >
                            필수<i></i>
                          </button>
                        </div>
                      </div>
                      <div className="checkbox big">
                        <input
                            id={`chk_survey_${index}`}
                            type="checkbox"
                            checked={Boolean(checkedResult.surveys[index]) || false}
                            onChange={() => handleCheckboxChange('surveys', index)}
                        />
                        <label htmlFor={`chk_survey_${index}`}></label>
                      </div>
                    </div>
                ))
            ) : (
                <div className="mt-4">설문이 없습니다.</div>
            )}

            <div className="dis_flex justify_between mt_48">
              <Link to="/event" className="fs_18 fw_600">
                &lt; 리스트로 돌아가기
              </Link>
              <div className="btn_wrap gap23">
                <Link to={`/event/apply/${id}/information`} className="btn gray">
                  뒤로
                </Link>
                <Link
                    to={`/event/apply/${id}/faq`}
                    className="btn light_blue"
                >
                  다음
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;
