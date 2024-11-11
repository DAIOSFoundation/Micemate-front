//####################### fix #############################
export interface CustomError extends Error {
  response?: {
    data: any;
    status: number;
    headers: string;
  };
}

// 회원관리 필터
export interface FilterType01 {
  start?: string;
  end?: string;
  type?: string;
  search?: string;
  order?: string;
  company?: string;
}
// 행사관리 필터
export interface FilterType02 {
  dateType?: string;
  start?: string;
  end?: string;
  type?: string;
  search?: string;
  state?: string;
}

/* api 응답 데이터 */

//카테고리
export interface CategoryListType {
  id: number;
  name: string;
}

/* api 요청 */
export interface LoginRequest {
  email: number;
  password: string;
  remember: boolean;
}

export interface UserListRequest {
  page: number;
  start?: string; // 'yyyy-mm-dd'
  end?: string; // 'yyyy-mm-dd'
  type?: 1 | 2; // 1: 일반 | 2: 탈퇴
  search?: string;
  order?: "asc" | "desc";
  company?: string;
}

export interface EditUserRequest {
  id: number;
  modifyData: {
    password?: string;
    contact?: string;
    birth?: string;
    sex?: boolean;
    interests?: number[];
  };
}

export interface DeleteUserRequest {
  delete: boolean;
  ids: number[];
}

export interface CancelEventRequest {
  token: string;
  event_id: string;
}

export interface UserInformationRequest {
  token: string;
  user_id: string;
}

export interface CompanyLogoRequest extends UserInformationRequest {
  formData: FormData;
}

export interface NewApplyRegisterRequest {
  token: string;
  data: {
    title: string;
    category_id: number;
  };
}

export interface ApplyAcceptRequest {
  accept: boolean;
  reject?: {
    title?: boolean;
    category?: boolean;
    img?: boolean;
    date?: boolean;
    time?: boolean;
    payable?: boolean;
    progress?: boolean;
    position?: boolean;
    content?: boolean;
    tag?: boolean;
    application_date?: boolean;
    application_type?: boolean;
    application_information?: boolean;
    survey?: boolean;
    surveys?: boolean[];
    faq?: boolean;
    faqs?: boolean[];
    contact?: boolean;
    reason?: string;
  };
}

export interface Survey {
  type: number; // 0: 단일 선택, 1: 다중 선택, 2: 장문
  title: string;
  options?: string[]; // type 0, 1일 경우 옵션이 존재
  required: boolean;
  is_reject: boolean;
}

export interface SurveyData {
  is_survey: boolean; // 0: 사용하지 않음, 1: 사용함
  surveys: Survey[];
  is_reject: {
    survey: boolean;
  };
}

export interface surveyCheck {
  survey: boolean;
  surveys: boolean[];
}

export interface Faq {
  question: string;
  answer: string;
  is_reject: boolean;
}

export interface FaqData {
  is_FAQ: boolean;
  faqs: Faq[];
  contact_name: string;
  contact_email: string;
  contact_number: string;
  is_reject: {
    faq: boolean;
    contact: boolean;
  };
}

export interface FaqCheck {
  faq: boolean;
  faqs: boolean[];
  contact: boolean;
}