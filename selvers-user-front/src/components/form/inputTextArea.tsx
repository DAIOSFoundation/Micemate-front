import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputTextAreaWrapA, InputTextAreaWrapB } from "./inputTextAreaStyle";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  id?: string;
  label?: string;
  required?: boolean;
  keyId?: number; // 상태 객체의 키
  value?: string; // 현재 키에 해당하는 값
  onChange?: (key: number, value: string) => void; // 값 변경 시 호출되는 함수
  placeholder?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  register?: UseFormRegister<FieldValues>;
};
//리뷰 페이지 사용
export const InputTextAreaA = ({
  id,
  placeholder,
  setValue,
  register,
}: Props) => {
  return (
    <InputTextAreaWrapA>
      <textarea
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...(register && register(id))}
      />
    </InputTextAreaWrapA>
  );
};

//신청하기 페이지 사용
export const InputTextAreaB: React.FC<Props> = ({
  label,
  required,
  keyId,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(keyId, e.target.value);
  };

  const textareaId = `textarea-${keyId}`;

  return (
    <InputTextAreaWrapB>
      <p className="label">
        <label htmlFor={textareaId}>
          <span className="txt">{label}</span>
          {required && <span className="req">&nbsp;*</span>}
        </label>
      </p>
      <div className="select_box">
        <textarea id={textareaId} onChange={handleChange} required={required} maxLength={150} />
      </div>
    </InputTextAreaWrapB>
  );
};
