import { Link, useNavigate } from "react-router-dom";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import useQueryParams from "@/hook/useSearchParams";
import {
  useDeleteBannerMutation,
  useGetManageBannerList,
} from "@/api/banner/banner.query";
import BannerFilter from "@components/banner/bannerFilter";
import BannerResultList from "@components/banner/bannerResultList";
import Pagination from "@components/pagination";
import { BannerType } from "@/types";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/queryKeys";

const BannerPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const type = queryParams.get("type") || "0";
  const { data } = useGetManageBannerList(queryParams.getAll());
  const [selected, setSelected] = useState<number[]>([]);
  const { mutate: deleteBanner } = useDeleteBannerMutation();
  const handleDelete = () => {
    if (selected.length === 0) {
      alert("삭제할 배너를 선택해주세요.");
      return;
    }

    if (confirm("정말 삭제하시겠습니까?")) {
      deleteBanner(
        {
          ids: selected,
        },
        {
          onSuccess: () => {
            alert("배너 삭제가 완료되었습니다.");
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.BANNER.LIST],
            });
          },
        }
      );
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <div className="history_tit">
        <Link className="item" to="/banner/main">
          배너관리
        </Link>
        <Link className="item" to="/banner/main">
          {type === "0" ? "메인배너" : "띠배너"}
        </Link>
      </div>
      <SideMenu />

      <div className="cont_area">
        <div className="cont_panel">
          <BannerFilter />

          <div className="tit_wrap mt_30">
            <div>
              <h3 className="tit">
                <span>전체</span>
                <span className="col_gray">검색결과</span>
                <span className="fs_16">[총 {data?.data.total}개]</span>
              </h3>
            </div>
            <div>
              <button onClick={() => navigate(`/banner/add?type=${type}`)}>
                추가
              </button>
              <button className="ml_22" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>

          <BannerResultList
            selected={selected}
            setSelected={setSelected}
            bannerList={data?.data.items || []}
            type={Number(type) as BannerType}
          />
          <Pagination
            total={data?.data.total || 10}
            page={Number(queryParams.get("page")) || 1}
            setPage={(page: number) => queryParams.set("page", page.toString())}
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
