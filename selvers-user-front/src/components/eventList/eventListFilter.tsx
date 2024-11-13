import { Filter } from "@/app/eventList/eventListPageStyle";
import { InputRadioB } from "@components/form/inputRadio";
import {
  FILTER_PROGRESS,
  FILTER_PERIOD,
  FILTER_PRICE,
} from "@/constants/searchFilters";
import { useState } from "react";
import { FilterType } from "@/app/eventList/eventListPage";
import useQueryParams from "@/hook/useSearchParams";

interface EventListFilterProps {
  onApply: (filter: FilterType) => void;
}

interface FilterGroupProps {
  title: string;
  filters: typeof FILTER_PROGRESS;
  name: keyof FilterType;
  currentValue: number | null;
  onChange: (name: keyof FilterType, value: number | null) => void;
}

const FilterGroup = ({
  title,
  filters,
  name,
  currentValue,
  onChange,
}: FilterGroupProps) => (
  <div className="radio_box">
    <span className="type">{title}</span>
    <ul className="radio_list">
      {filters.map((filter) => (
        <li key={filter.name}>
          <InputRadioB
            label={filter.name}
            id={filter.name + filter.value}
            name={name}
            value={filter.value}
            checked={
              currentValue === filter.value ||
              (currentValue === null && filter.value === 0)
            }
            onChange={() => onChange(name, filter.value)}
          />
        </li>
      ))}
    </ul>
  </div>
);

const EventListFilter = ({ onApply }: EventListFilterProps) => {
  const queryParams = useQueryParams();
  const initialFilter: FilterType = {
    progress: Number(queryParams.get("progress")) || 0,
    period: Number(queryParams.get("period")) || 0,
    price: Number(queryParams.get("price")) || 0,
  };

  const [currentFilter, setCurrentFilter] = useState<FilterType>(initialFilter);

  const onClickRadio = (name: keyof FilterType, value: number) => {
    setCurrentFilter((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const resetFilter = () => {
    setCurrentFilter({
      progress: 0,
      period: 0,
      price: 0,
    });
  };

  const filterGroups = [
    {
      title: "온/오프라인별",
      filters: FILTER_PROGRESS,
      name: "progress" as const,
    },
    { title: "날짜별", filters: FILTER_PERIOD, name: "period" as const },
    { title: "참가비", filters: FILTER_PRICE, name: "price" as const },
  ];

  return (
    <Filter>
      <div className="title_area">
        <span className="title">필터</span>
        <span className="reset_btn" onClick={resetFilter}>
          필터 초기화
        </span>
      </div>

      {filterGroups.map((group) => (
        <FilterGroup
          key={group.name + group.title}
          title={group.title}
          filters={group.filters}
          name={group.name}
          currentValue={currentFilter[group.name]}
          onChange={onClickRadio}
        />
      ))}

      <div className="btn_box">
        <button onClick={() => onApply(currentFilter)}>적용</button>
      </div>
    </Filter>
  );
};

export default EventListFilter;
