import { useNavigate } from "react-router-dom";
import { SearchHistory } from "@components/searchBarStyle";
import {
  useDeleteSearchHistoryMutation,
  useGetSearchHistoryQuery,
  usePutToggleSearchHistoryMutation,
} from "@/api/etc/search.query";
import useQueryParams from "@/hook/useSearchParams";

interface SearchHistoryListProps {
  handleCloseFilter: () => void;
}

const SearchHistoryList = ({ handleCloseFilter }: SearchHistoryListProps) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");
  const queryParams = useQueryParams();
  const { data: searchHistory } = useGetSearchHistoryQuery();
  const putToggleSearchHistoryMutation = usePutToggleSearchHistoryMutation();
  const deleteSearchHistoryMutation = useDeleteSearchHistoryMutation();

  const handleSearchHistoryClick = (keyword: string) => {
    if (window.location.pathname === "/event-list") {
      queryParams.set("search", keyword);
    } else {
      navigate(`/event-list?search=${keyword}`);
    }
    handleCloseFilter();
  };

  const handleToggleSearchHistory = () => {
    putToggleSearchHistoryMutation.mutate();
  };

  const handleDeleteSearchHistory = () => {
    deleteSearchHistoryMutation.mutate();
  };

  const renderHistoryList = () => {
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

    if (searchHistory?.data?.items?.length === 0)
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
          최근 검색어가 없습니다.
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
      {userId && (
        <div className="btn_area">
          <button
            onClick={handleToggleSearchHistory}
            disabled={putToggleSearchHistoryMutation.isPending}
          >
            {searchHistory?.data.history ? "검색 기록 끄기" : "검색 기록 켜기"}
          </button>
          <button
            onClick={handleDeleteSearchHistory}
            disabled={deleteSearchHistoryMutation.isPending}
          >
            검색 기록 삭제
          </button>
        </div>
      )}
      {renderHistoryList()}
    </SearchHistory>
  );
};

export default SearchHistoryList;
