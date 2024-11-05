import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { Link, useNavigate } from "react-router-dom";
import { useTokenValidationQuery } from "@/api/auth/auth.query";
import { HeaderWrap } from "./headerStyle";
import Logo from "@/assets/host/logo/main_logo_w.png";
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
    if (TokenVail) {
      localStorage.setItem("user_type", TokenVail.data.is_company);
    }
    if (TokenVailError && TokenVail === undefined) {
      const alretData = {
        text: "토큰이 만료되어 로그아웃 되었습니다.\n 메인화면으로 돌아갑니다.",
        callback: () => {
          navigate("/", { replace: true });
        },
      };
      openAlret(alretData);
      localStorage.removeItem("user_type");
      resetUserState();
    }
  }, [TokenVail, TokenVailError, resetUserState]);

  return (
    <HeaderWrap>
      <div className="header">
        <div className="inner">
          <h1 className="main_logo">
            <Link to="/">
              <img src={Logo} alt="마이스 메이트" />
            </Link>
          </h1>
          {!user.isLogin && (
            <div className="btn_wrap">
              <div className="txt_btns">
                <Link to="/login" className="btn">
                  로그인
                </Link>
                <Link to="/join" className="btn">
                  회원가입
                </Link>
              </div>
              <Link to="/host-main" className="btn white round">
                행사등록
              </Link>
              {/* <Link to="" className="btn blue round">
                AI챗봇
              </Link> */}
            </div>
          )}
          {user.isLogin && (
            <div className="btn_wrap">
              {user.data.is_company ? (
                <Link to="/host/my/mypage" className="my_btn"></Link>
              ) : (
                <Link to="/mypage/user-modify" className="my_btn"></Link>
              )}

              {user.data.is_company ? (
                <Link to="/host/my/dashboard" className="btn white round">
                  대시보드
                </Link>
              ) : (
                <Link to="/host/corporate" className="btn white round">
                  행사등록
                </Link>
              )}
              <Link to="" className="btn blue round">
                AI챗봇
              </Link>
            </div>
          )}
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
