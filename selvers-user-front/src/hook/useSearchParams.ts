import { useSearchParams, useNavigate } from "react-router-dom";

interface UseQueryParamsOptions {
  isDirectPush?: boolean;
  isReplace?: boolean;
  preserveScroll?: boolean;
  isSetPageFirst?: boolean;
}

const useQueryParams = ({
  isDirectPush = false,
  isReplace = false,
  preserveScroll = true,
  isSetPageFirst = false,
}: UseQueryParamsOptions = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = new URLSearchParams(searchParams);
  const navigate = useNavigate();

  const updateQueryAndNavigate = () => {
    if (isSetPageFirst) {
      query.delete("page");
    }

    const queryString = `?${query.toString()}`;
    if (isDirectPush) {
      navigate(queryString, {
        replace: isReplace,
        preventScrollReset: !preserveScroll,
      });
    } else {
      setSearchParams(queryString, {
        replace: isReplace,
        preventScrollReset: !preserveScroll,
      });
    }

    return query.toString();
  };

  const get = (key: string) => {
    return query.get(key);
  };

  const getAll = () => {
    return Object.fromEntries(query.entries());
  };

  const set = (key: string, value?: string) => {
    if (!value) {
      query.delete(key);
      return updateQueryAndNavigate();
    }
    query.set(key, value);
    return updateQueryAndNavigate();
  };

  const setAll = (params: Record<string, string | string[]>) => {
    Object.entries(params).forEach(([key, value]) => {
      if (!value) {
        query.delete(key);
      } else if (
        value !== "" &&
        !(Array.isArray(value) && value.length === 0)
      ) {
        query.set(key, value.toString());
      }
    });
    return updateQueryAndNavigate();
  };

  const deleteQuery = (key: string) => {
    query.delete(key);
    return updateQueryAndNavigate();
  };

  return { get, getAll, set, setAll, updateQueryAndNavigate, deleteQuery };
};

export default useQueryParams;
