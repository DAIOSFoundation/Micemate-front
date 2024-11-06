import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import defaultProfile from "@/assets/images/dummy/user_logo_dummy.png";
import {
  useCompanyLogoMutation,
  useMyInformationQuery,
} from "@/api/users/users.query";
import LoadingScreen from "@components/shared/LoadingScreen";
import MemberMenu from "./memberMenu";
import EventMenu from "./eventMenu";
// import BannerMenu from "./bannerMenu";
import EventApplyMenu from "./eventApplyMenu";

const SideMenu = () => {
  const [profileData, setProfileDate] = useState<File | null>();
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [pageState, setPageState] = useState("");

  const location = useLocation();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const logoMutation = useCompanyLogoMutation();

  const authInfo = {
    token: token,
    user_id: userId,
  };
  const {
    data: myInformation,
    isLoading: myInformationLoading,
    isError: myInformationError,
  } = useMyInformationQuery(authInfo);

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
      `https://api.micemate.io/storage/${myInformation?.data?.company?.logo}`
    );
  }, [myInformation?.data]);

  useEffect(() => {
    if (profileData) {
      const formData = new FormData();
      formData.append("logo", profileData);

      logoMutation.mutate(
        {
          token: authInfo?.token,
          user_id: authInfo?.user_id,
          formData,
        },
        {
          onSuccess: () => {
            console.log("성공");
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    }
  }, [profileData]);

  const LogoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const imgFile = e.target.files?.[0];
    if (imgFile) {
      const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
      if (imgFile.size > MAX_FILE_SIZE) {
        // alert("파일 크기는 1MB를 초과할 수 없습니다.");
        return;
      }

      // 파일 형식 검사 (jpg, png)
      const validFileTypes = ["image/jpeg", "image/png"];
      if (!validFileTypes.includes(imgFile.type)) {
        // alert("JPG 또는 PNG 파일만 선택할 수 있습니다.");
        return;
      }

      const photoURL = URL.createObjectURL(imgFile); // 이미지 미리보기 생성
      setProfileDate(imgFile); // 파일 상태 저장
      setProfilePreview(photoURL); // 미리보기 업데이트
    }
  };

  return (
    <div className="lnb_area">
      {pageState === "type01" && (
        <ul className="lnb01">
          <MemberMenu />
          <EventMenu />
          {/* <BannerMenu /> */}
        </ul>
      )}
      {pageState === "type02" && (
        <div className="lnb02_wrap">
          {myInformationLoading || myInformationError ? (
            <>
              {myInformationLoading && <LoadingScreen />}
              {myInformationError && <div>정보를 불러오지 못했습니다.</div>}
            </>
          ) : (
            <div className="user_area">
              <input
                id="profile"
                type="file"
                className="hide"
                onChange={(e) => {
                  LogoChangeHandler(e);
                }}
              />
              <label htmlFor="profile">
                <div className="img">
                  <img src={profilePreview || defaultProfile} />
                </div>
              </label>
              <div className="user_name">
                <div className="name">
                  {myInformation?.data?.company?.company_name}
                </div>
                <div className="admini">마스터</div>
              </div>
            </div>
          )}
          <EventApplyMenu />
        </div>
      )}
    </div>
  );
};

export default SideMenu;
