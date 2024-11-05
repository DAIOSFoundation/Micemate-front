import { userState } from "@/store/userState";
import { useRecoilValue } from "recoil";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useLayoutEffect, useEffect } from "react";
import MobileMenu from "./mobileMenu";
import {
  MobileHeaderWrap,
  TopMenu,
  LogoImg,
  NavWrap,
  // Nav,
  // NavItem,
  BtnArea,
  DescBtn,
} from "./headerStyle";
import Logo from "@/assets/logo_w.svg?react";
import MenuIcon from "@/assets/icon/menu.svg?react";
import { useResetRecoilState } from "recoil";
import { useConfirm } from "@/hook/useConfirm";
import { confirmState } from "@/store/modalState";
// import SearchIcon from "@/assets/icon/search.svg?react";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [mainPage, setMainPage] = useState(true);
  const { openConfirm, confirmValue } = useConfirm();
  // const [searchLink, setSearchLink] = useState(false);
  const user = useRecoilValue(userState);
  const loginState = user.isLogin;
  const location = useLocation();
  const resetUserState = useResetRecoilState(userState);
  const resetConfirm = useResetRecoilState(confirmState);
  const navigate = useNavigate();
  const menuOpenHandler = () => {
    setToggle(true);
    document.body.style.overflow = "hidden";
  };
  const menuCloseHandler = () => {
    setToggle(false);
    document.body.style.overflow = "auto";
  };
  useLayoutEffect(() => {
    if (location.pathname === "/") {
      setMainPage(true);
    } else {
      setMainPage(false);
    }

    // if (location.pathname === "/" || location.pathname === "/list") {
    //   setSearchLink(false);
    // } else {
    //   setSearchLink(true);
    // }
  }, [location.pathname]);

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
      navigate("/");
    }
  }, [confirmValue.logoutOk]);

  return (
    <MobileHeaderWrap>
      <TopMenu>
        <LogoImg>
          <Link to="/">
            <Logo />
          </Link>
        </LogoImg>
        <BtnArea>
          <DescBtn>
            <Link to="/host/main" className="btn1">
              행사등록
            </Link>
            {/* <button className="btn2">AI챗봇</button> */}
          </DescBtn>
          {/* {searchLink && (
            <p className="searh_page_link">
              <Link to="/list">
                <SearchIcon />
              </Link>
            </p>
          )} */}
          <button onClick={() => menuOpenHandler()} className="toggle_menu">
            <MenuIcon />
          </button>
        </BtnArea>
      </TopMenu>
      {mainPage && (
        <NavWrap>
          {/* <Nav>
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
          </Nav> */}
        </NavWrap>
      )}

      {/* 로그아웃 상태 */}
      {!loginState && toggle && (
        <MobileMenu setClose={setToggle}>
          <ul>
            <li>
              <Link to="/login" onClick={menuCloseHandler}>
                로그인
              </Link>
            </li>
            <li>
              <Link to="/join" onClick={menuCloseHandler}>
                회원가입
              </Link>
            </li>
          </ul>
        </MobileMenu>
      )}
      {/* 로그인 상태 */}
      {loginState && toggle && (
        <MobileMenu setClose={setToggle}>
          <ul>
            <li>
              <Link to="/mypage/apply-list" onClick={menuCloseHandler}>
                신청 행사
              </Link>
            </li>
            <li>
              <Link to="/mypage/cancel-list" onClick={menuCloseHandler}>
                취소 내역
              </Link>
            </li>
            <li>
              <Link to="/mypage/wish-list" onClick={menuCloseHandler}>
                관심 행사
              </Link>
            </li>
            <li>
              <Link to="/mypage/past-list" onClick={menuCloseHandler}>
                지난 행사
              </Link>
            </li>
            <li>
              <Link to="/mypage/user-modify" onClick={menuCloseHandler}>
                내 정보 수정
              </Link>
            </li>
            <li>
              <button onClick={logoutHandler} style={{ color: "#fff" }}>
                로그아웃
              </button>
            </li>
          </ul>
        </MobileMenu>
      )}
    </MobileHeaderWrap>
  );
};

export default MobileHeader;
