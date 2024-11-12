import { JoinPageWrap, ButtonItem } from "./joinPageStyle";

import KakaoIcon from "@/assets/icon/kakao.svg?react";
import NaverIcon from "@/assets/icon/naver.svg?react";
import GmailIcon from "@/assets/icon/gmail.svg?react";
import MailIcon from "@/assets/icon/mail.svg?react";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigate = useNavigate();

  const socialHandler = {
    googleJoin: () => {
      const apiKey = import.meta.env.VITE_GOOGLE_REST_API_KEY;
      const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
      window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${apiKey}&redirect_uri=${redirectUri}&response_type=code&scope=profile email`;
    },
    naverJoin: () => {
      const apiKey = import.meta.env.VITE_NAVER_REST_API_KEY;
      const redirectUri = import.meta.env.VITE_NAVER_REDIRECT_URI;
      window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${apiKey}&state=STATE_STRING&redirect_uri=${redirectUri}`;
    },
    kakaoJoin: () => {
      const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;
      const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
      location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirectUri}&response_type=code`;
    },
  };

  return (
    <JoinPageWrap>
      <ButtonItem onClick={socialHandler.kakaoJoin} className="kakao">
        <span className="icon">
          <KakaoIcon />
        </span>
        <span>카카오 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem onClick={socialHandler.naverJoin} className="naver">
        <span className="icon">
          <NaverIcon />
        </span>
        <span>네이버 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem onClick={socialHandler.googleJoin} className="gmail">
        <span className="icon">
          <GmailIcon />
        </span>
        <span>구글 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem
        onClick={() => {
          navigate("/join/form");
        }}
        className="mail"
      >
        <span className="icon">
          <MailIcon />
        </span>
        <span>이메일 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem
        onClick={() => {
          navigate("/login");
        }}
        className="login"
      >
        <span>이미 회원이신가요?</span>
      </ButtonItem>
    </JoinPageWrap>
  );
};

export default JoinPage;
