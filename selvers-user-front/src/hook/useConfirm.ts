import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { confirmState } from "@/store/modalState";

type OpenModalType = {
  text: string;
  callback?: void;
  okBtn: string;
  logout?: boolean;
};

type CloseModalType = {
  confirm?: boolean;
  callback?: void;
  logoutOk?: boolean;
};

export const useConfirm = () => {
  const [confirmData, setConfirmData] = useRecoilState(confirmState);
  const confirmValue = useRecoilValue(confirmState);

  // 모달 닫기 함수
  const closeConfirm = useCallback(
    ({ logoutOk, confirm, callback }: CloseModalType) => {
      setConfirmData((prev) => ({
        ...prev,
        isOpen: false,
        confirm: confirm,
        logoutOk: logoutOk,
        callback: callback,
        text: "",
        okBtn: "",
      }));
    },
    [setConfirmData]
  );

  const openConfirm = useCallback(
    ({ logout, text, okBtn }: OpenModalType) =>
      setConfirmData({
        isOpen: true,
        text: text,
        confirm: false,
        okBtn: okBtn,
        logout: logout,
        logoutOk: false,
      }),
    [setConfirmData]
  );

  return { confirmData, confirmValue, closeConfirm, openConfirm };
};
