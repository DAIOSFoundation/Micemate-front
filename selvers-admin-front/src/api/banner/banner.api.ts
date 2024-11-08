import apiClient from "@/api/index";
import { DefaultResponse } from "@/types/api.types";
import {
  BannerItemType,
  BannerState,
  BannerType,
  DateType,
} from "@/types/index";

export interface GetManageBannerRequest {
  type?: BannerType;
  page?: number;
  dateType?: DateType;
  start?: string;
  end?: string;
  state?: BannerState;
  search?: string;
}

interface GetManageBannerResponse extends DefaultResponse {
  data: {
    total: number;
    items: BannerItemType[];
  };
}

export const getManageBannerList = async (request: GetManageBannerRequest) => {
  const token = localStorage.getItem("token");

  const response = await apiClient.get<GetManageBannerResponse>(
    "/api/banners/manage",
    {
      params: request,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export interface CreateBannerRequest extends FormData {
  title: string;
  start_date: string;
  end_date: string;
  img: File;
  url: string;
  show: boolean;
}

export const createBannerApi = async (type: BannerType, request: FormData) => {
  const token = localStorage.getItem("token");
  console.log(request);

  const response = await apiClient.post<DefaultResponse>(
    `/api/banners`,
    request,
    {
      params: {
        type,
      },
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
