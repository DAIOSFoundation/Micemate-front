import { useEventSearch } from "@/api/events/events.query";
import { EventListPageWrap, ContentWrap } from "./eventListPageStyle";
import CategoryList from "@components/categoryList";
import { useCategoryQuery } from "@/api/etc/category.query";
import SearchBar from "@components/searchBar";
import { useMediaQuery } from "usehooks-ts";
import LoadingScreen from "@components/shared/LoadingScreen";
import EventSearchResult from "@components/eventList/eventSearchResult";
import EventSearchFilterSection from "@components/eventList/eventSearchFilterSection";
import Pagination from "@components/shared/pagination";
import useQueryParams from "@/hook/useSearchParams";

export type FilterType = {
  progress: number | null;
  date: number | null;
  price: number | null;
};

const EventListPage = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const queryParams = useQueryParams();

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
        <EventSearchResult searchData={searchData?.data?.items || []} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "40px",
          }}
        >
          <Pagination
            total={searchData?.data?.total || 0}
            page={Number(queryParams.get("page")) || 1}
            setPage={(page) => {
              queryParams.set("page", page.toString());
            }}
            size={12}
          />
        </div>
      </ContentWrap>
    </EventListPageWrap>
  );
};

export default EventListPage;
