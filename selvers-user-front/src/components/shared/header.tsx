import { userState } from "@/store/userState";
import { useRecoilValue, useResetRecoilState } from "recoil";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import MobileHeader from "./mobileHeader";
// import SearchBar from "@components/searchBar";
import { useTokenValidationQuery } from "@/api/auth/auth.query";
import {
  HeaderWrap,
  LogoImg,
  NavMenu,
  NavWrap,
  // NavItem,
  // Nav,
  BtnArea,
  AuthBtn,
  DescBtn,
} from "./headerStyle";
import Logo from "@/assets/logo_w.svg?react";
import Cart from "@/assets/icon/cart.svg?react";
import Calendar from "@/assets/icon/calendar.svg?react";
import Person from "@/assets/icon/person.svg?react";
// import { useEffect, useLayoutEffect, useState } from "react";
import { useEffect } from "react";
import { useAlret } from "@/hook/useAlret";

const Header = () => {
  // const [mainPage, setMainPage] = useState(true);
  // const location = useLocation();
  const user = useRecoilValue(userState);
  const resetUserState = useResetRecoilState(userState);
  const token = localStorage.getItem("token");
  const { data: TokenVail, isError: TokenVailError } =
    useTokenValidationQuery(token);
  const loginState = user.isLogin;
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
      // localStorage.removeItem("user_type");
      resetUserState();
    }
  }, [TokenVail, TokenVailError, resetUserState]);

  // useLayoutEffect(() => {
  //   if (location.pathname === "/") {
  //     setMainPage(true);
  //   } else {
  //     setMainPage(false);
  //   }
  // }, [location.pathname])

  return (
    <div>
      <HeaderWrap className="maxframe">
        <LogoImg>
          <Link to="/">
            <Logo />
          </Link>
        </LogoImg>
        <NavMenu>
          <NavWrap>
            {/* {mainPage === true && (
              <Nav>
                <NavItem>
                  <Link to="/event-list?page=1&date=1">이번주 행사</Link>
                </NavItem>
                <NavItem>
                  <Link to="/event-list?page=1&price=2">무료 행사</Link>
                </NavItem>
                <NavItem>
                  <Link to="/event-list?page=1&progress=2">온라인 행사</Link>
                </NavItem>
                <NavItem>
                  <Link to="/event-list">메이트 PICK</Link>
                </NavItem>
              </Nav>
            )} */}
            {/* 서브페이지 검색바 */}
            {/* {mainPage === false && <SearchBar />} */}
          </NavWrap>
          <BtnArea>
            {/* 로그아웃 상태 */}
            {!loginState && (
              <AuthBtn $loginState={loginState}>
                <div className="login">
                  <Link to="/login">로그인</Link>
                </div>
                <div>
                  <Link to="/join">회원가입</Link>
                </div>
              </AuthBtn>
            )}
            {/* 로그인 상태 */}
            {loginState && (
              <AuthBtn>
                <div>
                  <Link to="/mypage/wish-list">
                    <Cart />
                  </Link>
                </div>
                <div>
                  <Link to="/mypage/apply-list">
                    <Calendar />
                  </Link>
                </div>
                <div>
                  {user.data.is_company ? (
                    <Link to={"/host/my/mypage"}>
                      <Person />
                    </Link>
                  ) : (
                    <Link to={"/mypage/user-modify"}>
                      <Person />
                    </Link>
                  )}
                </div>
              </AuthBtn>
            )}

            <DescBtn>
              <Link to="/host-main" className="btn1">
                행사등록
              </Link>
              {/* <button className="btn2">AI챗봇</button> */}
            </DescBtn>
          </BtnArea>
        </NavMenu>
      </HeaderWrap>
      {/* 모바일 헤더 */}
      <MobileHeader />
    </div>
  );
};

export default Header;
