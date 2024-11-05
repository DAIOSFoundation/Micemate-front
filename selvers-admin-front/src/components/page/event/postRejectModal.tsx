import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  reason: string;
  setReason: Dispatch<SetStateAction<string>>;
  onSubmit?: () => void;
}

const PostRejectModal = ({
  setOpen,
  title,
  reason,
  setReason,
  onSubmit,
}: Props) => {
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
          <div className="modal_tit">
            [{title}] 게시를
            <br />
            반려 처리 하시겠습니까?
          </div>
          <div>
            <div>
              <p className="fs_16 fw_600">*반려사유 작성</p>
              <textarea
                className="mt_8"
                placeholder="세부 반려사유를 작성해주세요."
                rows={12}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="modal_btn mt_63">
          <button
            type="button"
            className="confirm_btn"
            onClick={() => {
              onSubmit?.();
              setOpen(false);
            }}
          >
            확인
          </button>
          <button
            type="button"
            className="close_btn"
            onClick={() => setOpen(false)}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostRejectModal;
