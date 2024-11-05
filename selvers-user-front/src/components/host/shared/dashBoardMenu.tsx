import { Link } from "react-router-dom";

const DashBoardSideMenu = () => {
  return (
    <div>
      <Link to="/host/my/apply-register/new" className="add_new_btn">
        + 새로운 행사 등록하기
      </Link>
      <ul className="lnb01">
        <li>
          <a href="#none" className="depth01 active">
            나의 행사 리스트
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardSideMenu;
