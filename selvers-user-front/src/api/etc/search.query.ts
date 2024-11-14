import { QUERY_KEY } from "@/constants/queryKeys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteSearchHistory,
  getSearchHistory,
  putToggleSearchHistory,
} from "./search.api";

export const useGetSearchHistoryQuery = () => {
  const userId = localStorage.getItem("user_id");
  return useQuery({
    queryKey: [QUERY_KEY.SEARCH_HISTORY(Number(userId))],
    queryFn: () => getSearchHistory(Number(userId)),
    enabled: !!userId,
  });
};

export const useDeleteSearchHistoryMutation = () => {
  const userId = localStorage.getItem("user_id");

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteSearchHistory(Number(userId)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SEARCH_HISTORY(Number(userId))],
      });
    },
  });
};

export const usePutToggleSearchHistoryMutation = () => {
  const userId = localStorage.getItem("user_id");
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => putToggleSearchHistory(Number(userId)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SEARCH_HISTORY(Number(userId))],
      });
    },
  });
};
