import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PageWrap } from "@/app/pageStyle";
import ScrollToTop from "@components/shared/scrollToTop";
import AlretModal from "@components/modal/alretModal";
import ConfirmModal from "@components/modal/confirmModal";
import ToastMsg from "@components/modal/toastMsg";
import Header from "@components/shared/header";
import { userState } from "@/store/userState";
import { useRecoilValue } from "recoil";

const Layout = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const loginState = user.isLogin;

  // 페이지 리다이렉트
  useEffect(() => {
    // if (loginState && location.pathname.indexOf("/login") >= 0) {
    //   navigate("/member/general");
    // }
    if (!loginState && location.pathname.indexOf("/login") < 0) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <ScrollToTop>
      <PageWrap>
        <div className="wrap">
          <Header />
          <Outlet />
        </div>
      </PageWrap>
      <ConfirmModal />
      <AlretModal />
      <ToastMsg />
    </ScrollToTop>
  );
};

export default Layout;
