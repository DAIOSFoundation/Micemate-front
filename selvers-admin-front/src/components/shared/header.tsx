import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { Link, useNavigate } from "react-router-dom";
import { useLogout, useTokenValidationQuery } from "@/api/auth/auth.query";
import Logo from "@/assets/images/logo/main_logo_w.png";
import { useAlret } from "@/hook/useAlret";

const Header = () => {
  const token = localStorage.getItem("token");
  const user = useRecoilValue(userState);
  const resetUserState = useResetRecoilState(userState);
  const { data: TokenVail, isError: TokenVailError } =
    useTokenValidationQuery(token);
  const navigate = useNavigate();
  const { openAlret } = useAlret();
  useEffect(() => {
    if (TokenVailError && TokenVail === undefined) {
      const alretData = {
        text: "토큰이 만료되어 로그아웃 되었습니다.\n 로그인화면으로 돌아갑니다.",
        callback: () => {
          navigate("/login", { replace: true });
        },
      };
      openAlret(alretData);
      localStorage.removeItem("user_type");
      resetUserState();
    }
  }, [TokenVail, TokenVailError, resetUserState]);

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
