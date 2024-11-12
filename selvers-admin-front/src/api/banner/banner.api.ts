import apiClient from "@/api/index";
import { DefaultResponse } from "@/types/api.types";
import {
  BannerDetailType,
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

export const updateBannerApi = async (id: number, request: FormData) => {
  const token = localStorage.getItem("token");

  const response = await apiClient.post<DefaultResponse>(
    `/api/banners/${id}`,
    request,
    {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

interface GetBannerDetailResponse extends DefaultResponse {
  data: BannerDetailType;
}

export const getBannerDetailApi = async (id: number) => {
  const token = localStorage.getItem("token");

  const response = await apiClient.get<GetBannerDetailResponse>(
    `/api/banners/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export interface DeleteBannerRequest {
  ids: number[];
}

export const deleteBannerApi = async (request: DeleteBannerRequest) => {
  const token = localStorage.getItem("token");

  const response = await apiClient.delete<DefaultResponse>(
    `/api/banners/manage`,
    {
      data: request,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
