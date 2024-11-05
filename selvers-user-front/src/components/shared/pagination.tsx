import { PaginationWrap } from "./paginationStyle";
import PrevIcon from "@/assets/icon/page_prev.svg?react";
import NextIcon from "@/assets/icon/page_next.svg?react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type PaginationProps = {
  total: number; // 총 이벤트 수
  page: number; // 현재 페이지
  setPage: Dispatch<SetStateAction<number>>; // 현재 페이지 set
  size?: number; // 보여질 페이지 버튼의 개수
};

const Pagination = ({ total, page, setPage, size = 4 }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalPage = Math.ceil(total / size); // 전체 페이지 수
  const currentSet = Math.ceil(page / size); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * size + 1; // 현재 보여질 첫 번째 페이지
  const endPage = Math.min(startPage + size - 1, totalPage); // 현재 보여질 마지막 페이지 (totalPage 초과하지 않음)

  const updatePageInUrl = (newPage: number) => {
    setPage(newPage);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", newPage.toString());
    navigate(`?${searchParams.toString()}`);
  };

  // 이전 페이지
  const handlePrevClick = () => {
    if (startPage > 1) {
      updatePageInUrl(startPage - 1);
    }
  };

  // 다음 페이지
  const handleNextClick = () => {
    if (endPage < totalPage) {
      updatePageInUrl(endPage + 1);
    }
  };

  // 페이지 변경 시 URL에 반영
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");
    if (pageParam) {
      const newPage = parseInt(pageParam, 10);
      if (newPage !== page && newPage > 0 && newPage <= totalPage) {
        setPage(newPage);
      }
    }
  }, [location.search, setPage, page, totalPage]);

  return (
    <PaginationWrap className="pagination">
      {/* 이전 버튼 */}
      <button
        type="button"
        onClick={handlePrevClick}
        disabled={startPage === 1}
        className="icon"
      >
        <PrevIcon />
      </button>

      {/* 페이지 번호 버튼 */}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={i}
          onClick={() => updatePageInUrl(startPage + i)}
          className={page === startPage + i ? "on" : ""}
        >
          {startPage + i}
        </button>
      ))}

      {/* 다음 버튼 */}
      <button
        type="button"
        onClick={handleNextClick}
        disabled={endPage === totalPage}
        className="icon"
      >
        <NextIcon />
      </button>
    </PaginationWrap>
  );
};

export default Pagination;
