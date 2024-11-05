import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  data?: string;
}

const RejectModal = ({ setOpen, data }: Props) => {
  return (
    <div className="modal_wrap prompt01">
      <div className="dim_layer"></div>
      <div className="modal_inner">
        <button
          type="button"
          className="modal_close"
          onClick={() => setOpen(false)}
        ></button>
        <div className="modal_body">
          <div className="modal_tit">반려사유</div>
          <div>
            <textarea className="mt_8" rows={12} readOnly>
              {data ?? ""}
            </textarea>
          </div>
        </div>
        <div className="modal_btn mt_63">
          <button
            type="button"
            className="confirm_btn"
            onClick={() => setOpen(false)}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
