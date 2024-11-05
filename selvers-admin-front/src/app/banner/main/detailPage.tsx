import { Link } from "react-router-dom";
import SideMenu from "@components/shared/sideMenu/sideMenu";

const Page = () => {
  return (
    <div className="container">
      <div className="history_tit">
        <Link className="item" to="/banner/main">
          배너관리
        </Link>
        <Link className="item" to="/banner/main">
          메인배너
        </Link>
        <p className="item">
          추가
          {/* 수정 */}
        </p>
      </div>
      <SideMenu />

      <div className="cont_area">
        <div className="cont_panel">
          <div className="tit_wrap">
            <h3 className="tit02">
              배너명 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex mt_10">
            <input className="w_767" type="text" placeholder="배너명 입력" />
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="tit02">
              노출일 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex mt_10">
            <div className="dis_flex w_767">
              <div className="date_inp_wrap flex1">
                <input
                  className="w_full"
                  type="text"
                  readOnly
                  placeholder="노출 시작 날짜"
                />
                <label htmlFor="start_date"></label>
                <input type="date" id="start_date" />
              </div>
              <span className="fs_20">&nbsp;~&nbsp;</span>
              <div className="date_inp_wrap flex1">
                <input
                  className="w_full"
                  type="text"
                  readOnly
                  placeholder="노출 종료 날짜"
                />
                <label htmlFor="start_end"></label>
                <input type="date" id="start_end" />
              </div>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="tit02">
              배너 이미지 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex mt_10">
            <div className="infomation_blue_box w_767">
              <div className="dis_flex gap5 fs_12 fw_600">
                <i className="info_icon"></i>
                <span>배너 이미지 등록 가이드</span>
              </div>
              <div className="mt_8 fs_12 fw_500 pl_15">
                · 10MB 이하의 JPG, JPEG, PNG 파일
                <br />· 해상도 1920*1080픽셀
              </div>
            </div>
          </div>
          <div className="dis_flex mt_10">
            <div>
              <input type="file" id="fileInp01" className="hide" />
              <label htmlFor="fileInp01" className="file_inp">
                0 / 1
              </label>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="tit02">
              URL <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex mt_10">
            <input className="w_767" type="text" placeholder="URL 입력" />
          </div>

          <div className="mt_48">
            <div className="checkbox">
              <input id="chk01" type="checkbox" />
              <label htmlFor="chk01">노출 안함</label>
            </div>
          </div>

          <div className="dis_flex justify_between mt_64">
            <div className="btn_wrap"></div>
            <div className="btn_wrap gap23">
              <button className="btn blue">취소</button>
              <button className="btn blue">추가</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
