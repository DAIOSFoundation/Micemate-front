// import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryListType } from "@/type";
import apiClient from "@/api/index";

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async (): Promise<CategoryListType[]> => {
      const response = await apiClient.get(`/api/categories`);
      return response.data.data;
    },
    staleTime: 1000 * 60 * 5,
  });
};
