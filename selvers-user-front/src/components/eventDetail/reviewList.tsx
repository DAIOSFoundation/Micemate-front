import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import ReviewItem from "./reviewItem";
import CloseIcon from "@/assets/icon/close.svg?react";
import { ReviewListDataType } from "@/type";

//셀렉트 박스 변경시
const ReviewList = ({
  reviewData,
  page,
  setPage,
  setSortType,
}: {
  reviewData: { data: ReviewListDataType };
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setSortType: Dispatch<SetStateAction<number>>;
}) => {
  const [infoClose, setInfoClose] = useState(true);
  const [totalRate, setTotalRate] = useState(null);

  useEffect(() => {
    if (reviewData?.data?.rate) {
      const rate = reviewData?.data?.rate.toFixed(1);
      setTotalRate(rate);
    }
  }, [reviewData]);

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
                rating={
                  reviewData?.data?.rate === null ? 0 : reviewData?.data?.rate
                }
                starRatedColor={"rgba(30, 158, 255, 1)"}
                starEmptyColor={"rgba(85, 85, 85, 1)"}
                starDimension="22px"
                starSpacing="0"
                svgIconPath={starPath}
              />
              <p className="total">{`${
                reviewData?.data?.total === undefined
                  ? 0
                  : reviewData?.data?.total
              }개 평점`}</p>
            </div>

            <div className="average">{totalRate}</div>
          </RatingsWrap>
          <SortSelectBox width={122} setSortType={setSortType} />
        </ReviewHeader>
        <ReviewBody>
          {reviewData?.data?.items ? (
            reviewData?.data?.items.map((data) => {
              return (
                <ReviewItem
                  id={data.id}
                  rate={data.rate}
                  name={data.name}
                  created_at={data.created_at}
                  content={data.content}
                  likes={data.likes}
                  like_state={data.like_state}
                />
              );
            })
          ) : (
            <Item>등록된 리뷰가 없습니다.</Item>
          )}
        </ReviewBody>
        <Pagination
          total={reviewData?.data?.total}
          page={page}
          setPage={setPage}
        />
      </ReviewListWrap>
    </>
  );
};

export default ReviewList;
