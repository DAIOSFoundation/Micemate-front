import {
  EditReviewPageWrap,
  ThumbnailArea,
  ReviewForm,
} from "./editReviewPageStyle";
import StarRating from "@components/form/starRating";
import StarRatings from "react-star-ratings";
import { starPath } from "@/styles/iconPath";
import { InputTextAreaA } from "@components/form/inputTextArea";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTokenValidationQuery } from "@/api/auth/auth.query";
import { useEventDetail } from "@/api/events/events.query";
import { useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";

const EditReviewPage = () => {
  // 토큰 유효성 검사, 토큰없으면 바로 로그인 페이지로 from url 담아서 이동
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
  const location = useLocation();
  const resetUserState = useResetRecoilState(userState);
  const { data: TokenVail, isError: TokenVailError } =
    useTokenValidationQuery(token);
  const { id } = useParams();
  const { data: DetailData } = useEventDetail(id, token);
  const [score, setScore] = useState(0);
  useEffect(() => {
    //토큰 없거나 만료된 토큰 검증 후 로그인 페이지 이동
    if (!token || (TokenVailError && TokenVail === undefined)) {
      navigate("/login", { state: { from: location }, replace: true });
      resetUserState();
    }
  }, [TokenVail, TokenVailError, token]);

  // 행사 썸네일 조회/ 유저이름 로컬스토리지에서 조회
  // 리뷰등록
  const changeStarHandler = (rating) => {
    setScore(rating);
  };

  return (
    <EditReviewPageWrap>
      <ThumbnailArea>
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${
            DetailData?.data?.img
          }`}
        />
      </ThumbnailArea>

      <ReviewForm>
        <div className="text_box">
          <span>{JSON.parse(name)}님, 참여한 행사는 어떠셨나요?</span>
          <span>
            리뷰를 남겨주시면 더 좋은 행사를 준비하는데에 큰 도움이 될 수
            있어요!
          </span>
        </div>
        <StarRating />
        <StarRatings
          rating={score}
          changeRating={changeStarHandler}
          numberOfStars={5}
          starRatedColor={"rgba(30, 158, 255, 1)"}
          starHoverColor={"rgba(30, 158, 255, 1)"}
          starEmptyColor={"rgba(85, 85, 85, 1)"}
          svgIconPath={starPath}
        />
        <div className="input_text_area">
          <InputTextAreaA placeholder="참여한 행사에 대해 더 남겨주실 의견이 있으신가요?" />
        </div>
        <div className="submit_area">
          <button>리뷰 남기기</button>
        </div>
      </ReviewForm>
    </EditReviewPageWrap>
  );
};

export default EditReviewPage;
