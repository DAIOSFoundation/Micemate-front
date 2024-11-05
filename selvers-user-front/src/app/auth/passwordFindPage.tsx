import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePasswordResetMutation } from "@/api/users/users.query";
import {
  PasswordFindWrap,
  TitleBox,
  FindFormWrap,
  SubmitBtn,
} from "./passwordFindPageStyle";
import { useAlret } from "@/hook/useAlret";
import { InputTextA } from "@components/form/inputText";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "이메일을 입력해주세요.")
    .email({ message: "올바른 이메일을 입력해주세요." }),
});

const PasswordFindPage = () => {
  const usePasswordReset = usePasswordResetMutation();
  const { openAlret } = useAlret();
  const navigate = useNavigate();

  const alretData = {
    text: "메일로 임시 비밀번호를 발송했습니다.",
    callback: () => {
      navigate("/login");
    },
  };

  //react hook form
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    usePasswordReset.mutate(data.email, {
      onSuccess: () => {
        openAlret(alretData);
      },
      onError: () => {
        setError("apiError", {
          type: "manual",
          message: "가입된 정보가 없습니다. 이메일을 확인해주세요.",
        });
      },
    });
  });

  return (
    <PasswordFindWrap>
      <TitleBox>
        <h2>비밀번호 찾기</h2>
        <span>가입하신 이메일로 임시 비밀번호를 전송해드립니다.</span>
      </TitleBox>
      <FindFormWrap onSubmit={onSubmit}>
        <InputTextA
          label="이메일(ID)"
          type="text"
          id="email"
          placeholder="이메일 입력"
          register={register}
        />
        {errors.email?.message && (
          <p className="err_msg">{errors.email?.message?.toString()}</p>
        )}
        {errors.apiError?.message && (
          <p className="err_msg">{errors.apiError?.message?.toString()}</p>
        )}

        <SubmitBtn>임시 비밀번호 받기</SubmitBtn>
      </FindFormWrap>
    </PasswordFindWrap>
  );
};

export default PasswordFindPage;
