import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { toastState } from "@/store/modalState";

export const useToast = () => {
  const [toastData, setToastData] = useRecoilState(toastState);

  // 토스트 닫기 함수
  const closeToast = useCallback(() => {
    setToastData({ isOpen: false, text: "" });
  }, []);

  // 토스트 열기 함수
  const openToast = useCallback(
    (text: string) => {
      setToastData({ isOpen: true, text: text });
      const timer = setTimeout(() => {
        closeToast();
      }, 3000);

      return () => clearTimeout(timer);
    },
    [closeToast]
  );

  return { toastData, openToast, closeToast };
};
