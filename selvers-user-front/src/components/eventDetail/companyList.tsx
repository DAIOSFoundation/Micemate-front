import { CompanyListWrap } from "./companyListStyle";
import { BoothListDataType } from "@/type";

const CompanyList = ({
  boothListData,
}: {
  boothListData: BoothListDataType;
}) => {
  return (
    <CompanyListWrap>
      <ul>
        {boothListData?.items &&
          boothListData?.items.map((data) => {
            return (
              <li key={data.id}>
                <span className="text">{data.name}</span>
              </li>
            );
          })}
        {boothListData?.items.length <= 0 && (
          <li>
            <span>참여기업 리스트가 없습니다.</span>
          </li>
        )}
      </ul>
    </CompanyListWrap>
  );
};

export default CompanyList;
