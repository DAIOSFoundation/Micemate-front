import { SearchCategory } from "@components/searchBarStyle";
import { Link } from "react-router-dom";

const SearchCategoryList = () => {
  return (
    <SearchCategory>
      <p className="title">카테고리</p>
      <ul className="category">
        <li>
          <Link to={""}>전체</Link>
        </li>
        <li>
          <Link to={""}>농축산/식음료</Link>
        </li>
        <li>
          <Link to={""}>뷰티/화장품</Link>
        </li>
        <li>
          <Link to={""}>에너지/환경</Link>
        </li>
        <li>
          <Link to={""}>금융/부동산</Link>
        </li>
        <li>
          <Link to={""}>섬유/의류</Link>
        </li>
        <li>
          <Link to={""}>교육</Link>
        </li>
        <li>
          <Link to={""}>금속/기계</Link>
        </li>
        <li>
          <Link to={""}>임신/출산/육아</Link>
        </li>
        <li>
          <Link to={""}>보건/의료</Link>
        </li>
        <li>
          <Link to={""}>웨딩</Link>
        </li>
        <li>
          <Link to={""}>건설/건축</Link>
        </li>
        <li>
          <Link to={""}>문화/예술</Link>
        </li>
        <li>
          <Link to={""}>가정용품</Link>
        </li>
        <li>
          <Link to={""}>레저/관광</Link>
        </li>
      </ul>
    </SearchCategory>
  );
};

export default SearchCategoryList;
