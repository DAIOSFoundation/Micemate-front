import BannerListItem from "./bannerListItem";
import { type BannerItemType } from "@/types/index";

interface BannerResultListProps {
  bannerList: BannerItemType[];
}

const BannerResultList = ({ bannerList }: BannerResultListProps) => {
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
                  <input id="t_chkAll" type="checkbox" />
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
              <BannerListItem key={banner.id} banner={banner} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BannerResultList;
