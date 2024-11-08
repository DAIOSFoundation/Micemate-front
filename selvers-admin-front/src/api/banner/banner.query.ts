import { QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getManageBannerList, GetManageBannerRequest } from "./banner.api";

export const useGetManageBannerList = (request: GetManageBannerRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BANNER.LIST],
    queryFn: () => getManageBannerList(request),
    staleTime: 0,
  });
};
