import {
  EventDetailPageWrap,
  MainContentWrap,
  ContentWrap,
  SideTab,
} from "./eventDetailPageStyle";
import Thumbnail from "@components/eventDetail/thumbnailArea";
import Content from "@components/eventDetail/content";
import Community from "@components/eventDetail/community";
import EventSwiper from "@components/eventSwiper";
import {
  useEventDetail,
  useEventList,
  useEventReview,
  useBoothList,
} from "@/api/events/events.query";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EventDetailPage = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const name = localStorage.getItem("name");
  const [page, setPage] = useState(1); // 페이지네이션
  const [sortType, setSortType] = useState(1); // 1. 베스트순, 2. 최신순
  const [applyBtn, setApplyBtn] = useState(true);

  const {
    data: aiEventList,
    isLoading: isLoadingAI,
    error: errorAI,
  } = useEventList(1, token);

  const {
    data: detailData,
    isLoading: isLoadingDetail,
    isError: isErrorDetail,
  } = useEventDetail(id, token);

  const {
    data: reviewData,
    isLoading: isLoadingReview,
    isError: isErrorReview,
  } = useEventReview({
    token: token,
    user_id: userId,
    event_id: JSON.parse(id),
    page: page,
    sort_type: sortType,
  });

  const {
    data: boothListData,
    isLoading: isLoadingBoothList,
    isError: isErrorBoothList,
  } = useBoothList(id, token);

  useEffect(() => {
    if (detailData) {
      setApplyBtn(!detailData.data.applied);
    }
  }, []);

  if (isLoadingAI || isLoadingDetail || isLoadingReview || isLoadingBoothList) {
    return <LoadingScreen />;
  }
  if (errorAI || isErrorDetail || isErrorReview || isErrorBoothList) {
    return <div>데이터 없음</div>;
  }

  return (
    <EventDetailPageWrap className="maxframe">
      <MainContentWrap>
        <ContentWrap>
          <Thumbnail thumnaildata={detailData.data} applyBtn={applyBtn} />
          <Content contentdata={detailData.data} />
        </ContentWrap>
        <SideTab>
          <Community
            reviewData={reviewData}
            boothListData={boothListData}
            page={page}
            setPage={setPage}
            setSortType={setSortType}
          />
        </SideTab>
      </MainContentWrap>
      <EventSwiper
        title={`AI 메이트가 맞추는 '${JSON.parse(name)}' 님의 취향저격 전시`}
        eventList={aiEventList.data.items}
      />
    </EventDetailPageWrap>
  );
};

export default EventDetailPage;
