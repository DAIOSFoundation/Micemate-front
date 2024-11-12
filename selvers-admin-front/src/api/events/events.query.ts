// import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  ApplyAcceptRequest,
  CancelEventRequest,
  NewApplyRegisterRequest,
  // ApplyRegisterGeneralRequest,
} from "@/type";
import apiClient from "@/api/index";

// 행사 관리 조회
export const useEventManageQuery = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const searchParams = location.search
    ? `${location.search}&order=desc`
    : "?order=desc";

  return useQuery({
    queryKey: ["eventManage", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/manage${searchParams}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        params: {},
      });
      return response.data;
    },
  });
};

// 여러 행사 삭제
export const useEventManageDeleteMutation = () => {
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: async ({ ids }: { ids: number[] }) => {
      const response = await apiClient({
        method: "DELETE",
        url: `/api/events/manage`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: { ids },
      });
      return response.data;
    },
  });
};

// 사용자의 행사 관련 정보 조회
export const useUsersEventQuery = (id?: number, type?: string) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["usersEventList", id, type],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/users/${id}/events?type=${type}`,
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

// 행사 작성 상태 확인
export const useApplyRegisterStateQuery = (id: number) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["ApplyRegisterState", id],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${id}/edit`,
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

// 행사 등록 기본 정보 조회
export const useApplyRegisterGeneralQuery = (id: number) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["ApplyRegisterGeneral", id],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${id}/edit/general`,
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

// 행사 등록 상세 정보 조회
export const useApplyRegisterDetailQuery = (id: number) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["ApplyRegisterDetail", id],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${id}/edit/detail`,
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

// 행사 등록 모집 정보 조회
export const useApplyRegisterInfoQuery = (id: number) => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["ApplyRegisterInfo", id],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${id}/edit/application`,
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

// 작성 완료된 행사 승인
export const useApplyRegisterAcceptMutation = () => {
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number | string;
      data: ApplyAcceptRequest;
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${id}/edit/accept`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      });
      return response.data;
    },
  });
};

/*사용자 행사 검색*/
export const useEventSearch = (token: string) => {
  const location = useLocation();
  return useQuery({
    queryKey: ["eventSearch", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/search${location.search}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

/*행사 취소*/
export const useCancelEvent = () => {
  return useMutation({
    mutationFn: async (data: CancelEventRequest) => {
      const response = await apiClient({
        method: "DELETE",
        url: `/api/events/${data.event_id}/cancel`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

/***************부스************** */
// 행사 부스 조회
export const useBoothList = (event_id: string, token: string) => {
  return useQuery({
    queryKey: ["EventBoothList", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/booths`,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      });
      return response.data;
    },
  });
};

/*************행사등록***************/
/*행사 등록*/
export const useNewApplyRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: NewApplyRegisterRequest) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
        data: data.data,
      });
      return response.data;
    },
  });
};

//행사 등록 기본 정보 수정
export const useApplyRegisterGeneralMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
      data,
    }: {
      token: string;
      event_id: string;
      data: FormData;
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit/general`,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
        data: data,
      });
      return response.data;
    },
  });
};

//행사 등록 상세 정보 수정
export const useApplyRegisterDetailMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
      data,
    }: {
      token: string;
      event_id: string;
      data;
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit/application`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: data,
      });
      return response.data;
    },
  });
};

//행사 등록 모집 정보 조회
export const useApplyRegisterRecruitQuery = (data) => {
  return useQuery({
    queryKey: ["ApplyRegisterRecruit", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit/application`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

// 행사 등록 사전 설문 정보 조회
export const useApplyRegisterSurveyQuery = (data) => {
  const token = localStorage.getItem("token");
  return useQuery({
    queryKey: ["ApplyRegisterSurvey", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit/survey`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

export const useApplyRegisterFaqQuery = (data) => {
  const token = localStorage.getItem("token");
  return useQuery({
    queryKey: ["ApplyRegisterSurvey", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit/faq`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
}