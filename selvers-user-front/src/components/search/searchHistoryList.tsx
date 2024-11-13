import { useNavigate } from "react-router-dom";
import { SearchHistory } from "@components/searchBarStyle";
import { useGetSearchHistoryQuery } from "@/api/etc/search.query";

interface SearchHistoryListProps {
  handleCloseFilter: () => void;
}

const SearchHistoryList = ({ handleCloseFilter }: SearchHistoryListProps) => {
  const navigate = useNavigate();
  const { data: searchHistory } = useGetSearchHistoryQuery();
  const userId = localStorage.getItem("user_id");

  const handleSearchHistoryClick = (keyword: string) => {
    navigate(`/event-list?search=${keyword}`);
    handleCloseFilter();
  };

  const renderHistoryList = () => {
    console.log(!userId);
    if (!userId)
      return (
        <div
          style={{
            textAlign: "center",
            color: "white",
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          로그인 후 이용해주세요.
        </div>
      );
    return (
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
    );
  };
  return (
    <SearchHistory>
      <p className="title">최근 검색어</p>
      <div className="btn_area">
        <button>검색 기록 끄기</button>
        <button>검색 기록 삭제</button>
      </div>
      {renderHistoryList()}
    </SearchHistory>
  );
};

export default SearchHistoryList;
