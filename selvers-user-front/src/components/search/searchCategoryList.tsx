import { useCategoryQuery } from "@/api/etc/category.query";
import { SearchCategory } from "@components/searchBarStyle";
import { Link, useNavigate } from "react-router-dom";

interface SearchCategoryListProps {
  handleCloseFilter: () => void;
}

const SearchCategoryList = ({ handleCloseFilter }: SearchCategoryListProps) => {
  const navigate = useNavigate();
  const { data: categoryData } = useCategoryQuery();

  const onClickCategory = (categoryId: number) => {
    handleCloseFilter();
    navigate(`/event-list?category=${categoryId}`);
  };

  return (
    <SearchCategory>
      <p className="title">카테고리</p>
      <ul className="category">
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
