import LoadingScreen from "@components/shared/LoadingScreen";
import { useTokenValidationQuery } from "@/api/auth/auth.query";
import { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/store/userState";
import { useNavigate } from "react-router-dom";

const SocialTokenVaild = () => {
  const setUserState = useSetRecoilState(userState);
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const social_token = localStorage.getItem("social_token");
  const { data: TokenVail, isSuccess: TokenVailSuccess } =
    useTokenValidationQuery(social_token);

  useEffect(() => {
    if (TokenVail) {
      const userResponse = {
        isLogin: true,
        isLoginError: false,
        data: {
          user_id: TokenVail.data.user_id,
          name: TokenVail.data.name,
          token: social_token,
          is_company: TokenVail.data.is_company,
        },
      };
      setUserState({ ...userResponse });
    }
  }, [TokenVail]);

  const review_url = localStorage.getItem("review_url");
  //로그인 성공시
  useEffect(() => {
    if (TokenVailSuccess) {
      if (review_url) {
        navigate(review_url, { replace: true });
      } else {
        if (user.data.is_company === true) {
          navigate("/host-main", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
        localStorage.removeItem("social_provider");
        localStorage.removeItem("social_provider_id");
        localStorage.removeItem("social_token");
      }
    }
  }, [TokenVailSuccess]);

  return <LoadingScreen />;
};

export default SocialTokenVaild;
