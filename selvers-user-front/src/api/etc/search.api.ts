import apiClient from "..";

interface GetSearchHistoryResponse {
  data: {
    items: { id: number; name: string }[];
  };
}

export const getSearchHistory = async (
  userId: number
): Promise<GetSearchHistoryResponse> => {
  const token = localStorage.getItem("token");
  const response = await apiClient.get<GetSearchHistoryResponse>(
    `/api/users/${userId}/searches`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteSearchHistory = async (userId: number) => {
  const response = await apiClient.delete(`/api/users/${userId}/searches`);
  return response.data;
};

export const putToggleSearchHistory = async (userId: number) => {
  const response = await apiClient.put(`/api/users/${userId}/searches`);
  return response.data;
};
