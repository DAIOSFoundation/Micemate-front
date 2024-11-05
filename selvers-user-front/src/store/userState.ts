import { atom } from "recoil";

export interface UserStateType {
  isLogin: boolean;
  isLoginError: boolean;
  data: {
    user_id: number | null;
    name: string | null;
    token: string | null;
    is_company: boolean | string;
    is_admin?: boolean;
  };
}

export const userState = atom<UserStateType>({
  key: "user",
  default: {
    isLogin: false,
    isLoginError: false,
    data: {
      user_id: null,
      name: null,
      token: null,
      is_company: null,
      is_admin: null,
    },
  },
  effects: [
    ({ setSelf, onSet }) => {
      const savedToken = localStorage.getItem("token");
      const savedUserId = localStorage.getItem("user_id");
      const savedUserType = localStorage.getItem("user_type");
      const sevedUserName = localStorage.getItem("name");
      if (savedToken && savedUserId) {
        setSelf({
          isLogin: true,
          isLoginError: false,
          data: {
            user_id: JSON.parse(savedUserId),
            name: sevedUserName,
            token: savedToken,
            is_company: JSON.parse(savedUserType),
          },
        });
      }

      onSet((newValue, _, isReset) => {
        if (isReset) {
          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
          localStorage.removeItem("user_type");
          localStorage.removeItem("name");
        } else {
          localStorage.setItem(
            "user_id",
            JSON.stringify(newValue.data.user_id ?? "")
          );
          localStorage.setItem(
            "name",
            JSON.stringify(newValue.data.name ?? "")
          );
          localStorage.setItem("token", newValue.data.token ?? "");
          localStorage.setItem(
            "user_type",
            JSON.stringify(newValue.data.is_company) ?? ""
          );
        }
      });
    },
  ],
});
