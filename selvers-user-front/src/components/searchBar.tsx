import { useCallback, useEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const queryParams = useQueryParams({
    isSetPageFirst: true,
  });
  const [searchText, setSearchText] = useState(queryParams.get("search") || "");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isComposing, setIsComposing] = useState(false);
  const filterBox = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const onSearch = useCallback(async () => {
    if (window.location.pathname === "/event-list") {
      queryParams.set("search", searchText);
    } else {
      navigate(`/event-list?search=${searchText}`);
    }
  }, [searchText, navigate, queryParams]);

  const onKeyDownHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();
      setIsFilterOpen(false);
      if (inputRef.current) {
        inputRef.current.blur();
      }
      await onSearch();
    }
  };

  const handleOpenFilter = useCallback(() => {
    setIsFilterOpen(true);
    if (isMobile === true) {
      document.body.style.overflow = "hidden";
    }
  }, [isMobile]);

  const handleCloseFilter = useCallback(() => {
    setIsFilterOpen(false);
    if (isMobile === true) {
      document.body.style.overflow = "auto";
    }
  }, [isMobile]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        filterBox.current &&
        !filterBox.current.contains(event.target as Node)
      ) {
        handleCloseFilter();
      }
    },
    [handleCloseFilter]
  );

  useEffect(() => {
    if (isFilterOpen) {
      document.addEventListener("pointerdown", handleClickOutside);
      return () => {
        document.removeEventListener("pointerdown", handleClickOutside);
      };
    }
  }, [isFilterOpen, handleCloseFilter, handleClickOutside]);

  return (
    <SearchBarWrap>
      <SearchForm $filter={isFilterOpen}>
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="마이스 메이트에서 나의 맞춤 행사를 찾아보세요!"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            onFocus={handleOpenFilter}
            onKeyDown={onKeyDownHandler}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
          <button onClick={onSearch}>
            <SearchIcon />
          </button>
        </div>
      </SearchForm>

      {isFilterOpen && (
        <FilterWrap ref={filterBox}>
          <button className="back_btn" onClick={handleCloseFilter}>
            <BackBtn />
          </button>
          <FilterContent>
            <SearchHistoryList handleCloseFilter={handleCloseFilter} />
            <SearchCategoryList handleCloseFilter={handleCloseFilter} />
          </FilterContent>
        </FilterWrap>
      )}
    </SearchBarWrap>
  );
};

export default SearchBar;
