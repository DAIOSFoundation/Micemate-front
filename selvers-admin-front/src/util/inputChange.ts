// utils/inputChange.ts

import { ChangeEvent } from "react";

/**
 * 전화번호 입력값을 하이픈 형식으로 변환하는 유틸리티 함수
 * @param e - ChangeEvent<HTMLInputElement>
 * @param setValue - react-hook-form의 setValue 함수
 * @param fieldName - 필드 이름 (ex. "contact")
 */
export const telChangeUtilHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setValue: (field: string, value: string) => void,
  fieldName: string
) => {
  let input = e.target.value.replace(/\D/g, ""); // 숫자 이외의 문자는 제거
  if (input.length > 7) {
    input =
      input.slice(0, 3) + "-" + input.slice(3, 7) + "-" + input.slice(7, 11);
  } else if (input.length > 3) {
    input = input.slice(0, 3) + "-" + input.slice(3, 7);
  }
  setValue(fieldName, input); // 필드 이름에 따라 값을 업데이트
};

export const birthChangeHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setValue: (field: string, value: string) => void,
  fieldName: string
) => {
  let input = e.target.value.replace(/\D/g, "");
  if (input.length > 4 && input.length <= 6) {
    input = input.slice(0, 4) + "-" + input.slice(4);
  } else if (input.length > 6) {
    input =
      input.slice(0, 4) + "-" + input.slice(4, 6) + "-" + input.slice(6, 8);
  }
  setValue(fieldName, input);
};
