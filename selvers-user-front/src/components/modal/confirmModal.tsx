import { ConfirmModalWrap, Confirm } from "./confirmModalStyle";
import CloseBtn from "@/assets/icon/modal_close.svg?react";
import { useConfirm } from "@/hook/useConfirm";

const ConfirmModal = () => {
  const { confirmData, closeConfirm } = useConfirm();
  return (
    <>
      {confirmData.isOpen && (
        <ConfirmModalWrap>
          <Confirm>
            <div className="alret_header">
              <button
                onClick={() => closeConfirm({ confirm: false })}
                className="close_btn"
              >
                <CloseBtn />
              </button>
            </div>
            <div className="desc">{confirmData.text}</div>
            <div className="btn_area">
              <button
                onClick={() => closeConfirm({ confirm: false })}
                className="secondary"
              >
                닫기
              </button>
              {confirmData.logout === true && (
                <button
                  onClick={() => closeConfirm({ logoutOk: true })}
                  className="primary"
                >
                  확인
                </button>
              )}
              {confirmData.logout === false && (
                <button
                  onClick={() => closeConfirm({ confirm: true })}
                  className="primary"
                >
                  {confirmData.okBtn}
                </button>
              )}
            </div>
          </Confirm>
        </ConfirmModalWrap>
      )}
    </>
  );
};
export default ConfirmModal;
