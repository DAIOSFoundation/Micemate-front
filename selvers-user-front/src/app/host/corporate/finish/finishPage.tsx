import { Link } from "react-router-dom";

const FinishPage = () => {
  return (
    <div className="container">
      <div className="login_pagi">
        <div className="inner">
          <div className="txt_center mt_100">
            <p className="fs_24 fw_700">계정신청이 완료되었습니다</p>
            <p className="fs_24 fw_500 mt_44">
              현재 계정은 <b>승인 대기 상태</b>입니다.
              <br />
              24시간 이내 처리가 완료될 예정이며, <br />
              심사결과는 이메일로 전송됩니다.
            </p>

            <div className="btn_wrap mt_44">
              <Link to="/host-main" className="btn dark_blue">
                메인 화면으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
