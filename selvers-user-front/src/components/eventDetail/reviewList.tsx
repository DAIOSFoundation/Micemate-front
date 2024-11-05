import { Dispatch, SetStateAction, useState } from "react";
import SortSelectBox from "@components/form/sortSelectBox";
import Pagination from "@components/shared/pagination";
import StarRatings from "react-star-ratings";
import {
  AlretChang,
  ReviewListWrap,
  ReviewHeader,
  RatingsWrap,
  ReviewBody,
  Item,
} from "./reviewListStyle";
import { starPath } from "@/styles/iconPath";
import LikeIconFill from "@/assets/icon/hand_up_fill.svg?react";
import LikeIcon from "@/assets/icon/hand_up_path.svg?react";
import CloseIcon from "@/assets/icon/close.svg?react";
import { dateStringFormat } from "@/util/stringTransition";
import { ReviewListDataType } from "@/type";

//셀렉트 박스 변경시
const ReviewList = ({
  reviewData,
  page,
  setPage,
  setSortType,
}: {
  reviewData: ReviewListDataType;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setSortType: Dispatch<SetStateAction<number>>;
}) => {
  const [infoClose, setInfoClose] = useState(true);
  return (
    <>
      {infoClose && (
        <AlretChang>
          <span>
            전시회 참여 후 리뷰를 작성해주세요.
            <br />
            고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다
          </span>
          <button onClick={() => setInfoClose(false)}>
            <CloseIcon />
          </button>
        </AlretChang>
      )}
      <ReviewListWrap>
        <ReviewHeader>
          <RatingsWrap>
            <div className="stars">
              <StarRatings
                rating={reviewData.rate}
                starRatedColor={"rgba(30, 158, 255, 1)"}
                starEmptyColor={"rgba(85, 85, 85, 1)"}
                starDimension="22px"
                starSpacing="0"
                svgIconPath={starPath}
              />
              <p className="total">{`${
                reviewData.total === undefined ? 0 : reviewData.total
              }개 평점`}</p>
            </div>
            <div className="average">{reviewData.rate}</div>
          </RatingsWrap>
          <SortSelectBox width={122} setSortType={setSortType} />
        </ReviewHeader>
        <ReviewBody>
          {reviewData?.items ? (
            reviewData.items.map((data) => {
              return (
                <Item key={data.id}>
                  <StarRatings
                    rating={data.rate}
                    starRatedColor={"rgba(30, 158, 255, 1)"}
                    starEmptyColor={"rgba(85, 85, 85, 1)"}
                    starDimension="10px"
                    starSpacing="2px"
                    svgIconPath={starPath}
                  />
                  <p className="writer_info">
                    {data.name}&nbsp;·&nbsp;{dateStringFormat(data.created_at)}
                  </p>
                  <p className="desc">{data.content}</p>
                  <button className="like_btn">
                    <span className="icon">
                      {data.like_state ? <LikeIconFill /> : <LikeIcon />}
                    </span>
                    <span className="num">30</span>
                  </button>
                </Item>
              );
            })
          ) : (
            <Item>등록된 리뷰가 없습니다.</Item>
          )}
        </ReviewBody>
        <Pagination total={reviewData.total} page={page} setPage={setPage} />
      </ReviewListWrap>
    </>
  );
};

export default ReviewList;
