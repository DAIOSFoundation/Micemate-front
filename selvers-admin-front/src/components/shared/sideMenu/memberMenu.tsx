import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MemberMenu = () => {
  const [isOn, setIsOn] = useState(false);
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

  useEffect(() => {
    if (location.pathname.indexOf("/member") >= 0) {
      setIsOn(true);
    }
  }, [location.pathname]);

  return (
    <li>
      <p
        onClick={toggleDropdown}
        className={`depth01 ${isOn ? "active" : ""}`}
        style={{ cursor: "pointer" }}
      >
        회원관리
        <i className="arrow_b_icon"></i>
      </p>
      {isOn && (
        <div className="depth02_list active">
          <Link
            to={`/member/general${location.search}`}
            className={`depth02 ${activeTarget("/member/general")}`}
          >
            회원 리스트
          </Link>
          <Link
            to={`/member/corporate${location.search}`}
            className={`depth02 ${activeTarget("/member/corporate")}`}
          >
            기업회원 리스트
          </Link>
        </div>
      )}
    </li>
  );
};

export default MemberMenu;
