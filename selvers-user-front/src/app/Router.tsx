import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { RouterProvider, createHashRouter } from "react-router-dom";

import Layout from "@components/shared/layout";
import MyPageLayout from "@components/shared/myPageLayout";
import Main from "@/app/page";
import JoinPage from "@/app/auth/join/joinPage";
import JoinFormPage from "@/app/auth/join/form/joinFormPage";
import LoginPage from "@/app/auth/login/loginPage";
import PasswordFindPage from "@/app/auth/passwordFindPage";
import ApplyListPage from "@/app/mypage/applyListPage";
import CancelListPage from "@/app/mypage/cancelListPage";
import WishListPage from "@/app/mypage/wishListPage";
import PastListPage from "@/app/mypage/pastListPage";
import UserModifyPage from "@/app/mypage/userModifyPage";
import EventListPage from "@/app/eventList/eventListPage";
import EventDetailPage from "@/app/eventDetail/eventDetailPage";
import ApplyPage from "@/app/apply/applyPage";
import ApplyEditPage from "@/app/apply/applyEditPage";
import FinishApplyPage from "@/app/apply/finishApplyPage";
import BoothSelectPage from "@/app/mypage/boothSelectPage";
import BoothCheckPage from "@/app/mypage/boothCheckPage";
import WithdrawPage from "@/app/mypage/withdrawPage";
import WithdrawFinishPage from "@/app/mypage/withdrawFinishPage";
import EditReviewPage from "@/app/review/editReviewPage";
import GenderBirthInformation from "@/app/agree/genderBirthInformation";
import PersonalInformation from "@/app/agree/personalInformation";
import PrivacyPolicy from "@/app/agree/privacyPolicy";
import OnwardTransfer from "@/app/agree/onwardTransfer";
import MarketingInformation from "@/app/agree/marketingInformation";
import TermsService from "@/app/agree/termsService";
//주최사
import HostMainPage from "@/app/host/page";
import HostLayout from "@/components/host/shared/layout";
import HostSideMenuLayout from "@/components/host/shared/subPageLayout";
import CorporatePage from "@/app/host/corporate/corporatePage";
import CorparateFinshPage from "@/app/host/corporate/finish/finishPage";
import MyPage from "@/app/host/mypage/myPage";
import DashboardPage from "@/app/host/dashboard/dashboardPage";
import ApplyRegisterNew from "@/app/host/apply-register/newApplyPage";
import EditStateInfo from "@/app/host/apply-register/editStateInfo";
import EditApplyGeneral from "@/app/host/apply-register/editApplyGeneral";
import EditApplyDetail from "@/app/host/apply-register/editApplyDetail";
import EditApplyInformation from "@/app/host/apply-register/editApplyInformation";
import EditApplySurvey from "@/app/host/apply-register/editApplySurvey";
import EditApplyFaq from "@/app/host/apply-register/editApplyFaq";
import EventPartyList from "@/app/host/event-manage/eventPartyList";
import EventPartyCompanyList from "@/app/host/event-manage/eventPartyCompanyList";
import EditApplyfinish from "@/app/host/apply-register/editApplyfinish";
import ApplyPreviewPage from "@/app/host/applyPreview";

import LinkPage from "./link";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/join",
          element: <JoinPage />,
        },
        {
          path: "/join/form",
          element: <JoinFormPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/login/password-find",
          element: <PasswordFindPage />,
        },
        {
          path: "mypage",
          element: <MyPageLayout />,
          children: [
            {
              path: "apply-list",
              element: <ApplyListPage />,
            },
            {
              path: "apply-list/booth-select/:id",
              element: <BoothSelectPage />,
            },
            { path: "apply-list/booth-check/:id", element: <BoothCheckPage /> },
            { path: "cancel-list", element: <CancelListPage /> },
            { path: "wish-list", element: <WishListPage /> },
            { path: "past-list", element: <PastListPage /> },
            { path: "user-modify", element: <UserModifyPage /> },
            { path: "user-modify/with-draw", element: <WithdrawPage /> },
          ],
        },
        { path: "/event-list", element: <EventListPage /> },
        { path: "/detail/:id", element: <EventDetailPage /> },
        { path: "/detail/:id/apply", element: <ApplyPage /> },
        { path: "/detail/:id/apply/edit", element: <ApplyEditPage /> },
        { path: "/detail/finish", element: <FinishApplyPage /> },
        { path: "/with-draw-finish", element: <WithdrawFinishPage /> },
        {
          path: "/gender-birth-information",
          element: <GenderBirthInformation />,
        },
        { path: "/personal-information", element: <PersonalInformation /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/onward-transfer", element: <OnwardTransfer /> },
        { path: "/markeyting-information", element: <MarketingInformation /> },
        { path: "/terms-service", element: <TermsService /> },
        {
          path: "/*",
          element: <div style={{ color: "#fff" }}>없는 페이지 입니다.</div>,
        },
      ],
    },
    {
      path: "/link",
      element: <LinkPage />,
    },
    {
      path: "/edit-review",
      element: <EditReviewPage />,
    },
    {
      path: "/host-main",
      element: <HostMainPage />,
    },
    {
      path: "/host",
      element: <HostLayout />,
      children: [
        { path: "/host/corporate", element: <CorporatePage /> },
        { path: "/host/corporate/finish", element: <CorparateFinshPage /> },
        {
          path: "/host/my",
          element: <HostSideMenuLayout />,
          children: [
            { path: "/host/my/mypage", element: <MyPage /> },
            { path: "/host/my/dashboard", element: <DashboardPage /> },
            {
              path: "/host/my/apply-register/new",
              element: <ApplyRegisterNew />,
            },
            {
              path: "/host/my/apply-register/edit/:id/state",
              element: <EditStateInfo />,
            },
            {
              path: "/host/my/apply-register/edit/:id/general",
              element: <EditApplyGeneral />,
            },
            {
              path: "/host/my/apply-register/edit/:id/detail",
              element: <EditApplyDetail />,
            },
            {
              path: "/host/my/apply-register/edit/:id/information",
              element: <EditApplyInformation />,
            },
            {
              path: "/host/my/apply-register/edit/:id/survey",
              element: <EditApplySurvey />,
            },
            {
              path: "/host/my/apply-register/edit/:id/faq",
              element: <EditApplyFaq />,
            },
            {
              path: "/host/my/apply-register/edit/finish",
              element: <EditApplyfinish />,
            },
            {
              path: "/host/my/event/:id/party",
              element: <EventPartyList />,
            },
            {
              path: "/host/my/event/:id/party-company",
              element: <EventPartyCompanyList />,
            },
          ],
        },
      ],
    },
    { path: "/host/:id/priview", element: <ApplyPreviewPage /> },
  ]
  // { basename: "/root/home/micemate-frontend/dist" }
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
