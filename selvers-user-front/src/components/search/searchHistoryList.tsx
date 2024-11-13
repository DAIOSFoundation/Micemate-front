import { Link } from "react-router-dom";
import { SearchHistory } from "@components/searchBarStyle";

const SearchHistoryList = () => {
  return (
    <SearchHistory>
      <p className="title">최근 검색어</p>
      <div className="btn_area">
        <button>검색 기록 끄기</button>
        <button>검색 기록 삭제</button>
      </div>
      <ul>
        <li>
          <Link to={""}>마케팅</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온온온온온온온라인</Link>
        </li>
        <li>
          <Link to={""}>최근 검색어</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>농축산농축산농축산</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>환경</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>test</Link>
        </li>
        <li>
          <Link to={""}>온라인</Link>
        </li>
        <li>
          <Link to={""}>교육</Link>
        </li>
      </ul>
    </SearchHistory>
  );
};

export default SearchHistoryList;
