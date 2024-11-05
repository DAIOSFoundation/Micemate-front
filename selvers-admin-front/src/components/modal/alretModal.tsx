import { AlretModalWrap } from "./alretModalStyle";
import { useAlret } from "@/hook/useAlret";

const AlretModal = () => {
  const { alretData, closeAlret } = useAlret();
  return (
    <>
      {alretData.isOpen && (
        <AlretModalWrap>
          <div className="dim_layer"></div>
          <div className="modal_inner">
            <button className="modal_close" onClick={closeAlret}></button>
            <div className="modal_body">
              <div className="modal_tit">{alretData.text}</div>
            </div>
            <div className="modal_btn">
              <button className="close_btn" onClick={closeAlret}>
                확인
              </button>
            </div>
          </div>
        </AlretModalWrap>
      )}
    </>
  );
};
export default AlretModal;
