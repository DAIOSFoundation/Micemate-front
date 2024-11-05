import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import SearchFilter from "@components/page/member/searchFilter";
import ListTable from "@components/page/member/corporateListTable";
import Pagination from "@components/pagination";
import { useConfirm } from "@/hook/useConfirm";
import { useAlret } from "@/hook/useAlret";
import { confirmState } from "@/store/modalState";
import { FilterType01 } from "@/type";
import {
  useCoporateListQuery,
  useDeleteUserMutation,
} from "@/api/users/users.query";

const Page = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { openConfirm } = useConfirm();
  const { openAlret } = useAlret();
  const confirmValue = useRecoilValue(confirmState);

  const [filterData, setFilterData] = useState<Partial<FilterType01>>({});
  const [filterQueryString, setFilterQueryString] = useState<string>();
  const [checkedList, setCheckedList] = useState([]);
  const [page, setPage] = useState(1);

  const { data: userListData } = useCoporateListQuery();
  const useDeleteUser = useDeleteUserMutation();

  const resetFilter = () => {
    setFilterData({});
    setPage(1);
    navigate("?");
  };

  const orderClick = () => {
    setFilterData({
      ...filterData,
      order: filterData.order === "asc" ? "desc" : "asc",
    });
  };

  // 회원 탈퇴
  const onSecession = () => {
    if (checkedList.length <= 0)
      return openAlret({
        text: "목록을 선택해주세요.",
      });

    openConfirm({
      text: `선택 [${checkedList.length}건]을 [탈퇴]\n처리 하시겠습니까?`,
      okBtn: "확인",
      type: "탈퇴",
    });
  };

  // 회원 삭제
  const onDelete = () => {
    if (checkedList.length <= 0)
      return openAlret({
        text: "목록을 선택해주세요.",
      });

    openConfirm({
      text: `선택 [${checkedList.length}건]을 [삭제]\n처리 하시겠습니까?`,
      okBtn: "확인",
      type: "삭제",
    });
  };

  useEffect(() => {
    if (confirmValue.confirm === true && checkedList.length > 0) {
      useDeleteUser.mutate(
        {
          delete: confirmValue.type === "삭제" ? true : false,
          ids: checkedList,
        },
        {
          onSuccess: () => {
            openAlret({
              text: `${confirmValue.type}가 완료되었습니다.`,
            });
            setCheckedList([]);
            queryClient.invalidateQueries({ queryKey: ["coporateList"] });
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
      start: filterData.start ?? undefined,
      end: filterData.end ?? undefined,
      search: filterData.search ?? undefined,
      order: filterData.order ?? "desc",
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
        <Link className="item" to="/member/general">
          회원관리
        </Link>
        <Link className="item" to="/member/general">
          기업회원 리스트
        </Link>
      </div>
      <SideMenu />

      <div className="cont_area">
        <div className="cont_panel">
          <SearchFilter
            setFilterData={setFilterData}
            resetFilter={resetFilter}
            resetDate={"7days"}
            userType={[
              { value: "회원유형", type: "none" },
              { value: "승인대기", type: 1 },
              { value: "승인기업", type: 2 },
              { value: "탈퇴기업", type: 3 },
            ]}
          />

          <div className="tit_wrap mt_30">
            <div>
              <h3 className="tit">
                <span>전체</span>
                <span className="col_gray">검색결과</span>
                <span className="fs_16">
                  [총 회원수
                  {userListData?.data?.total
                    ? Number(userListData?.data?.total)?.toLocaleString()
                    : 0}
                  명]
                </span>
              </h3>
              <button type="button" className="sort_btn" onClick={orderClick}>
                정렬
              </button>
            </div>
            <div>
              <button type="button" onClick={onSecession}>
                탈퇴
              </button>
              <button type="button" className="ml_22" onClick={onDelete}>
                삭제
              </button>
            </div>
          </div>

          {userListData?.data?.items?.length > 0 ? (
            <ListTable
              userList={userListData?.data?.items}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
          ) : (
            <div className="table_wrap mt_22">해당하는 회원이 없습니다</div>
          )}

          {userListData?.data?.total > 20 && (
            <Pagination
              total={userListData?.data?.total}
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
