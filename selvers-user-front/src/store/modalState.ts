import { atom } from "recoil";

type AlretType = {
  isOpen: boolean;
  text: string;
  callBack?: () => void;
};

type ConfirmType = {
  isOpen: boolean;
  text: string;
  callBack?: void;
  confirm?: boolean;
  logout?: boolean;
  okBtn: string;
  logoutOk?: boolean;
};

type ToastType = {
  isOpen: boolean;
  text: string;
};

export const alretState = atom<AlretType>({
  key: "alretState",
  default: {
    isOpen: false,
    text: "",
  },
});

export const confirmState = atom<ConfirmType>({
  key: "confirmState",
  default: {
    isOpen: false,
    text: "",
    confirm: false,
    okBtn: "취소하기",
    logout: false,
    logoutOk: false,
  },
});

export const toastState = atom<ToastType>({
  key: "toastState",
  default: {
    isOpen: false,
    text: "",
  },
});
