import { Link } from "react-router-dom";

const EditApplyfinish = () => {
  return (
    <div className="cont_area">
      <div className="cont_panel min_h_864">
        <div className="inner">
          <div className="txt_center mt_190">
            <p className="fs_24 fw_700">행사 등록이 완료되었습니다</p>
            <p className="fs_24 fw_500 mt_44">
              현재 행사는 <b>승인 대기 상태</b>입니다.
              <br />
              24시간 이내 처리가 완료될 예정이며, <br />
              심사결과는 이메일로 전송됩니다.
            </p>

            <div className="btn_wrap mt_44">
              <Link to="/host/my/dashboard" className="btn dark_blue w_384">
                대시보드로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditApplyfinish;
