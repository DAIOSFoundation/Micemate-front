import { ConfirmModalWrap } from "./confirmModalStyle";
import { useConfirm } from "@/hook/useConfirm";

const ConfirmModal = () => {
  const { confirmData, closeConfirm } = useConfirm();
  return (
    <>
      {confirmData.isOpen && (
        <ConfirmModalWrap>
          <div className="dim_layer"></div>
          <div className="modal_inner">
            <button
              className="modal_close"
              onClick={() => closeConfirm({ confirm: false })}
            ></button>
            <div className="modal_body">
              <div className="modal_tit">{confirmData.text}</div>
            </div>
            <div className="modal_btn">
              <button
                className="confirm_btn"
                onClick={() => closeConfirm({ confirm: true })}
              >
                {confirmData.okBtn}
              </button>
              <button
                className="close_btn"
                onClick={() => closeConfirm({ confirm: false })}
              >
                취소
              </button>
            </div>
          </div>
        </ConfirmModalWrap>
      )}
    </>
  );
};
export default ConfirmModal;
