import { InputTextAreaWrapA, InputTextAreaWrapB } from "./inputTextAreaStyle";
import React, {ChangeEvent, useState} from "react";

type Props = {
  label?: string;
  required?: boolean;
  keyId?: number; // 상태 객체의 키
  value?: string; // 현재 키에 해당하는 값
  onChange?: (key: number, value: string) => void; // 값 변경 시 호출되는 함수
};
//리뷰 페이지 사용
export const InputTextAreaA = ({ placeholder }: Props) => {
  return (
    <InputTextAreaWrapA>
      <textarea placeholder={placeholder} />
    </InputTextAreaWrapA>
  );
};

//신청하기 페이지 사용
export const InputTextAreaB: React.FC<Props> = ({ label, required, keyId, value, onChange }) => {
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
        <textarea
          id={textareaId}
          onChange={handleChange}
          required={required}
        />
      </div>
    </InputTextAreaWrapB>
  );
};
