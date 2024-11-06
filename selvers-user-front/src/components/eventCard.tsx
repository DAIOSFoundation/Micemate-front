import { EventItemWrap, LikeBtn, Thumbnail, TextBox } from "./eventCardStyle";
import LikeIcon from "@/assets/icon/heart_fill.svg?react";
import UnLikeIcon from "@/assets/icon/heart_strok.svg?react";
import { EventListType } from "@/type";
import { dateFormat, priceFormat } from "@/util/stringTransition";
import { ddayCount } from "@/util/ddayCount";
import { Link, useNavigate } from "react-router-dom";
import { useWishEventMutation } from "@/api/users/users.query";
import { useAlret } from "@/hook/useAlret";
import { WishEventType } from "@/type";
import { useEffect, useState } from "react";

const EventCard = ({
  id,
  title,
  img,
  event_start_date,
  event_end_date,
  position,
  price,
  likes,
  like_state,
}: EventListType) => {
  const useWishEvent = useWishEventMutation();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const { openAlret } = useAlret();
  const [likeNum, setLikeNum] = useState(0);
  const [likeState, setLikeState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (likes) {
      setLikeNum(likes);
    }
    if (like_state) {
      setLikeState(like_state);
    }
  }, [likes, like_state]);

  const alretData = {
    text: "로그인이 필요한 기능입니다.",
    callback: () => {
      navigate("/login");
    },
  };

  const wishEventHandler = (eventId: number) => {
    if (token && userId) {
      const data: WishEventType = {
        token: token,
        user_id: userId,
        event_id: eventId,
      };
      useWishEvent.mutate(data);
      setLikeState((prev) => !prev);
      if (likeState === true) {
        setLikeNum((prev) => prev - 1);
      } else if (likeState === false) {
        setLikeNum((prev) => prev + 1);
      }
    } else {
      openAlret(alretData);
    }
  };

  return (
    <EventItemWrap>
      <LikeBtn onClick={() => wishEventHandler(id)}>
        <span>{likeNum}</span>
        <span className="heart_icon">
          {likeState ? <LikeIcon /> : <UnLikeIcon />}
        </span>
      </LikeBtn>
      <Link to={`detail/${id}`}>
        <Thumbnail>
          <img src={`https://api.micemate.io/storage/${img}`} />
          {Number(ddayCount(event_end_date)) > 0 && (
            <p className="end_event">종료행사</p>
          )}
        </Thumbnail>
        <TextBox>
          <div>
            <p className="title">{title}</p>
            <p className="infomation">
              {`${dateFormat(event_start_date)} ~ ${dateFormat(
                event_end_date
              )}`}
              <br />
              {position}
            </p>
          </div>
          <div>
            <p className="dday">{`D${ddayCount(event_end_date)}`}</p>
            <p className="price">{`${priceFormat(price.toString())}`}</p>
          </div>
        </TextBox>
      </Link>
    </EventItemWrap>
  );
};

export default EventCard;
