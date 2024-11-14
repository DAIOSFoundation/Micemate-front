import { useCategoryQuery } from "@/api/etc/category.query";
import useQueryParams from "@/hook/useSearchParams";
import { SearchCategory } from "@components/searchBarStyle";
import { Link, useNavigate } from "react-router-dom";

interface SearchCategoryListProps {
  handleCloseFilter: () => void;
}

const SearchCategoryList = ({ handleCloseFilter }: SearchCategoryListProps) => {
  const navigate = useNavigate();
  const queryParams = useQueryParams({
    isReplace: true,
    isSetPageFirst: true,
  });
  const { data: categoryData } = useCategoryQuery();

  const onClickCategory = (categoryId: number) => {
    handleCloseFilter();
    if (window.location.pathname === "/event-list") {
      queryParams.set("category", categoryId.toString());
    } else {
      navigate(`/event-list?category=${categoryId}`);
    }
  };

  const onClickAll = () => {
    if (window.location.pathname === "/event-list") {
      queryParams.deleteQuery("category");
    } else {
      navigate("/event-list");
    }
  };

  return (
    <SearchCategory>
      <p className="title">카테고리</p>
      <ul className="category">
        <li onClick={onClickAll} style={{ cursor: "pointer" }}>
          전체
        </li>
        {categoryData?.map((category) => (
          <li
            key={category.id + category.name}
            onClick={() => onClickCategory(category.id)}
          >
            <Link to={`/event-list?category=${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </SearchCategory>
  );
};

export default SearchCategoryList;
