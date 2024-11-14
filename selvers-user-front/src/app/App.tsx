import Router from "./Router";
import GlobalStyles from "@/styles/globalStyle";
import AlretModal from "@components/modal/alretModal";
import ConfirmModal from "@components/modal/confirmModal";
import ToastMsg from "@components/modal/toastMsg";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ConfirmModal />
      <AlretModal />
      <ToastMsg />
    </>
  );
}

export default App;
