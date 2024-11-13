import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchHistoryList from "./search/searchHistoryList";
import SearchCategoryList from "./search/searchCategoryList";
import useQueryParams from "@/hook/useSearchParams";
import {
  SearchBarWrap,
  SearchForm,
  FilterWrap,
  FilterContent,
} from "./searchBarStyle";
import { useMediaQuery } from "usehooks-ts";

import SearchIcon from "@/assets/icon/search.svg?react";
import BackBtn from "@/assets/icon/arrow_back.svg?react";

const SearchBar = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const [searchText, setSearchText] = useState(queryParams.get("search") || "");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterBox = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchText !== "") {
      setIsFilterOpen(false);
      navigate(`/event-list?search=${searchText}`);
    }
  };

  const focusOnHandler = () => {
    setIsFilterOpen(true);
    if (isMobile === true) {
      document.body.style.overflow = "hidden";
    }
  };

  const focusOutHandler = () => {
    setIsFilterOpen(false);
    if (isMobile === true) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <SearchBarWrap>
      <SearchForm $filter={isFilterOpen}>
        <div>
          <input
            type="text"
            placeholder="마이스 메이트에서 나의 맞춤 행사를 찾아보세요!"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            onFocus={focusOnHandler}
            onBlur={focusOutHandler}
            onKeyDown={onKeyDownHandler}
          />
          <button>
            <SearchIcon />
          </button>
        </div>
      </SearchForm>

      {isFilterOpen && (
        <FilterWrap ref={filterBox}>
          <button className="back_btn">
            <BackBtn />
          </button>
          <FilterContent>
            <SearchHistoryList />
            <SearchCategoryList />
          </FilterContent>
        </FilterWrap>
      )}
    </SearchBarWrap>
  );
};

export default SearchBar;
