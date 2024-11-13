import { useNavigate } from "react-router-dom";
import { SearchHistory } from "@components/searchBarStyle";
import { useGetSearchHistoryQuery } from "@/api/etc/search.query";

interface SearchHistoryListProps {
  handleCloseFilter: () => void;
}

const SearchHistoryList = ({ handleCloseFilter }: SearchHistoryListProps) => {
  const navigate = useNavigate();
  const { data: searchHistory } = useGetSearchHistoryQuery();

  const handleSearchHistoryClick = (keyword: string) => {
    navigate(`/event-list?search=${keyword}`);
    handleCloseFilter();
  };

  return (
    <SearchHistory>
      <p className="title">최근 검색어</p>
      <div className="btn_area">
        <button>검색 기록 끄기</button>
        <button>검색 기록 삭제</button>
      </div>
      <ul>
        {searchHistory?.data.items.map((item) => (
          <li
            key={item.id + item.name}
            onClick={() => handleSearchHistoryClick(item.name)}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </SearchHistory>
  );
};

export default SearchHistoryList;
