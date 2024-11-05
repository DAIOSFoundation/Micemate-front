import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useApplyRegisterGeneralQuery } from "@/api/events/events.query";

const ApplyRegisterMenu = () => {
  const { id } = useParams();
  const [isOn, setIsOn] = useState(true);
  const location = useLocation();

  const { data: GeneralData } = useApplyRegisterGeneralQuery(
    id ? Number(id) : undefined
  );

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
    <div>
      <div className="title_tag">{GeneralData?.data?.title}</div>
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
                to={`/event/apply/${id}/general`}
                className={`depth02 ${activeTarget(
                  `/event/apply/${id}/general`
                )}`}
              >
                기본정보
              </Link>
              <Link
                to={`/event/apply/${id}/detail`}
                className={`depth02 ${activeTarget(
                  `/event/apply/${id}/detail`
                )}`}
              >
                상세페이지
              </Link>
              <Link
                to={`/event/apply/${id}/information`}
                className={`depth02 ${activeTarget(
                  `/event/apply/${id}/information`
                )}`}
              >
                모집정보
              </Link>
              {/* TODO : 2차 개발 범위 */}
              {/* <Link
                to={`/event/apply/${id}/survey`}
                className={`depth02 ${activeTarget(
                  `/event/apply/${id}/survey`
                )}`}
              >
                사전설문
              </Link>
              <Link
                to={`/event/apply/${id}/faq`}
                className={`depth02 ${activeTarget(`/event/apply/${id}/faq`)}`}
              >
                FAQ & 문의
              </Link> */}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ApplyRegisterMenu;
