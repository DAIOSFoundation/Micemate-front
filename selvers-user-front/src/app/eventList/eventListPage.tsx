import { useEventSearch } from "@/api/events/events.query";
import { EventListPageWrap, ContentWrap } from "./eventListPageStyle";
import CategoryList from "@components/categoryList";
import { useCategoryQuery } from "@/api/etc/category.query";
import SearchBar from "@components/searchBar";
import { useMediaQuery } from "usehooks-ts";
import LoadingScreen from "@components/shared/LoadingScreen";
import EventSearchResult from "@components/eventList/eventSearchResult";
import EventSearchFilterSection from "@components/eventList/eventSearchFilterSection";

export type FilterType = {
  progress: number | null;
  period: number | null;
  price: number | null;
};

const EventListPage = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const token = localStorage.getItem("token");
  const { data: searchData, isLoading, isError } = useEventSearch(token);
  const { data: category } = useCategoryQuery();

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError) {
    return <div style={{ color: "#fff" }}>데이터 불러오기 실패</div>;
  }

  return (
    <EventListPageWrap>
      {isMobile && <SearchBar />}
      <CategoryList categoryList={category} />
      <ContentWrap>
        <EventSearchFilterSection categoryList={category} />
        <EventSearchResult searchData={searchData?.data.items} />
      </ContentWrap>
    </EventListPageWrap>
  );
};

export default EventListPage;
