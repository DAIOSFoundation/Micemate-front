import { ThumbnailWrap, InfoBox, Toast } from "./thumbnailAreaStyle";
import WishIcon from "@/assets/icon/heart_btn.svg?react";
import WishIconFill from "@/assets/icon/heart_btn_fill.svg?react";
import ShardIcon from "@/assets/icon/shard_btn.svg?react";
import StarIcon from "@/assets/icon/star_fill.svg?react";
import { useState, useEffect } from "react";
import { EventDetailDataType } from "@/type";
import { ddayCount } from "@/util/ddayCount";
import { dateStringFormat } from "@/util/stringTransition";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/userState";
import { useWishEventMutation } from "@/api/users/users.query";
import { WishEventType } from "@/type";
import { useAlret } from "@/hook/useAlret";
import { useReviewList } from "@/api/events/events.query";

const Thumbnail = ({
  thumnaildata,
  applyBtn,
}: {
  thumnaildata: EventDetailDataType;
  applyBtn: boolean;
}) => {
  const useWishEvent = useWishEventMutation();
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();
  const { openAlret } = useAlret();
  const [likeState, setLikeState] = useState(false);
  const [totalRate, setTotalRate] = useState(null);
  const user = useRecoilValue(userState);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");

  const { data: reviewList } = useReviewList(id, token);

  useEffect(() => {
    if (reviewList?.data?.rate) {
      const rate = reviewList?.data?.rate.toFixed(1);
      setTotalRate(rate);
    }
  }, [reviewList]);

  useEffect(() => {
    if (thumnaildata.like) {
      setLikeState(thumnaildata.like);
    }
  }, [thumnaildata.like]);

  const alretData = {
    text: "로그인이 필요한 기능입니다.",
    callback: () => {
      navigate("/login");
    },
  };
  const wishEventHandler = () => {
    if (token && userId) {
      const data: WishEventType = {
        token: token,
        user_id: userId,
        event_id: Number(id),
      };
      useWishEvent.mutate(data);
      setLikeState((prev) => !prev);
    } else {
      openAlret(alretData);
    }
  };

  const handleCopyClipBoard = async () => {
    const currentUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 5000);
    } catch {
      setToast(false);
    }
  };

  const checkApplyDate = (start, end) => {
    const today = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (today < startDate) {
      return "before";
    } else if (today >= startDate && today <= endDate) {
      return "apply";
    } else if (today > endDate) {
      return "after";
    } else {
      return "after";
    }
  };

  const applyBtnHandler = (
    type: number,
    priceLink: string,
    paybleStart: string,
    paybleEnd: string
  ) => {
    // 로그인 상태일 경우
    if (user.isLogin === true) {
      if (type === 1 || type === 2) {
        //무료, 사전신청 시 무료 / 현장 구매 시 유료
        navigate(`/detail/${id}/apply`);
      } else if (type === 3) {
        // 사전 신청 무료 / 기간 한정 유로일 경우 / 현장 구매 시 유료
        const today = new Date();
        const startDate = new Date(paybleStart);
        const endDate = new Date(paybleEnd);
        const validUrl =
          priceLink.startsWith("http://") || priceLink.startsWith("https://")
            ? priceLink
            : `http://${priceLink}`;
        if (today >= startDate && today <= endDate) {
          window.open(validUrl);
        } else {
          navigate(`/detail/${id}/apply`);
        }
      } else if (type === 4 || type === 5) {
        // 유료일경우
        const validUrl =
          priceLink.startsWith("http://") || priceLink.startsWith("https://")
            ? priceLink
            : `http://${priceLink}`;
        window.open(validUrl);
      }
    } else {
      // 미로그인 상태일 경우
      navigate("/login");
    }
  };

  return (
    <ThumbnailWrap>
      <figure className="thumb_img">
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${thumnaildata.img}`}
        />
      </figure>
      <InfoBox>
        <div className="title_box">
          <h2>{thumnaildata.title}</h2>
          <p className="d_day">{`D${ddayCount(
            thumnaildata.event_start_date
          )}`}</p>
        </div>
        <div className="desc_box">
          <span className="date">
            {`${dateStringFormat(thumnaildata.event_start_date)} ~
            ${dateStringFormat(thumnaildata.event_end_date)}`}
          </span>
          <span className="location">{thumnaildata.position1}</span>
        </div>
        <div className="rating_box">
          <span className="icon">
            <StarIcon />
          </span>
          <span className="rating">{totalRate === null ? 0 : totalRate}</span>
          <span className="count">{`(${reviewList?.data?.total})`}</span>
        </div>
        <div className="public_btn_box">
          <div onClick={wishEventHandler} className="icon_btn">
            {likeState ? <WishIconFill /> : <WishIcon />}
          </div>
          <div onClick={handleCopyClipBoard} className="icon_btn">
            <ShardIcon />
          </div>
        </div>
        {applyBtn &&
          checkApplyDate(
            thumnaildata.event_start_date,
            thumnaildata.event_end_date
          ) !== "after" && (
            <div className="apply_btn_box">
              {/* 모집기간 이전 */}
              {checkApplyDate(
                thumnaildata.application_start_date,
                thumnaildata.application_end_date
              ) === "before" && (
                <div className="btn disable">신청기간이 아닙니다.</div>
              )}
              {/* 모집기간 */}
              {checkApplyDate(
                thumnaildata.application_start_date,
                thumnaildata.application_end_date
              ) === "apply" && (
                <div
                  onClick={() => {
                    applyBtnHandler(
                      thumnaildata.payable_type,
                      thumnaildata.payable_price_url,
                      thumnaildata.payable_start_date,
                      thumnaildata.payable_end_date
                    );
                  }}
                  className="btn primary"
                >
                  사전 신청하기
                </div>
              )}
              {/* 모집기간 이후 */}
              {checkApplyDate(
                thumnaildata.application_start_date,
                thumnaildata.application_end_date
              ) === "after" && (
                <div className="btn disable">신청기간이 마감되었습니다.</div>
              )}
            </div>
          )}
      </InfoBox>
      <Toast $on={toast}>URL 이 복사되었습니다.</Toast>
    </ThumbnailWrap>
  );
};

export default Thumbnail;
