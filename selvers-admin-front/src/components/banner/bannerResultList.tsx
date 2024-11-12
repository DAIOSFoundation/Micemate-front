import BannerListItem from "./bannerListItem";
import { BannerType, type BannerItemType } from "@/types/index";

interface BannerResultListProps {
  bannerList: BannerItemType[];
  type: BannerType;
  selected: number[];
  setSelected: (selected: number[]) => void;
}

const BannerResultList = ({
  bannerList,
  type,
  selected,
  setSelected,
}: BannerResultListProps) => {
  const handleSelectAll = () => {
    if (selected.length === bannerList.length) {
      setSelected([]);
    } else {
      setSelected(bannerList.map((banner) => banner.id));
    }
  };

  if (bannerList.length === 0) {
    return <div>배너가 없습니다.</div>;
  }

  return (
    <>
      <div className="table_wrap mt_22">
        <table className="type1">
          <colgroup>
            <col width="16px" />
            <col width="120px" />
            <col width="200px" />
            <col width="*" />
            <col width="150px" />
            <col width="150px" />
            <col width="250px" />
            <col width="120px" />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div className="checkbox">
                  <input
                    id="t_chkAll"
                    type="checkbox"
                    onClick={handleSelectAll}
                  />
                  <label htmlFor="t_chkAll"></label>
                </div>
              </th>
              <th>NO</th>
              <th className="txt_left">배너명</th>
              <th></th>
              <th>이미지</th>
              <th>등록일</th>
              <th>게시일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {bannerList.map((banner) => (
              <BannerListItem
                key={banner.id}
                type={type}
                banner={banner}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BannerResultList;
