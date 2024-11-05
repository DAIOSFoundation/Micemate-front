import { useApplyRegisterSurveyQuery } from "@/api/events/events.query";
import { useOutletContext, useParams } from "react-router-dom";
import { UserInformationRequest } from "@/type";
import { ChangeEvent, useState } from "react";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

const EditApplySurvey = () => {
  const { id } = useParams();
  const [_surveyStyle, setSurveyStyle] = useState("");
  const OutletContext = useOutletContext<UserInfoConText>();
  const authInfo = OutletContext.authInfo;
  const { data: _surveyQuery } = useApplyRegisterSurveyQuery({
    token: authInfo.token,
    event_id: id,
  });
  const [serveyOption, _setServeyOption] = useState(["option1", "option2"]);
  const [serveyForm, _setServeyForm] = useState({
    type: 0,
    title: "title",
    options: serveyOption,
    required: true,
    is_reject: false,
  });

  const [fields, setFields] = useState([
    {
      type: 0,
      title: "title",
      options: ["option1", "option2"],
      required: true,
      is_reject: false,
    },
  ]);

  const addFieldsHandler = () => {
    const form = [...fields, serveyForm];
    setFields(form);
  };

  const removeFieldsHandler = (index: number) => {
    if (fields.length === 1) {
      return;
    }
    setFields(fields.filter((_, i) => i !== index));
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
              <input id="rad01_1" type="radio" name="rad01" />
              <label htmlFor="rad01_1">사용함</label>
            </div>
            <div className="checkbox02 flex1">
              <input id="rad01_2" type="radio" name="rad01" />
              <label htmlFor="rad01_2">사용하지 않음</label>
            </div>
          </div>
        </div>

        <div className="tit_wrap mt_55">
          <h3 className="fs_20">설문 리스트</h3>
        </div>
        {/* 단일선택 */}
        {fields?.map((data, index) => {
          return (
            <div
              key={index}
              className="dis_flex align_start justify_between pr_52 mt_14"
            >
              <div className="survey_card w_767">
                <div className="head">
                  <input type="text" placeholder="설문 제목을 입력해주세요." />
                  <select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      setSurveyStyle(e.target.value);
                    }}
                  >
                    <option value="1" selected>
                      단일 선택
                    </option>
                    <option value="2">다중 선택</option>
                    <option value="3">장문</option>
                  </select>
                </div>

                {data.type === 0 && (
                  <>
                    <div className="body">
                      <div className="option_tit">옵션 1</div>
                      <div className="option_tit">
                        <input type="text" placeholder="옵션을 입력해주세요." />
                      </div>
                      <button className="option_add_btn">옵션 추가</button>
                    </div>
                    <div className="btm">
                      <button
                        onClick={() => removeFieldsHandler(index)}
                        className="delete_btn"
                      ></button>
                      <i className="bor_line"></i>
                      <button className="required_toggle_btn active">
                        필수<i></i>
                      </button>
                    </div>
                  </>
                )}
                {data.type === 1 && (
                  <>
                    <div className="body">
                      <div className="option_tit">옵션 1</div>
                      <div className="option_tit">
                        <input type="text" placeholder="옵션을 입력해주세요." />
                      </div>
                      <button className="option_add_btn">옵션 추가</button>
                    </div>
                    <div className="btm">
                      <button
                        onClick={() => removeFieldsHandler(index)}
                        className="delete_btn"
                      ></button>
                      <i className="bor_line"></i>
                      <button className="required_toggle_btn active">
                        필수<i></i>
                      </button>
                    </div>
                  </>
                )}
                {data.type === 2 && (
                  <>
                    <div className="body">
                      <input type="text" placeholder="텍스트를 입력하세요." />
                    </div>
                    <div className="btm">
                      <button
                        onClick={() => removeFieldsHandler(index)}
                        className="delete_btn"
                      ></button>
                      <i className="bor_line"></i>
                      <button className="required_toggle_btn">
                        필수<i></i>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}

        <div className="dis_flex align_start justify_between pr_52 mt_25">
          <div className="w_767 dis_flex justify_end">
            <button onClick={addFieldsHandler} className="btn h_36 dark_blue">
              추가하기
            </button>
          </div>
        </div>

        <div className="dis_flex justify_between mt_48">
          <div className="btn_wrap"></div>
          <div className="btn_wrap gap23">
            <button className="btn blue_bor">임시 저장</button>
            <button className="btn dark_blue">다음</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditApplySurvey;
