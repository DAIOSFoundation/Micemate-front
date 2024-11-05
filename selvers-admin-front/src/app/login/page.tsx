import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/api/auth/auth.query";
// import { useLoginMutation, useLogout } from "@/api/auth/auth.query";
import { LoginRequest, CustomError } from "@/type";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/userState";
import { PageWrap } from "@/app/pageStyle";

const schema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  password: z.string(),
  remember: z.boolean(),
});

const Page = () => {
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
      if (user.data.is_admin === true) {
        navigate("/member/general", { replace: true });
      } else {
        setError("apiError", {
          type: "manual",
          message: "이메일 또는 비밀번호를 확인해주세요.",
        });
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_type");
      }
    }
  }, [useLogin.isSuccess, navigate, user.data.is_admin]);

  //로그인 실패
  useEffect(() => {
    if (useLogin.isError) {
      const customError = useLogin.error as CustomError;
      if (customError?.response?.data?.data?.error) {
        //일치하는 계정 없을때
        if (customError.response.data.data.error === "Unauthorised") {
          setError("apiError", {
            type: "manual",
            message: "이메일 또는 비밀번호를 확인해주세요.",
          });
        }
        //회원가입 했는데 이메일 인증 안했을때
        if (
          customError.response.data.data.error === "Not authenticate your email"
        ) {
          setError("apiError", {
            type: "manual",
            message: "이메일 인증이 필요합니다.",
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

  return (
    <PageWrap>
      <div className="wrap">
        <div className="container">
          <div className="login_pagi">
            <div className="inner">
              <div className="login_tit">
                <b>LOGIN</b>
                <span>로그인이 필요합니다.</span>
              </div>
              <form onSubmit={onSubmit}>
                <div className="login_inp">
                  <p className="fs_16 fw_500">아이디</p>
                  <input
                    type="text"
                    id="email"
                    className="w_full mt_12"
                    placeholder="아이디"
                    autoComplete="off"
                    {...(register && register("email"))}
                  />
                  <p className="fs_16 fw_500 mt_25">비밀번호</p>
                  <input
                    type="password"
                    id="password"
                    className="w_full mt_12"
                    placeholder="비밀번호"
                    autoComplete="off"
                    {...(register && register("password"))}
                  />
                  {errors.email && (
                    <p className="err_msg">
                      {errors.email?.message?.toString()}
                    </p>
                  )}
                  {errors.apiError && (
                    <p className="err_msg">
                      {errors.apiError?.message?.toString()}
                    </p>
                  )}
                </div>
                <div className="checkbox mt_26">
                  <input
                    id="remember"
                    type="checkbox"
                    {...(register && register("remember"))}
                  />
                  <label htmlFor="remember">로그인유지</label>
                </div>
                <div className="btn_wrap mt_15">
                  <button
                    type="submit"
                    className="btn white login_btn"
                    disabled={!isFormValid}
                  >
                    로그인
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrap>
  );
};

export default Page;
