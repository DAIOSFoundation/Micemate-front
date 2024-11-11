// import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useAlret } from "@/hook/useAlret";
// import { useTokenValidationQuery } from "@/api/auth/auth.query";
const SocialLoginPage = () => {
  // state가 false면 실패
  // state가 true면서 provider이 있으면 추가 정보 입력
  // state가 true면서 accessToken이 있으면 로그인 성공
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const navigate = useNavigate();
  const { openAlret } = useAlret();

  const state = JSON.parse(query.get("state"));
  const provider = query.get("provider");
  const provider_id = query.get("provider-id");
  const email = query.get("email");
  const name = query.get("name");
  const access_token = query.get("access-token");
  const error = query.get("error");

  // 로컬 스토리지 값 저장
  useLayoutEffect(() => {
    if (state === true && provider && provider_id && email && name) {
      //추가정보 입력
      localStorage.setItem("social_provider", provider);
      localStorage.setItem("social_provider_id", provider_id);
      localStorage.setItem("social_email", email);
      localStorage.setItem("social_name", name);
    } else if (state === true && access_token) {
      //로그인 성공
      localStorage.setItem("social_token", access_token);
    } else if (state === false && error === "deleted_user") {
      //탈퇴한 회원
      const alretData = {
        text: "탈퇴한 회원입니다.",
        callback: () => {
          navigate("/", { replace: true });
        },
      };
      openAlret(alretData);
    } else if (state === false) {
      // 로그인 오류
      const alretData = {
        text: "로그인에 실패했습니다. 다시 시도해 주세요.",
        callback: () => {
          navigate("/login", { replace: true });
        },
      };
      openAlret(alretData);
    }
  }, []);

  useEffect(() => {
    const provider = localStorage.getItem("social_provider");
    const provider_id = localStorage.getItem("social_provider_id");
    const token = localStorage.getItem("social_token");

    if (
      provider !== null &&
      provider_id !== null &&
      email !== null &&
      name !== null
    ) {
      navigate("/join/form");
    } else if (token !== null) {
      navigate("/social-token-valid");
    }
  }, []);

  return <LoadingScreen />;
};

export default SocialLoginPage;
