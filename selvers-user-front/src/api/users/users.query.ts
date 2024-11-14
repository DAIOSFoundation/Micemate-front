import { useMutation, useQuery } from "@tanstack/react-query";
import {
  WishEventType,
  MyEventQueryType,
  UserInformationRequest,
  UserMyModifyRequest,
  CompanyLogoRequest,
  CompanyCorporateRequest,
} from "@/type";

import apiClient from "@/api/index";

// 회원정보 확인
export const useMyInformationQuery = (data: UserInformationRequest) => {
  return useQuery({
    queryKey: ["userInformation", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/users/${data.user_id}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};
// 회원정보 수정
export const useMyModifyQuery = () => {
  return useMutation({
    mutationFn: async (data: UserMyModifyRequest) => {
      const response = await apiClient({
        method: "PUT",
        url: `/api/users/${data.user_id}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
        data: data.modifyData,
      });
      return response.data;
    },
  });
};
// 회원 탈퇴
export const useMyDeleteMutation = () => {
  return useMutation({
    mutationFn: async (data: UserInformationRequest) => {
      const response = await apiClient({
        method: "DELETE",
        url: `/api/users/${data.user_id}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

// 기업회원 로고 수정
export const useCompanyLogoMutation = () => {
  return useMutation({
    mutationFn: async ({ token, user_id, formData }: CompanyLogoRequest) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/users/${user_id}/company/logo`,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
        data: formData,
      });
      return response.data;
    },
  });
};

// 회원 상세정보 확인
export const useMyDetailInfoQuery = (user_id, token) => {
  return useQuery({
    queryKey: ["myDetailInfo"],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/users/${user_id}/detail`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

//기업회원 등록 및 기업 정보 수정
export const useCompanyCorporateMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      user_id,
      formData,
    }: CompanyCorporateRequest) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/users/${user_id}/company`,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
        data: formData,
      });
      return response.data;
    },
  });
};

//사용자의 행사 관련 정보 조회
export const useMyEventQuery = (data: MyEventQueryType) => {
  return useQuery({
    queryKey: ["myEvent", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/users/${data.user_id}/events`,
        params: {
          ...data,
          type: data.type,
        },
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

// 기업 회원 승인

// 사용자 비밀번호 재설정
export const usePasswordResetMutation = () => {
  return useMutation({
    mutationFn: async (email) => {
      const response = await apiClient({
        method: "PUT",
        url: `/api/users/password/reset`,
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: email },
      });
      return response.data;
    },
  });
};

// 관심 행사 등록
export const useWishEventMutation = () => {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: WishEventType) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/users/${data.user_id}/events/${data.event_id}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

// 관심 부스 등록
export const useWishBoothMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      user_id,
      boothList,
    }: {
      token: string;
      user_id: string;
      boothList: string[];
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/users/${user_id}/booths`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: { ids: boothList },
      });
      return response.data;
    },
  });
};

// 관심 부스 삭제
export const useWishBoothDelMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      user_id,
      boothList,
    }: {
      token: string;
      user_id: string;
      boothList: string[];
    }) => {
      const response = await apiClient({
        method: "DELETE",
        url: `/api/users/${user_id}/booths`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: { ids: boothList },
      });
      return response.data;
    },
  });
};
