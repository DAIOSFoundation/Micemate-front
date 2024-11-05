import ScrollToTop from "./scrollToTop";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { Main } from "./layoutStyle";
import AlretModal from "@components/modal/alretModal";
import ConfirmModal from "@components/modal/confirmModal";
import ToastMsg from "@components/modal/toastMsg";

const Layout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ConfirmModal />
      <AlretModal />
      <ToastMsg />
    </ScrollToTop>
  );
};

export default Layout;
