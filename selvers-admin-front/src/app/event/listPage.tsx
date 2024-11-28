import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useResetRecoilState } from "recoil";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import Panel from "@components/page/event/pannel";
import SearchFilter from "@components/page/event/searchFilter";
import { FilterType02 } from "@/type";
import {
  useEventManageDeleteMutation,
  useEventManageQuery,
} from "@/api/events/events.query";
import Pagination from "@components/pagination";
import ListTable from "@components/page/event/listTable";
import { useAlret } from "@/hook/useAlret";
import { useConfirm } from "@/hook/useConfirm";
import { confirmState } from "@/store/modalState";
import useQueryParams from "@/hook/useSearchParams";

const Page = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { openConfirm } = useConfirm();
  const { openAlret } = useAlret();
  const confirmValue = useRecoilValue(confirmState);
  const resetConfirm = useResetRecoilState(confirmState);
  const [filterData, setFilterData] = useState<Partial<FilterType02>>({});
  const [filterQueryString, setFilterQueryString] = useState<string>();
  const [checkedList, setCheckedList] = useState([]);
  const [page, setPage] = useState(1);
  const queryParams = useQueryParams();
  const { data: eventManageData } = useEventManageQuery();
  const useEventManageDelete = useEventManageDeleteMutation();

  const resetFilter = () => {
    setFilterData({});
    setPage(1);
    navigate("?");
  };

  // 행사 삭제
  const onDelete = () => {
    if (checkedList.length <= 0)
      return openAlret({
        text: "목록을 선택해주세요.",
      });

    openConfirm({
      text: `선택 [${checkedList.length}건]을 [삭제]\n처리 하시겠습니까?`,
      okBtn: "확인",
    });
  };

  useEffect(() => {
    if (confirmValue.confirm === true && checkedList.length > 0) {
      useEventManageDelete.mutate(
        {
          ids: checkedList,
        },
        {
          onSuccess: () => {
            openAlret({
              text: "삭제가 완료되었습니다.",
            });
            resetConfirm();
            setCheckedList([]);
            queryClient.invalidateQueries({ queryKey: ["eventManage"] });
          },
        }
      );
    }
  }, [confirmValue.confirm]);

  useEffect(() => {
    const filter = {
      page: page ?? 1,
      type:
        filterData.type && filterData.type !== "none"
          ? filterData.type
          : undefined,
      dateType: filterData.dateType ?? 1,
      start: filterData.start ?? undefined,
      end: filterData.end ?? undefined,
      state: filterData.state !== "none" ? filterData.state : undefined,
      search: filterData.search ?? undefined,
    };

    const filterParams: Record<string, string> = Object.fromEntries(
      Object.entries(filter)
        .filter(([_, value]) => {
          // value가 문자열 또는 배열인지 확인
          if (typeof value === "string" || Array.isArray(value)) {
            return value !== "" && value.length > 0;
          }
          // 숫자일 경우에도 필터링 조건에 맞게 처리
          return value !== null && value !== undefined;
        })
        .map(([key, value]) => [key, String(value)]) // 모든 값을 문자열로 변환
    ) as Record<string, string>;

    const queryString = new URLSearchParams(filterParams).toString();
    setFilterQueryString(queryString);
  }, [filterData, page]);

  useEffect(() => {
    if (filterQueryString) {
      navigate(`?${filterQueryString}`);
      queryClient.invalidateQueries({ queryKey: ["userList"] });
    }
  }, [filterQueryString]);

  return (
    <div className="container">
      <div className="history_tit">
        <Link className="item" to={`/event?${filterQueryString}`}>
          행사관리
        </Link>
        <Link className="item" to={`/event?${filterQueryString}`}>
          행사 리스트
        </Link>
      </div>
      <SideMenu />

      <div className="cont_area">
        <div className="cont_panel">
          <Panel boardData={eventManageData?.data?.summary} />
          <SearchFilter
            setFilterData={setFilterData}
            resetFilter={resetFilter}
            resetDate={"all"}
          />

          <div className="tit_wrap mt_30">
            <h3 className="fs_18">
              {queryParams.get("search")
                ? `${queryParams.get("search")}`
                : "전체"}{" "}
              검색결과
            </h3>
            <button type="button" className="pr_30" onClick={onDelete}>
              삭제
            </button>
          </div>

          {eventManageData?.data?.items?.length > 0 ? (
            <ListTable
              eventList={eventManageData?.data?.items}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
          ) : (
            <div className="table_wrap mt_22">해당하는 행사가 없습니다</div>
          )}

          {eventManageData?.data?.total > 20 && (
            <Pagination
              total={eventManageData?.data?.total}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
