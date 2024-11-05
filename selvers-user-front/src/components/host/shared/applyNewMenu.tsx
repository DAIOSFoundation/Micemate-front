import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ApplyNewMenu = () => {
  const { id } = useParams();
  const [isOn, setIsOn] = useState(true);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };

  const activeTarget = (url: string) => {
    if (location.pathname.indexOf(url) >= 0) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div className="menu_hide">
      <div className="title_tag">행사 개설하기</div>
      <ul className="lnb02">
        <li>
          <p
            onClick={toggleDropdown}
            className={`depth01 ${isOn ? "active" : ""}`}
            style={{ cursor: "pointer" }}
          >
            행사 상세설정
            <i className="arrow_b_icon"></i>
          </p>
          {isOn && (
            <div className="depth02_list active">
              <Link
                to={`/host/my/apply-register/edit/${id}/general`}
                className={`depth02 ${activeTarget(
                  `/host/my/apply-register/edit/${id}/general`
                )}`}
              >
                기본정보
              </Link>
              <Link
                to={`/host/my/apply-register/edit/${id}/detail`}
                className={`depth02 ${activeTarget(
                  `/host/my/apply-register/edit/${id}/detail`
                )}`}
              >
                상세페이지
              </Link>
              <Link
                to={`/host/my/apply-register/edit/${id}/information`}
                className={`depth02 ${activeTarget(
                  `/host/my/apply-register/edit/${id}/information`
                )}`}
              >
                모집정보
              </Link>
              {/* <Link
                to={`/host/my/apply-register/edit/${id}/survey`}
                className={`depth02 ${activeTarget(
                  `/host/my/apply-register/edit/${id}/survey`
                )}`}
              >
                사전설문
              </Link>
              <Link
                to={`/host/my/apply-register/edit/${id}/faq`}
                className={`depth02 ${activeTarget(
                  `/host/my/apply-register/edit/${id}/faq`
                )}`}
              >
                FAQ & 문의
              </Link> */}
            </div>
          )}
        </li>
        <li>
          <Link to="./행사설정_참가자관리.html" className="depth01">
            참가자 관리
          </Link>
        </li>
        <li>
          <Link to="./행사설정_참가기업관리.html" className="depth01">
            참가기업 관리
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ApplyNewMenu;
