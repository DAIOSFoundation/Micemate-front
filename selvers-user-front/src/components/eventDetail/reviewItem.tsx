import { ReviewItemWrap } from "./reviewItemStyle";
import { dateStringFormat } from "@/util/stringTransition";
import LikeIconFill from "@/assets/icon/hand_up_fill.svg?react";
import LikeIcon from "@/assets/icon/hand_up_path.svg?react";
import StarRatings from "react-star-ratings";
import { starPath } from "@/styles/iconPath";
import { useReviewLikeMutation } from "@/api/events/events.query";
import { useNavigate } from "react-router-dom";
import { useAlret } from "@/hook/useAlret";
import { useEffect, useState } from "react";

const ReviewItem = ({
  id,
  rate,
  name,
  created_at,
  content,
  likes,
  like_state,
}) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const useReviewLike = useReviewLikeMutation();
  const navigate = useNavigate();
  const { openAlret } = useAlret();
  const [likeNum, setLikeNum] = useState(0);
  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    if (likes) {
      setLikeNum(likes);
    }
    if (like_state) {
      setLikeState(like_state);
    }
  }, [likes, like_state]);

  const wishEventHandler = (reviewId: number) => {
    setLikeState((prev) => !prev);
    if (likeState === true) {
      setLikeNum((prev) => prev - 1);
    } else if (likeState === false) {
      setLikeNum((prev) => prev + 1);
    }
    if (token && userId) {
      useReviewLike.mutate(
        {
          token: token,
          user_id: userId,
          review_id: reviewId,
        },
        {
          onSuccess: () => {},
        }
      );
    } else {
      const alretData = {
        text: "로그인이 필요한 기능입니다.",
        callback: () => {
          navigate("/login");
        },
      };
      openAlret(alretData);
    }
  };

  return (
    <ReviewItemWrap>
      <StarRatings
        rating={rate}
        starRatedColor={"rgba(30, 158, 255, 1)"}
        starEmptyColor={"rgba(85, 85, 85, 1)"}
        starDimension="10px"
        starSpacing="2px"
        svgIconPath={starPath}
      />
      <p className="writer_info">
        {name}&nbsp;·&nbsp;
        {dateStringFormat(created_at.split("T")[0])}
      </p>
      <p className="desc">{content}</p>
      <button onClick={() => wishEventHandler(id)} className="like_btn">
        <span className="icon">
          {likeState ? <LikeIconFill /> : <LikeIcon />}
        </span>
        <span className="num">{likeNum}</span>
      </button>
    </ReviewItemWrap>
  );
};

export default ReviewItem;
