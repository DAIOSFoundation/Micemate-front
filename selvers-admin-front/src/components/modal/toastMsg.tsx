import styled from "styled-components";
import { useToast } from "@/hook/useToast";

const Toast = styled.div`
  position: fixed;
  bottom: 48px;
  color: #fff;
  background-color: rgba(41, 46, 55, 1);
  border-radius: 50rem;
  padding: 15px 50px;
  font-size: 16px;
  font-weight: 500;
  left: 50%;
  transform: translateX(-50%);
  transition: all 1s;
  z-index: 999;
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 10px 30px;
    bottom: 30px;
  }
`;

const ToastMsg = () => {
  const { toastData } = useToast();

  // 토스트가 열려 있는지 체크하여 조건부 렌더링
  return <>{toastData.isOpen && <Toast>{toastData.text}</Toast>}</>;
};

export default ToastMsg;
