import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  total: number; // 총 이벤트 수
  page: number; // 현재 페이지
  setPage: Dispatch<SetStateAction<number>>; // 현재 페이지 set
  size?: number; // 보여질 페이지 버튼의 개수
};

const Pagination = ({ total, page, setPage, size = 20 }: PaginationProps) => {
  const totalPage = Math.ceil(total / size); // 전체 페이지 수
  const currentSet = Math.ceil(page / size); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * size + 1; // 현재 보여질 첫 번째 페이지
  const endPage = Math.min(startPage + size - 1, totalPage); // 현재 보여질 마지막 페이지 (totalPage 초과하지 않음)

  const updatePageInUrl = (newPage: number) => {
    setPage(newPage);
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

  return (
    <div className="pagination mt_80">
      <button
        onClick={handlePrevClick}
        disabled={startPage === 1}
        className="pagi_prev"
      ></button>

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={i}
          onClick={() => updatePageInUrl(startPage + i)}
          className={page === startPage + i ? "num active" : "num"}
        >
          {startPage + i}
        </button>
      ))}

      <button
        type="button"
        onClick={handleNextClick}
        disabled={endPage === totalPage}
        className="pagi_next"
      ></button>
    </div>
  );
};

export default Pagination;
