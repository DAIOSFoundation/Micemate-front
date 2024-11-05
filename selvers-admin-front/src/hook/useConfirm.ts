import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { confirmState } from "@/store/modalState";

type OpenModalType = {
  text: string;
  callback?: void;
  okBtn: string;
  type?: string;
};

type CloseModalType = {
  confirm?: boolean;
  callback?: void;
};

export const useConfirm = () => {
  const [confirmData, setConfirmData] = useRecoilState(confirmState);
  const confirmValue = useRecoilValue(confirmState);

  // 모달 닫기 함수
  const closeConfirm = useCallback(
    ({ confirm, callback }: CloseModalType) => {
      setConfirmData((prev) => ({
        ...prev,
        isOpen: false,
        confirm: confirm,
        callback: callback,
      }));
    },
    [setConfirmData]
  );

  const openConfirm = useCallback(
    ({ text, okBtn, type }: OpenModalType) =>
      setConfirmData({
        isOpen: true,
        text: text,
        confirm: false,
        okBtn: okBtn,
        type: type ?? "",
      }),
    [setConfirmData]
  );

  return { confirmData, confirmValue, closeConfirm, openConfirm };
};
