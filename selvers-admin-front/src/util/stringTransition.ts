import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ko"; // 한국어 로케일 추가

// dayjs 플러그인 로드
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);

// 한국어 로케일 설정
dayjs.locale("ko");

export const dateFormat = (str: string) => {
  if (str) return str.split(" ")[0].replace(/-/g, "/");
};

export const delTime = (date: string) => {
  if (date) return date.split(" ")[0];
};
export const delDate = (dateString: string) => {
  if (dateString) {
    const date = dayjs(dateString);

    if (!date.isValid()) {
      throw new Error("Invalid date string");
    }

    return date.toDate();
  }
};

export const dateTimeToString = (date) => {
  if (date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }
};

export const dateStringFormat = (str: string) => {
  const datePart = str.split(" ")[0];
  const [year, month, day] = datePart.split("-"); // 하이픈으로 나누기

  return `${year}년 ${month}월 ${day}일`;
};

export const dateStringFormatB = (dateString: string) => {
  const date = dayjs(dateString);
  const formattedDate = date.format("MM월DD일(ddd) HH:mm");

  return formattedDate;
};

export const priceFormat = (price: string) => {
  if (Number(price) > 0) {
    return `${price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
  } else {
    return "무료";
  }
};
