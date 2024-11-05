import { useEventPartyQuery } from "@/api/events/events.query";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInformationRequest } from "@/type";
import EventPartyTable from "@components/host/manage/eventPartyTable";
import Pagination from "@components/host/shared/pagination";
import PartyFilter from "@components/host/dashboard/partyFilter";
import { useQueryClient } from "@tanstack/react-query";
import { PartyFilterType } from "@/type";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

const EventPartyList = () => {
  const [filterData, setFilterData] = useState<Partial<PartyFilterType>>({});
  const [filterQueryString, setFilterQueryString] = useState<string>();
  const [page, setPage] = useState(1);
  const OutletContext = useOutletContext<UserInfoConText>();
  const navigate = useNavigate();
  const authInfo = OutletContext.authInfo;
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { data: eventParty } = useEventPartyQuery(id, authInfo.token);

  useEffect(() => {
    const filter = {
      page: page ?? 1,
      start: filterData.start,
      end: filterData.end,
      type: filterData.type,
      search: filterData.search,
      order: filterData.order ?? "asc",
    };

    const filterParams: Record<string, string> = Object.fromEntries(
      Object.entries(filter)
        .filter(([_, value]) => {
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
      queryClient.invalidateQueries({ queryKey: ["EventPartyQuery"] });
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

  return (
    <div className="cont_area">
      <div className="cont_panel">
        <div className="tit_wrap">
          <h3 className="fs_40">참가자 관리</h3>
          {/* <a href="#none" download className="download_btn"></a> */}
        </div>
        <PartyFilter setFilterData={setFilterData} resetFilter={resetFilter} />

        <div className="tit_wrap mt_30">
          <div>
            <h3 className="tit">
              <span>{filterData.search ? filterData.search : "전체"}</span>
              <span className="col_gray">검색결과</span>
              <span className="fs_16">{`[총 회원수 ${
                eventParty?.data?.total > 0 ? eventParty?.data?.total : 0
              }명]`}</span>
            </h3>
            <button onClick={orderClick} className="sort_btn">
              정렬
            </button>
          </div>
        </div>
        <EventPartyTable partyList={eventParty?.data} />
        {eventParty?.data?.total > 20 && (
          <Pagination
            total={eventParty?.data?.total}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default EventPartyList;
