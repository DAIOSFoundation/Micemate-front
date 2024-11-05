import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useConfirm } from "@/hook/useConfirm";
import { useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { confirmState } from "@/store/modalState";

const MyPageMenu = () => {
  const resetUserState = useResetRecoilState(userState);
  const resetConfirm = useResetRecoilState(confirmState);
  const navigate = useNavigate();

  const { openConfirm, confirmValue } = useConfirm();
  const logoutHandler = () => {
    const confirmData = {
      text: "로그아웃 하시겠습니까?",
      okBtn: "확인",
      logout: true,
    };

    openConfirm(confirmData);
  };

  useEffect(() => {
    if (confirmValue.logoutOk === true) {
      resetUserState();
      resetConfirm();
      navigate("/host-main");
    }
  }, [confirmValue.logoutOk]);

  return (
    <div className="">
      <Link to="/host/my/apply-register/new" className="add_new_btn">
        행사 개설하기
      </Link>
      <ul className="lnb01">
        <li>
          <Link to="/host/my/mypage" className="depth01 active">
            내 정보 수정
          </Link>
        </li>
        <li>
          <button onClick={logoutHandler} className="depth01">
            로그아웃
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MyPageMenu;
