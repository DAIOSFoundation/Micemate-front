import SideMenu from "@components/shared/sideMenu/sideMenu";

const Page = () => {
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

          <div className="tit_wrap mt_10">
            <h3 className="fs_20">사전 설문 사용 여부</h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="dis_flex w_767 gap32">
              <div className="checkbox02 flex1">
                <input id="rad01_1" type="radio" name="rad01" checked />
                <label htmlFor="rad01_1">사용함</label>
              </div>
              <div className="checkbox02 flex1">
                <input id="rad01_2" type="radio" name="rad01" />
                <label htmlFor="rad01_2">사용하지 않음</label>
              </div>
            </div>
            <div className="checkbox big">
              <input id="chk01" type="checkbox" />
              <label htmlFor="chk01"></label>
            </div>
          </div>

          <div className="tit_wrap mt_55">
            <h3 className="fs_20">설문 리스트</h3>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_14">
            <div className="survey_card w_767">
              <div className="head">
                <input
                  type="text"
                  placeholder="설문 제목을 입력해주세요."
                  readOnly
                />
                <select disabled>
                  <option value="1" selected>
                    단일 선택
                  </option>
                  <option value="2">다중 선택</option>
                  <option value="3">장문</option>
                </select>
              </div>
              <div className="body">
                <div className="option_tit">옵션 1</div>
                <div className="option_tit">
                  <input
                    type="text"
                    placeholder="옵션을 입력해주세요."
                    readOnly
                  />
                </div>
                <button className="option_add_btn">옵션 추가</button>
              </div>
              <div className="btm">
                <button className="delete_btn"></button>
                <i className="bor_line"></i>
                <button className="required_toggle_btn active">
                  필수<i></i>
                </button>
              </div>
            </div>
            <div className="checkbox big">
              <input id="chk02" type="checkbox" />
              <label htmlFor="chk02"></label>
            </div>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_25">
            <div className="survey_card w_767">
              <div className="head">
                <input
                  type="text"
                  placeholder="설문 제목을 입력해주세요."
                  readOnly
                />
                <select disabled>
                  <option value="1">단일 선택</option>
                  <option value="2" selected>
                    다중 선택
                  </option>
                  <option value="3">장문</option>
                </select>
              </div>
              <div className="body">
                <div className="option_tit">옵션 1</div>
                <div className="option_tit">
                  <input
                    type="text"
                    placeholder="옵션을 입력해주세요."
                    readOnly
                  />
                </div>
                <button className="option_add_btn">옵션 추가</button>
              </div>
              <div className="btm">
                <button className="delete_btn"></button>
                <i className="bor_line"></i>
                <button className="required_toggle_btn active">
                  필수<i></i>
                </button>
              </div>
            </div>
            <div className="checkbox big">
              <input id="chk03" type="checkbox" />
              <label htmlFor="chk03"></label>
            </div>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_25">
            <div className="survey_card w_767">
              <div className="head">
                <input
                  type="text"
                  placeholder="설문 제목을 입력해주세요."
                  readOnly
                />
                <select disabled>
                  <option value="1">단일 선택</option>
                  <option value="2">다중 선택</option>
                  <option value="3" selected>
                    장문
                  </option>
                </select>
              </div>
              <div className="body">
                <input
                  type="text"
                  placeholder="텍스트를 입력하세요."
                  readOnly
                />
              </div>
              <div className="btm">
                <button className="delete_btn"></button>
                <i className="bor_line"></i>
                <button className="required_toggle_btn">
                  필수<i></i>
                </button>
              </div>
            </div>
            <div className="checkbox big">
              <input id="chk04" type="checkbox" />
              <label htmlFor="chk04"></label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_25">
            <div className="w_767 dis_flex justify_end">
              <button className="btn h_36 dark_blue">추가하기</button>
            </div>
          </div>

          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap">
              <button className="fs_18 fw_600">&lt; 리스트로 돌아가기</button>
            </div>
            <div className="btn_wrap gap23">
              <button className="btn gray">뒤로</button>
              <button className="btn light_blue">다음</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
