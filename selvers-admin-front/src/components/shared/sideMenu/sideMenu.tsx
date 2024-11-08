import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import defaultProfile from "@/assets/images/dummy/user_logo_dummy.png";
import { useApplyRegisterGeneralQuery } from "@/api/events/events.query";
import MemberMenu from "./memberMenu";
import EventMenu from "./eventMenu";
import BannerMenu from "./bannerMenu";
import EventApplyMenu from "./eventApplyMenu";
import { useParams } from "react-router-dom";

const SideMenu = () => {
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [pageState, setPageState] = useState("");
  const { id } = useParams();
  const location = useLocation();

  const { data: GeneralData } = useApplyRegisterGeneralQuery(
    id ? Number(id) : undefined
  );

  useEffect(() => {
    if (location.pathname.indexOf("/event/apply") >= 0) {
      setPageState("type02");
    } else {
      setPageState("type01");
    }
  }, [location.pathname]);

  // 프로필 이미지 변경
  useEffect(() => {
    setProfilePreview(
      `${import.meta.env.VITE_IMAGE_BASE_URL}/${
        GeneralData?.data?.company?.company_logo
      }`
    );
  }, [GeneralData?.data]);
  //   if (profileData) {
  //     const formData = new FormData();
  //     formData.append("logo", profileData);

  //     logoMutation.mutate(
  //       {
  //         token: authInfo?.token,
  //         user_id: authInfo?.user_id,
  //         formData,
  //       },
  //       {
  //         onSuccess: () => {
  //           console.log("성공");
  //         },
  //         onError: (error) => {
  //           console.log(error);
  //         },
  //       }
  //     );
  //   }
  // }, [profileData]);

  return (
    <div className="lnb_area">
      {pageState === "type01" && (
        <ul className="lnb01">
          <MemberMenu />
          <EventMenu />
          <BannerMenu />
        </ul>
      )}
      {pageState === "type02" && (
        <div className="lnb02_wrap">
          <div className="user_area">
            <label htmlFor="profile">
              <div className="img">
                <img
                  src={
                    GeneralData?.data?.company?.company_logo
                      ? profilePreview
                      : defaultProfile
                  }
                />
              </div>
            </label>
            <div className="user_name">
              <div className="name">
                {GeneralData?.data?.company?.company_name}
              </div>
              <div className="admini">
                {GeneralData?.data?.company?.company_position}
              </div>
            </div>
          </div>
          <EventApplyMenu GeneralData={GeneralData?.data} />
        </div>
      )}
    </div>
  );
};

export default SideMenu;
