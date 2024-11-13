import EventCard from "@components/eventCard";
import { useEventSearch } from "@/api/events/events.query";
import {
  EventListPageWrap,
  ContentWrap,
  PageInfo,
  FilterWrap,
  EventListWrap,
} from "./eventListPageStyle";
import CategoryList from "@components/categoryList";
import FilterIcon from "@/assets/icon/filter.svg?react";
import { useCategoryQuery } from "@/api/etc/category.query";
import { useCallback, useState } from "react";
import SearchBar from "@components/searchBar";
import { useMediaQuery } from "usehooks-ts";
import LoadingScreen from "@components/shared/LoadingScreen";
import { EventListType } from "@/type";
import EventListFilter from "@components/eventList/eventListFilter";
import useQueryParams from "@/hook/useSearchParams";
import {
  FILTER_PERIOD,
  FILTER_PRICE,
  FILTER_PROGRESS,
} from "@/constants/searchFilters";
import SearchHashBox from "@components/eventList/searchHashBox";

export type FilterType = {
  progress: number | null;
  period: number | null;
  price: number | null;
};

const EventListPage = () => {
  const queryParams = useQueryParams({
    isReplace: true,
  });
  const [filterOn, setFilterOn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const token = localStorage.getItem("token");
  const { data: searchData, isLoading, isError } = useEventSearch(token);
  const { data: category } = useCategoryQuery();

  const filterHandler = () => {
    setFilterOn((prev) => !prev);
    if (isMobile && !filterOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const onApply = (filter: FilterType) => {
    const validFilter = Object.keys(filter).reduce((acc, key) => {
      if (filter[key] === 0) {
        acc[key] = undefined;
      } else {
        acc[key] = filter[key];
      }
      return acc;
    }, {});
    queryParams.setAll(validFilter);
    filterHandler();
  };

  const createHashList = useCallback(() => {
    const hashList = [];
    const currentFilter = queryParams.getAll();
    const currentCategory = category?.find(
      (item) => item.id === Number(currentFilter.category)
    );
    if (currentCategory) {
      hashList.push({
        key: "category",
        name: currentCategory.name,
        id: currentCategory.id,
      });
    }

    const currentProgress = FILTER_PROGRESS.find(
      (item) => item.value === Number(currentFilter.progress)
    );
    if (currentProgress) {
      hashList.push({
        key: "progress",
        name: currentProgress.name,
        id: currentProgress.value,
      });
    }

    const currentPeriod = FILTER_PERIOD.find(
      (item) => item.value === Number(currentFilter.period)
    );
    if (currentPeriod) {
      hashList.push({
        key: "period",
        name: currentPeriod.name,
        id: currentPeriod.value,
      });
    }

    const currentPrice = FILTER_PRICE.find(
      (item) => item.value === Number(currentFilter.price)
    );
    if (currentPrice) {
      hashList.push({
        key: "price",
        name: currentPrice.name,
        id: currentPrice.value,
      });
    }

    return hashList;
  }, [queryParams, category]);

  const handleDeleteHash = (target: {
    key: string;
    name: string;
    id: number;
  }) => {
    queryParams.deleteQuery(target.key);
  };

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
        <PageInfo className="maxframe">
          <h2>검색결과</h2>
          <FilterWrap $filterOn={filterOn}>
            <button onClick={filterHandler} className="filter_btn">
              <FilterIcon />
              <span>필터</span>
            </button>
            {filterOn && <EventListFilter onApply={onApply} />}
            <SearchHashBox
              hashList={createHashList()}
              onClick={handleDeleteHash}
            />
          </FilterWrap>
        </PageInfo>
        <EventListWrap className="maxframe">
          {searchData.data.items &&
            searchData.data.items.map((data: EventListType) => {
              return (
                <EventCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  img={data.img}
                  event_start_date={data.event_start_date}
                  event_end_date={data.event_end_date}
                  position={data.position}
                  price={data.price}
                  likes={data.likes}
                  like_state={data.like_state}
                />
              );
            })}
        </EventListWrap>
      </ContentWrap>
    </EventListPageWrap>
  );
};

export default EventListPage;
