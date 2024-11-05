import {
  useEventManageQuery,
  useEventManageDeleteMutation,
} from "@/api/events/events.query";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserInformationRequest } from "@/type";
import Panel from "@components/host/dashboard/panel";
import SearchFilter from "@components/host/dashboard/searchFilter";
import ApplyListTable from "@components/host/dashboard/applyListTable";
import Pagination from "@components/host/shared/pagination";
import { useConfirm } from "@/hook/useConfirm";
import { useAlret } from "@/hook/useAlret";
import { useRecoilValue } from "recoil";
import { useQueryClient } from "@tanstack/react-query";

import { FilterType } from "@/type";
import { confirmState } from "@/store/modalState";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

const DashboardPage = () => {
  const [filterData, setFilterData] = useState<Partial<FilterType>>({});
  const [filterQueryString, setFilterQueryString] = useState<string>();
  const [checkedList, setCheckedList] = useState([]);
  const [page, setPage] = useState(1);
  const OutletContext = useOutletContext<UserInfoConText>();
  const navigate = useNavigate();
  const authInfo = OutletContext.authInfo;
  const { data: eventManageData } = useEventManageQuery(authInfo.token);
  const useEventManageDelete = useEventManageDeleteMutation();
  const { openConfirm } = useConfirm();
  const { openAlret } = useAlret();
  const confirmValue = useRecoilValue(confirmState);
  const [confirmAgree, setConfirmAgree] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const filter = {
      page: page ?? 1,
      dateType: filterData.sortType,
      start: filterData.startDate,
      end: filterData.endDate,
      state: filterData.progressType,
      search: filterData.searchKeyword,
      order: filterData.order ?? "asc",
    };

    const filterParams: Record<string, string> = Object.fromEntries(
      Object.entries(filter)
        .filter(([, value]) => {
          if (typeof value === "string" || Array.isArray(value)) {
            return value !== "" && value.length > 0;
          }
          return value !== null && value !== undefined;
        })
        .map(([key, value]) => [key, String(value)])
    ) as Record<string, string>;

    const queryString = new URLSearchParams(filterParams).toString();
    setFilterQueryString(queryString);
  }, [filterData, page]);

  useEffect(() => {
    if (filterQueryString) {
      navigate(`?${filterQueryString}`);
      queryClient.invalidateQueries({ queryKey: ["eventManage"] });
    }
  }, [filterQueryString]);

  const resetFilter = () => {
    setFilterData({});
    setPage(1);
    navigate("?");
  };

  const orderClick = () => {
    setFilterData({
      ...filterData,
      order: filterData.order === "desc" ? "asc" : "desc",
    });
  };

  // 행사 삭제
  const applyDeleteHandler = () => {
    const cancelConfirmData = {
      text: `${checkedList.length}건\n삭제하시겠습니까?`,
      okBtn: "삭제하기",
      logout: false,
    };
    openConfirm(cancelConfirmData);
  };

  useEffect(() => {
    setConfirmAgree(confirmValue.confirm);
  }, [confirmValue.confirm]);

  useEffect(() => {
    if (confirmAgree === true && checkedList.length > 0) {
      useEventManageDelete.mutate(
        {
          token: authInfo.token,
          event_id: checkedList,
        },
        {
          onSuccess: () => {
            const cancelSuccessData = {
              text: "삭제가 완료되었습니다.",
            };
            openAlret(cancelSuccessData);
            queryClient.invalidateQueries({ queryKey: ["eventManage"] });
          },
        }
      );
    }
  }, [confirmAgree]);

  return (
    <div className="cont_area">
      <div className="history_tit">
        <p className="item">나의 행사 리스트</p>
      </div>
      <div className="cont_panel">
        <Panel boardData={eventManageData?.data?.summary} />
        <SearchFilter setFilterData={setFilterData} resetFilter={resetFilter} />
        <div className="tit_wrap mt_12">
          <div>
            <h3 className="tit">
              <span>
                {filterData.searchKeyword ? filterData.searchKeyword : "전체"}
              </span>
              <span className="col_gray">검색결과</span>
              <span className="fs_16">{`[총 행사 수 ${
                eventManageData?.data?.total > 0
                  ? eventManageData?.data?.total
                  : 0
              } 건]`}</span>
            </h3>
            <button className="sort_btn" onClick={orderClick}>
              정렬
            </button>
          </div>
          <div>
            <button
              onClick={applyDeleteHandler}
              disabled={checkedList.length === 0}
              className="mr_22"
            >
              삭제
            </button>
          </div>
        </div>
        {eventManageData?.data?.items?.length > 0 ? (
          <ApplyListTable
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
  );
};

export default DashboardPage;
