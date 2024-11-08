import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createBannerApi,
  getManageBannerList,
  GetManageBannerRequest,
} from "./banner.api";
import { BannerType } from "@/types";

export const useGetManageBannerList = (request: GetManageBannerRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BANNER.LIST],
    queryFn: () => getManageBannerList(request),
    staleTime: 0,
  });
};

export const useCreateBannerMutation = (type: BannerType) => {
  return useMutation({
    mutationFn: (request: FormData) => createBannerApi(type, request),
  });
};
