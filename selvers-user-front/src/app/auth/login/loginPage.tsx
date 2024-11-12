import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputTextA } from "@components/form/inputText";
import { InputCheckboxA } from "@components/form/inputCheckbox";
import { useLoginMutation } from "@/api/auth/auth.query";
import {
  LoginPageWrap,
  TitleBox,
  FindAuthWrap,
  SnsLoginWrap,
  DescBtn,
  LoginFormWrap,
  SubmitBtn,
} from "./loginPageStyle";
import { LoginRequest, CustomError } from "@/type";
import { Link } from "react-router-dom";
import GoogleIcon from "@/assets/icon/round_google.svg?react";
import NaverIcon from "@/assets/icon/round_naver.svg?react";
import KakaoIcon from "@/assets/icon/round_kakao.svg?react";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/userState";

const schema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  password: z.string(),
  remember: z.boolean(),
});

const LoginPage = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const user = useRecoilValue(userState);
  const useLogin = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const email = watch("email");
  const password = watch("password");
  useEffect(() => {
    if (email?.trim() && password?.trim() !== undefined) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  const onSubmit = handleSubmit((data) => {
    const loginData: LoginRequest = {
      email: data.email,
      password: data.password,
      remember: data.remember,
    };
    //api 요청
    useLogin.mutate(loginData);
  });

  //로그인 성공
  useEffect(() => {
    if (useLogin.isSuccess) {
      if (user.data.is_company === true) {
        navigate("/host-main", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [useLogin.isSuccess, navigate, user.data.is_company]);

  //로그인 실패
  useEffect(() => {
    if (useLogin.isError) {
      const customError = useLogin.error as CustomError;
      if (customError?.response?.data?.data?.error) {
        if (customError.response.data.data.error === "Unauthorised") {
          //일치하는 계정 없을때
          setError("apiError", {
            type: "manual",
            message: "이메일 또는 비밀번호를 확인해주세요.",
          });
        } else {
          //회원가입 했는데 이메일 인증 안했을때, 탈퇴 계정일 때
          setError("apiError", {
            type: "manual",
            message: customError.response.data.data.error,
          });
        }
      } else {
        // 일반적인 오류 처리 (response가 없을 경우)
        setError("apiError", {
          type: "manual",
          message: "알 수 없는 오류가 발생했습니다.",
        });
      }
    }
  }, [useLogin.isError, useLogin.error, setError]);

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
    <LoginPageWrap>
      <TitleBox>
        <h2>LOGIN</h2>
        <span>즐거운 만남을 시작해보세요!</span>
      </TitleBox>
      <LoginFormWrap onSubmit={onSubmit}>
        <div className="input_box">
          <InputTextA
            label="이메일(ID)"
            type="text"
            id="email"
            placeholder="이메일 입력"
            register={register}
          />
          <InputTextA
            label="비밀번호"
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            register={register}
          />
        </div>
        {errors.email && (
          <p className="err_msg">{errors.email?.message?.toString()}</p>
        )}
        {errors.apiError && (
          <p className="err_msg">{errors.apiError?.message?.toString()}</p>
        )}
        <div className="login_stay">
          <InputCheckboxA
            label="로그인유지"
            id="remember"
            register={register}
          />
        </div>
        <SubmitBtn disabled={!isFormValid}>로그인</SubmitBtn>
      </LoginFormWrap>
      <FindAuthWrap>
        <Link to={"/login/password-find"}>비밀번호 찾기</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to={"/join"}>회원가입</Link>
      </FindAuthWrap>
      {/* 간편 로그인하기 */}
      <SnsLoginWrap>
        <h3>간편 로그인하기</h3>
        <div className="btn_area">
          <button onClick={socialHandler.googleJoin}>
            <GoogleIcon />
          </button>
          <button onClick={socialHandler.naverJoin}>
            <NaverIcon />
          </button>
          <button onClick={socialHandler.kakaoJoin}>
            <KakaoIcon />
          </button>
        </div>
      </SnsLoginWrap>
      <DescBtn className="desc_btn">
        <Link to="/privacy-policy">개인정보 처리방침</Link>
      </DescBtn>
    </LoginPageWrap>
  );
};

export default LoginPage;
