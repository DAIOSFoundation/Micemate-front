import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { confirmState, alretState, toastState } from "@/store/modalState";
import { Link } from "react-router-dom";
import { useLogout, useTokenValidationQuery } from "@/api/auth/auth.query";
import Logo from "@/assets/images/logo/main_logo_w.png";

const Header = () => {
  const token = localStorage.getItem("token");
  const user = useRecoilValue(userState);
  const resetUserState = useResetRecoilState(userState);
  const confirmStat = useRecoilValue(confirmState);
  const alretStat = useRecoilValue(alretState);
  const toastStat = useRecoilValue(toastState);
  const { data: TokenVail, isError: TokenVailError } =
    useTokenValidationQuery(token);

  useEffect(() => {
    if (TokenVailError && TokenVail === undefined) {
      resetUserState();
    }
  }, [TokenVail, TokenVailError, resetUserState]);

  console.log(confirmStat, alretStat, toastStat);

  return (
    <div className="header">
      <div className="inner">
        <h1 className="main_logo">
          {user.isLogin}
          <Link to={user.isLogin ? "/member/general" : "/login"}>
            <img src={Logo} alt="마이스 메이트" />
          </Link>
        </h1>
        {user.isLogin && (
          <div className="btn_wrap">
            <button className="btn blue round" onClick={useLogout}>
              로그아웃
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
