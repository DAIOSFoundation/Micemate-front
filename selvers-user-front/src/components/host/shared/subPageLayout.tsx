import { Outlet } from "react-router-dom";
import SideMenu from "@components/host/shared/sideMenu";
import { useMyInformationQuery } from "@/api/users/users.query";
import LoadingScreen from "@components/shared/LoadingScreen";

const SubPageLayout = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");

  const authInfo = {
    token: token,
    user_id: userId,
  };
  const {
    data: myInformation,
    isLoading: myInformationLoading,
    isError: myInformationError,
  } = useMyInformationQuery(authInfo);

  if (myInformationLoading) {
    return <LoadingScreen />;
  }

  if (myInformationError) {
    return <div>정보를 불러오지 못했습니다.</div>;
  }

  return (
    <div className="container">
      <SideMenu authInfo={authInfo} userInfo={myInformation?.data} />
      <Outlet context={{ authInfo, myInformation }} />
    </div>
  );
};

export default SubPageLayout;
