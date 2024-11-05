import SideMenu from "@components/shared/sideMenu/sideMenu";

const Page = () => {
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
            <h3 className="fs_20">FAQ 리스트</h3>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_14">
            <div className="survey_card w_767">
              <div className="head">
                <input
                  type="text"
                  placeholder="Q. 제목을 입력해주세요."
                  readOnly
                />
              </div>
              <div className="body">
                <input
                  type="text"
                  placeholder="A. 답변을 입력해주세요."
                  readOnly
                />
              </div>
              <div className="btm">
                <button className="file_btn"></button>
                <button className="delete_btn"></button>
              </div>
            </div>
            <div className="checkbox big">
              <input id="chk02" type="checkbox" />
              <label htmlFor="chk02"></label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_25">
            <div className="w_767 dis_flex justify_end">
              <button className="btn h_36 dark_blue">추가하기</button>
            </div>
          </div>

          <div className="tit_wrap mt_55">
            <h3 className="fs_20">
              문의 담당자 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input className="w_767" type="text" value="이름" readOnly />
            <div className="checkbox big">
              <input id="chk03" type="checkbox" />
              <label htmlFor="chk03"></label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input className="w_767" type="text" value="이메일" readOnly />
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              className="w_767"
              type="text"
              value="휴대전화 번호"
              readOnly
            />
          </div>

          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap">
              <button className="fs_18 fw_600">&lt; 리스트로 돌아가기</button>
            </div>
            <div className="btn_wrap gap23">
              <button className="btn gray">반려</button>
              <button className="btn light_blue">승인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
