import { userState } from "@/store/userState";
import { useRecoilValue } from "recoil";
import React, { ReactNode } from "react";
import {
  MobileMenuWrap,
  MobileMenuHeader,
  MobileMenuBody,
} from "./mobileMenuStyle";
import CloseIcon from "@/assets/icon/close.svg?react";

type Props = {
  children: ReactNode;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ children, setClose }: Props) => {
  const user = useRecoilValue(userState);
  const loginState = user.isLogin;
  const name = localStorage.getItem("name");

  const closeHandler = () => {
    setClose(false);
    document.body.style.overflow = "auto";
  };
  return (
    <MobileMenuWrap>
      <MobileMenuHeader>
        {loginState && (
          <div className="user_name">{`${JSON.parse(name)} 님`}</div>
        )}

        <button onClick={() => closeHandler()} className="close_btn">
          <CloseIcon />
        </button>
      </MobileMenuHeader>
      <MobileMenuBody>{children}</MobileMenuBody>
    </MobileMenuWrap>
  );
};

export default MobileMenu;
