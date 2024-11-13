import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BannerMenu = () => {
  const [isOn, setIsOn] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };

  const activeTarget = (url: string) => {
    const path = location.pathname + location.search;
    const type = url.split("=")[1];
    const isActive =
      path.includes(url) ||
      (path.includes("/banner/detail") &&
        location.search.includes(`type=${type}`)) ||
      (path.includes("/banner/add") &&
        location.search.includes(`type=${type}`));
    return isActive ? "active" : "";
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
        className={`depth01 ${isOn ? "active" : ""} cursor_pointer`}
      >
        배너관리
        <i className="arrow_b_icon"></i>
      </p>
      {isOn && (
        <div className="depth02_list active">
          <Link
            to="/banner?type=0"
            className={`depth02 ${activeTarget("/banner?type=0")}`}
          >
            메인배너
          </Link>
          <Link
            to="/banner?type=1"
            className={`depth02 ${activeTarget("/banner?type=1")}`}
          >
            띠배너
          </Link>
        </div>
      )}
    </li>
  );
};

export default BannerMenu;
