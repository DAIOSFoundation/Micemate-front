import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
// import axios from "axios";
import {
  UserInformationRequest,
  CompanyLogoRequest,
  DeleteUserRequest,
  EditUserRequest,
} from "@/type";

import apiClient from "@/api/index";

// 회원 리스트 확인
export const useUserListQuery = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return useQuery({
    queryKey: ["userList", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/users${location.search}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 기업 회원 리스트 확인
export const useCoporateListQuery = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const searchParams = location.search
    ? `${location.search}&company=company`
    : "?company=company";

  return useQuery({
    queryKey: ["coporateList", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/users${searchParams}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 회원 상세 정보 확인
export const useUserDetailQuery = (id?: number) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["userDetail", id],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/users/${id}/detail`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    enabled: !!id,
  });
};

// 회원정보 수정
export const useModifyUserMutataion = () => {
  return useMutation({
    mutationFn: async (data: EditUserRequest) => {
      const token = localStorage.getItem("token");

      const response = await apiClient({
        method: "PUT",
        url: `/api/users/${data.id}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: data.modifyData,
      });
      return response.data;
    },
  });
};

// 여러 회원 삭제/탈퇴
export const useDeleteUserMutation = () => {
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: async (data: DeleteUserRequest) => {
      const response = await apiClient({
        method: "DELETE",
        url: "/api/users",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data,
      });
      return response.data;
    },
  });
};

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

// 기업 회원 승인
export const useCompanyAcceptMutation = () => {
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: async ({ id, accept }: { id: number; accept: boolean }) => {
      const response = await apiClient({
        method: "PUT",
        url: `/api/users/${id}/company/accept`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: { accept },
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
