import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { Link } from "react-router-dom";
import { useLogout, useTokenValidationQuery } from "@/api/auth/auth.query";
import Logo from "@/assets/images/logo/main_logo_w.png";

const Header = () => {
  const token = localStorage.getItem("token");
  const user = useRecoilValue(userState);
  const resetUserState = useResetRecoilState(userState);
  const { data: TokenVail, isError: TokenVailError } =
    useTokenValidationQuery(token);

  useEffect(() => {
    if (TokenVailError && TokenVail === undefined) {
      resetUserState();
    }
  }, [TokenVail, TokenVailError, resetUserState]);

  return (
    <div className="header">
      <div className="inner">
        <h1 className="main_logo">
          <Link to="/member/general">
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
