import { Outlet } from "react-router-dom";
import AlretModal from "@components/modal/alretModal";
import ConfirmModal from "@components/modal/confirmModal";
import ScrollToTop from "@components/shared/scrollToTop";
import HostHeader from "@components/host/shared/header";
import { HostSubWrap } from "@/app/host/subPageStyle";
import ToastMsg from "@components/modal/toastMsg";

const Layout = () => {
  return (
    <ScrollToTop>
      <HostSubWrap>
        <div className="wrap">
          <HostHeader />
          <Outlet />
        </div>
      </HostSubWrap>
      <ConfirmModal />
      <AlretModal />
      <ToastMsg />
    </ScrollToTop>
  );
};

export default Layout;
