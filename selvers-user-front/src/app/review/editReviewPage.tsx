import { useForm } from "react-hook-form";
import {
  EditReviewPageWrap,
  ThumbnailArea,
  ReviewForm,
} from "./editReviewPageStyle";
import StarRatings from "react-star-ratings";
import { starPath } from "@/styles/iconPath";
import { InputTextAreaA } from "@components/form/inputTextArea";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTokenValidationQuery } from "@/api/auth/auth.query";
import {
  useEventDetail,
  useReviewPostMutation,
} from "@/api/events/events.query";
import { useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { useAlret } from "@/hook/useAlret";
import { AxiosError } from "axios";

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
  // const [desc, setDesc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { openAlret } = useAlret();

  const useReviewPost = useReviewPostMutation();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    //토큰 없거나 토큰있으면 토큰 검증 후 로그인 페이지 이동
    if (!token || (TokenVailError && TokenVail === undefined)) {
      navigate("/login", { state: { from: location }, replace: true });
      resetUserState();
      return;
    }
  }, []);

  const changeStarHandler = (rating) => {
    setScore(rating);
  };
  const onSubmit = handleSubmit((data, e) => {
    e.preventDefault();
    if (score === 0 && !data.desc) {
      setErrorMessage("별점을 선택하고 리뷰를 입력해주세요");
      return;
    } else if (score === 0) {
      setErrorMessage("별점을 선택해주세요");
      return;
    } else if (data.desc.length <= 0) {
      setErrorMessage("리뷰를 입력해주세요");
      return;
    }

    useReviewPost.mutate(
      {
        token: token,
        event_id: id,
        data: { rate: score, content: data.desc },
      },
      {
        onSuccess: () => {
          const alretData = {
            text: "리뷰작성이 완료되었습니다.",
            callback: () => {
              navigate(`/detail/${id}`);
            },
          };
          openAlret(alretData);
        },
        onError: (error: AxiosError) => {
          if (error.status === 400) {
            const alretData = {
              text: "신청행사가 아니거나 종료된 행사가 아닙니다.",
              callback: () => {
                navigate(`/`);
              },
            };
            openAlret(alretData);
          }
        },
      }
    );

    setErrorMessage("");
  });

  // const submitHandler = (e: FormEvent<HTMLElement>) => {
  //   e.preventDefault();
  // };
  return (
    <EditReviewPageWrap>
      {DetailData && (
        <ThumbnailArea>
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${
              DetailData?.data?.img
            }`}
          />
        </ThumbnailArea>
      )}

      <ReviewForm onSubmit={onSubmit}>
        <div className="text_box">
          <span>{JSON.parse(name)}님, 참여한 행사는 어떠셨나요?</span>
          <span>
            리뷰를 남겨주시면 더 좋은 행사를 준비하는데에 큰 도움이 될 수
            있어요!
          </span>
        </div>
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
          <InputTextAreaA
            id="desc"
            placeholder="참여한 행사에 대해 더 남겨주실 의견이 있으신가요?"
            register={register}
          />
        </div>
        {errorMessage && (
          <span
            style={{ display: "block", marginBottom: "10px" }}
            className="err_msg"
          >
            {errorMessage}
          </span>
        )}
        <div className="submit_area">
          <button type="submit">리뷰 남기기</button>
        </div>
      </ReviewForm>
    </EditReviewPageWrap>
  );
};

export default EditReviewPage;
