import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createBannerApi,
  getBannerDetailApi,
  getManageBannerList,
  GetManageBannerRequest,
  updateBannerApi,
} from "./banner.api";
import { BannerType } from "@/types";

export const useGetManageBannerList = (request: GetManageBannerRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BANNER.LIST, request],
    queryFn: () => getManageBannerList(request),
    staleTime: 0,
  });
};

export const useCreateBannerMutation = (type: BannerType) => {
  return useMutation({
    mutationFn: (request: FormData) => createBannerApi(type, request),
  });
};

export const useUpdateBannerMutation = (id: number) => {
  return useMutation({
    mutationFn: (request: FormData) => updateBannerApi(id, request),
  });
};

export const useGetBannerDetail = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BANNER.DETAIL],
    queryFn: () => getBannerDetailApi(id),
    enabled: !!id,
  });
};
