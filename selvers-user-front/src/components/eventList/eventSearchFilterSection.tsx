import SearchHashBox from "@components/eventList/searchHashBox";
import EventListFilter from "@components/eventList/eventListFilter";
import FilterIcon from "@/assets/icon/filter.svg?react";
import { PageInfo, FilterWrap } from "@/app/eventList/eventListPageStyle";
import useQueryParams from "@/hook/useSearchParams";
import { useCallback, useState } from "react";
import {
  FILTER_PERIOD,
  FILTER_PRICE,
  FILTER_PROGRESS,
} from "@/constants/searchFilters";
import { useMediaQuery } from "usehooks-ts";
import { CategoryListType } from "@/type";

export type FilterType = {
  progress: number | null;
  period: number | null;
  price: number | null;
};

interface EventSearchFilterSectionProps {
  categoryList: CategoryListType[];
}

const EventSearchFilterSection = ({
  categoryList,
}: EventSearchFilterSectionProps) => {
  const queryParams = useQueryParams({
    isSetPageFirst: true,
    isDirectPush: true,
    isReplace: true,
  });
  const [filterOn, setFilterOn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

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
    const currentCategory = categoryList?.find(
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
  }, [queryParams, categoryList]);

  const handleDeleteHash = (target: {
    key: string;
    name: string;
    id: number;
  }) => {
    queryParams.deleteQuery(target.key);
  };

  return (
    <PageInfo className="maxframe">
      <h2>검색결과</h2>
      <FilterWrap $filterOn={filterOn}>
        <button onClick={filterHandler} className="filter_btn">
          <FilterIcon />
          <span>필터</span>
        </button>
        {filterOn && <EventListFilter onApply={onApply} />}
        <SearchHashBox hashList={createHashList()} onClick={handleDeleteHash} />
      </FilterWrap>
    </PageInfo>
  );
};

export default EventSearchFilterSection;
