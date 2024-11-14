import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "@components/shared/layout";
import Login from "@/app/login/page";
import GeneralList from "@/app/member/general/listPage";
import GeneralDetail from "@/app/member/general/detailPage";
import CorporateList from "@/app/member/corporate/listPage";
import CorporateDetail from "@/app/member/corporate/detailPage";
import EventList from "@/app/event/listPage";
import EventApply from "@/app/event/apply/applyPage";
import EventApplyGeneral from "@/app/event/apply/applyGeneral";
import EventApplyDetail from "@/app/event/apply/applyDetail";
import EventApplyInformation from "@/app/event/apply/applyInformation";
import EventApplySurvey from "@/app/event/apply/applySurvey";
import EventApplyFaq from "@/app/event/apply/applyFaq";
import MainBannerList from "@/app/banner/main/listPage";
import MainBannerDetail from "@/app/banner/main/detailPage";
import BandBannerList from "@/app/banner/band/listPage";
import BandBannerDetail from "@/app/banner/band/detailPage";
import BannerPage from "@/app/banner/bannerPage";
import AddBannerPage from "./banner/addBannerPage";
import BannerDetailPage from "./banner/bannerDetailPage";
import ApplyPreviewPage from "@/app/applyPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      // 회원관리
      {
        path: "/member/general",
        element: <GeneralList />,
      },
      {
        path: "/member/general/detail/:id",
        element: <GeneralDetail />,
      },
      {
        path: "/member/corporate",
        element: <CorporateList />,
      },
      {
        path: "/member/corporate/detail/:id",
        element: <CorporateDetail />,
      },
      // 행사관리
      {
        path: "/event",
        element: <EventList />,
      },
      {
        path: "/event/apply/:id",
        element: <EventApply />,
      },
      {
        path: "/event/apply/:id/general",
        element: <EventApplyGeneral />,
      },
      {
        path: "/event/apply/:id/detail",
        element: <EventApplyDetail />,
      },
      {
        path: "/event/apply/:id/information",
        element: <EventApplyInformation />,
      },
      {
        path: "/event/apply/:id/survey",
        element: <EventApplySurvey />,
      },
      {
        path: "/event/apply/:id/faq",
        element: <EventApplyFaq />,
      },
      // 배너관리
      {
        path: "/banner",
        element: <BannerPage />,
      },
      {
        path: "/banner/detail/:id",
        element: <BannerDetailPage />,
      },
      {
        path: "/banner/add",
        element: <AddBannerPage />,
      },
      {
        path: "/banner/main",
        element: <MainBannerList />,
      },
      {
        path: "/banner/main/detail",
        element: <MainBannerDetail />,
      },
      {
        path: "/banner/main/detail/:id",
        element: <MainBannerDetail />,
      },
      {
        path: "/banner/band",
        element: <BandBannerList />,
      },
      {
        path: "/banner/band/detail",
        element: <BandBannerDetail />,
      },
      {
        path: "/banner/band/detail/:id",
        element: <BandBannerDetail />,
      },
    ],
  },
  { path: "/preview/:id", element: <ApplyPreviewPage /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
