import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BannerMenu = () => {
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
    if (location.pathname.indexOf("/banner") >= 0) {
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
        배너관리
        <i className="arrow_b_icon"></i>
      </p>
      {isOn && (
        <div className="depth02_list active">
          <Link
            to="/banner/main"
            className={`depth02 ${activeTarget("/banner/main")}`}
          >
            메인배너
          </Link>
          <Link
            to="/banner/band"
            className={`depth02 ${activeTarget("/banner/band")}`}
          >
            띠배너
          </Link>
        </div>
      )}
    </li>
  );
};

export default BannerMenu;
