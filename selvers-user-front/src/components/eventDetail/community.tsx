import { CommunityWrap, TabMenu, TabContent } from "./communityStyle";
import { useState } from "react";
import ReviewList from "./reviewList";
import CompanyList from "./companyList";

const Community = ({
  reviewData,
  boothListData,
  page,
  setPage,
  setSortType,
}) => {
  const [activeTab, setActiveTab] = useState("review");

  return (
    <CommunityWrap>
      <TabMenu>
        <button
          onClick={() => setActiveTab("review")}
          className={activeTab === "review" ? "active" : ""}
        >
          리뷰
        </button>
        <button
          onClick={() => setActiveTab("company")}
          className={activeTab === "company" ? "active" : ""}
        >
          참여 기업
        </button>
      </TabMenu>

      <TabContent>
        {activeTab === "review" && (
          <ReviewList
            reviewData={reviewData}
            page={page}
            setPage={setPage}
            setSortType={setSortType}
          />
        )}
        {activeTab === "company" && (
          <CompanyList boothListData={boothListData.data} />
        )}
      </TabContent>
    </CommunityWrap>
  );
};

export default Community;
