import { ChangeEvent, useEffect, useState } from "react";
import { useCompanyLogoMutation } from "@/api/users/users.query";
import defaultProfile from "@/assets/images/dummy/user_logo_dummy.png";
import DashBoardSideMenu from "./dashBoardMenu";
import MyPageMenu from "./myPageMenu";
import ApplyNewMenu from "./applyNewMenu";
import ApplyRegisterMenu from "./applyRegisterMenu";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hook/useToast";

const SideMenu = ({ authInfo, userInfo }) => {
  const [profileData, setProfileDate] = useState<File | null>();
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [pageState, setPageState] = useState("");
  const logoMutation = useCompanyLogoMutation();
  const location = useLocation();
  const { openToast } = useToast();

  useEffect(() => {
    if (location.pathname.indexOf("/host/my/dashboard") >= 0) {
      setPageState("dashboard");
    } else if (location.pathname.indexOf("/host/my/mypage") >= 0) {
      setPageState("mypage");
    } else if (location.pathname.indexOf("/host/my/apply-register/new") >= 0) {
      setPageState("new");
    } else {
      setPageState("register");
    }
  }, [location.pathname]);

  // 프로필 이미지 변경
  useEffect(() => {
    setProfilePreview(
      `${import.meta.env.VITE_IMAGE_BASE_URL}/${userInfo?.company?.logo}`
    );
  }, [userInfo, profileData]);

  useEffect(() => {
    if (profileData) {
      const formData = new FormData();
      formData.append("logo", profileData);

      logoMutation.mutate(
        {
          token: authInfo.token,
          user_id: authInfo.user_id,
          formData,
        },
        {
          onSuccess: () => {
            openToast("프로필 이미지를 변경했습니다.");
            setProfilePreview(URL.createObjectURL(profileData));
          },
          onError: () => {
            openToast("프로필 이미지 변경 실패, 다시 시도해 주세요.");
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
      <div className="lnb02_wrap">
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
            <div className="img" style={{ cursor: "pointer" }}>
              <img
                src={userInfo.company.logo ? profilePreview : defaultProfile}
              />
            </div>
          </label>
          <div className="user_name">
            <div className="name">{userInfo?.company?.company_name}</div>
            <div className="admini">{userInfo?.company?.position}</div>
          </div>
        </div>
        {pageState === "dashboard" && <DashBoardSideMenu />}
        {pageState === "mypage" && <MyPageMenu />}
        {pageState === "new" && <ApplyNewMenu />}
        {pageState === "register" && <ApplyRegisterMenu />}
      </div>
    </div>
  );
};

export default SideMenu;
