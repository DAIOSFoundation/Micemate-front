// import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/api/index";

//배너 조회
export const useBannerQuery = (type: number) => {
  return useQuery({
    queryKey: ["banner", type],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/banners?type=${type}`,
      });
      return response.data;
    },
  });
};
