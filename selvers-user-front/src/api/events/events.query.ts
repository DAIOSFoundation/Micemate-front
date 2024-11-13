// import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  CancelEventRequest,
  EventReviewRequest,
  NewApplyRegisterRequest,
  EventInformationRequest,
  ApplyRegisterSurveyData,
  ApplyRegisterSurveyPayload,
  // ApplyRegisterGeneralRequest,
} from "@/type";
import apiClient from "@/api/index";

/*리뷰 조회*/
export const useReviewList = (event_id: string, token?: string) => {
  return useQuery({
    queryKey: ["reviewList", event_id],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/reviews`,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      });
      return response.data;
    },
  });
};

/*행사 리스트 조회*/
export const useEventList = (type: number, token?: string) => {
  return useQuery({
    queryKey: ["eventList", type, token],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events?type=${type}`,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      });
      return response.data;
    },
  });
};

//행사 등록
export const useEventApplySubmitMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
    }: {
      token: string;
      event_id: string;
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 사용자 행사 검색

// 행사 관리 조회
export const useEventManageQuery = (token: string) => {
  const location = useLocation();
  return useQuery({
    queryKey: ["eventManage", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/manage${location.search}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 여러 행사 삭제
export const useEventManageDeleteMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
    }: {
      token: string;
      event_id: number[];
    }) => {
      const response = await apiClient({
        method: "DELETE",
        url: `/api/events/manage`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: { ids: event_id },
      });
      return response.data;
    },
  });
};

//행사 조회
export const useEventDetail = (id: string, token?: string) => {
  return useQuery({
    queryKey: ["eventDetail", id, token],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${id}`,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { authorization: `Bearer ${token}` } : {}),
        },
      });
      return response.data;
    },
  });
};

// (사용자) 행사 신청 시 필요 정보 조회
export const useEventApplyInformationQuery = (
  event_id: string,
  token?: string
) => {
  return useQuery({
    queryKey: ["EventApplyInformation", event_id, token],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/application-info`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 행사 참가가자 관리 조회
export const useEventPartyQuery = (event_id: string, token?: string) => {
  const location = useLocation();
  return useQuery({
    queryKey: ["EventPartyQuery", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/applications${location.search}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 행사 참가가자 관리 조회(엑셀 다운로드)
export const useEventPartyExcelQuery = (event_id: string, token?: string) => {
  const location = useLocation();
  return useQuery({
    queryKey: ["EventPartyExcelQuery", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/applications/download${location.search}`,
        headers: {
          "Content-Type": "blob",
          authorization: `Bearer ${token}`,
        },
        responseType: "arraybuffer",
      });
      return response.data;
    },
  });
};

// 행사 참가자 괸리 조회(detail)
export const useEventPartyDetailQuery = (
  event_id: string,
  token: string,
  apply_id: string
) => {
  return useQuery({
    queryKey: ["EventPartyDetailQuery", event_id, apply_id, token],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/applications/${apply_id}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 행사 참가 정보 조회(사용자 행사신청 수정할때 )
export const useApplyEditQuery = (event_id: string, token: string) => {
  return useQuery({
    queryKey: ["ApplyEdit", event_id, token],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/applications/me`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 행사 신청
export const useEventApplyMutation = () => {
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
        url: `/api/events/${event_id}/apply`,
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

// 행사 취소
// 행사 부스 조회
//리뷰조회
export const useEventReview = (data: EventReviewRequest) => {
  return useQuery({
    queryKey: ["eventReviewList", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/reviews`,
        headers: {
          "Content-Type": "application/json",
          ...(data.token ? { authorization: `Bearer ${data.token}` } : {}),
        },
        params: {
          id: data.event_id,
          page: data.page,
          type: data.sort_type,
        },
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

/*행사 작성 상태 확인*/
export const useApplyRegisterStateQuery = (data: EventInformationRequest) => {
  return useQuery({
    queryKey: ["ApplyRegisterState", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
    enabled: !!data.event_id,
  });
};

//행사 제출
export const useApplySubmitMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
    }: {
      token: string;
      event_id: string;
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

//행사 등록 기본 정보 조회
export const useApplyRegisterGeneralQuery = (data: EventInformationRequest) => {
  return useQuery({
    queryKey: ["ApplyRegisterState", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit/general`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
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

//행사 등록 상세 정보 조회
export const useApplyRegisterDetailQuery = (data: EventInformationRequest) => {
  return useQuery({
    queryKey: ["ApplyRegisterDetail", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit/detail`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
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
      data: { content: string; tags: string[] };
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit/detail`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(data),
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

// 행사 등록 모집 정보 수정
export const useApplyRegisterRecruitMutation = () => {
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
// 행사 등록 사전 설문 정보 조회
export const useApplyRegisterSurveyQuery = (data) => {
  return useQuery({
    queryKey: ["ApplyRegisterSurvey", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit/survey`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

// 행사 등록 사전 설문 정보 수정
export const useApplyRegisterSurveyMutation = () => {
  return useMutation<
    ApplyRegisterSurveyData,
    Error,
    ApplyRegisterSurveyPayload
  >({
    mutationFn: async ({ token, event_id, data }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit/survey`,
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

// 행사 등록 FAQ 정보 조회
export const useApplyRegisterFaqQuery = (data) => {
  return useQuery({
    queryKey: ["ApplyRegisterSurvey", data],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${data.event_id}/edit/faq`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

// 행사 등록 FAQ 정보 수정
export const useApplyRegisterFaqMutation = () => {
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
        url: `/api/events/${event_id}/edit/faq`,
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

// 작성 완료된 행사 승인

// 행사 상세 등록 이미지 등록
export const useApplyImageMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
      formData,
    }: {
      token: string;
      event_id: string;
      formData: FormData;
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit/images`,
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

// 행사 상세 등록 이미지 삭제
export const useApplyImageDelMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
      data,
    }: {
      token: string;
      event_id: string;
      data: { ids: number[] };
    }) => {
      const response = await apiClient({
        method: "DELETE",
        url: `/api/events/${event_id}/edit/images`,
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

// 참가기업 관리 부스 조회
export const useEventBooth = (event_id: string, token: string) => {
  return useQuery({
    queryKey: ["EventBooth", location.search],
    queryFn: async () => {
      const response = await apiClient({
        method: "GET",
        url: `/api/events/${event_id}/edit/booth`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

// 참가기업 관리 부스 업로드
export const useEditBoothMutation = () => {
  return useMutation({
    mutationFn: async ({
      token,
      event_id,
      formData,
    }: {
      token: string;
      event_id: string;
      formData: FormData;
    }) => {
      const response = await apiClient({
        method: "POST",
        url: `/api/events/${event_id}/edit/booth`,
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
