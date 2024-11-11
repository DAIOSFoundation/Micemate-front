// 이벤트 리스트
export interface EventList {
  id: string;
  imgUrl: string;
  title: string;
  date: string;
  location: string;
  dDay: string;
  price: string;
  likeNum: number;
  like: boolean;
}

export interface Category {
  id: string;
  label: string;
}

//####################### fix #############################
export interface CustomError extends Error {
  response?: {
    data: any;
    status: number;
    headers: string;
  };
}

// 주최사 대시보드 필터
export interface FilterType {
  sortType: string;
  startDate: string;
  endDate: string;
  progressType: string;
  search: string;
  searchKeyword: string;
  order: string;
}
// 주최사 행사참가자 조회 필터
export interface PartyFilterType {
  id: string;
  page: string;
  start: string;
  end: string;
  type: string;
  search: string;
  order: string;
}

/* api 응답 데이터 */

//회원가입 data
export interface JoinType {
  name: string;
  email: string;
  password: string;
  c_password: string;
  birth: string;
  sex: boolean;
  interests: number[];
  terms_of_uses: { [key: string]: string };
}

export interface JoinSocialType {
  provider: string;
  provider_id: string;
  password: string;
  c_password: string;
  birth: string;
  sex: boolean;
  interests: number[];
  terms_of_uses: { [key: string]: string };
}
//카테고리
export interface CategoryListType {
  id: number;
  name: string;
}

// 행사 검색 및 필터링

// 관심있는 행사 data
export interface WishEventType {
  token: string;
  user_id: string;
  event_id: number;
}

// 마이페이지
export interface MyEventQueryType {
  token: string;
  user_id: string;
  type: number;
  page: number;
}

//사용자 이벤트 리스트
export interface MyEventListType {
  id: number;
  title: string;
  img: string;
  event_start_date: string;
  event_end_date: string;
  position: string;
  date?: string;
  is_booth: boolean;
  liked_booth: boolean;
  url: string;
}

export interface EditUserInformation {
  password?: string;
  contact?: string;
  birth: string;
  sex: boolean;
  interests: number[];
}

// 행사 리스트
export interface EventListType {
  id: number;
  title: string;
  img: string;
  event_start_date: string;
  event_end_date: string;
  position: string;
  price: number;
  likes: number;
  like_state: boolean;
}

export interface ReviewListDataType {
  total: number;
  rate: number;
  items: {
    id: number;
    name: string;
    rate: number;
    content: string;
    created_at: string;
    likes: number;
    like_state: boolean;
  }[];
}

export interface BoothListDataType {
  img: string;
  items: {
    id: number;
    number: string;
    name: string;
    position: string;
    url: string;
    like: boolean;
  }[];
}

export interface EventDetailDataType extends EventListType {
  category: { id: number; name: string };
  payable_type: number;
  payable_start_date: string;
  payable_end_date: string;
  payable_price_url: string;
  payable_price1: number;
  payable_price2: number;
  progress_type: number;
  progress_url: string;
  position1: string;
  position2: string;
  content: string;
  faqs: { [key: string]: string }[];
  contact_name: string;
  contact_email: string;
  contact_number: string;
  application_type: number;
  application_start_date: string;
  application_end_date: string;
  like: boolean;
}

/* api 요청 */
export interface LoginRequest {
  email: number;
  password: string;
  remember: boolean;
}

export interface CancelEventRequest {
  token: string;
  event_id: string;
}

export interface UserInformationRequest {
  token: string;
  user_id: string;
}
export interface EventInformationRequest {
  token: string;
  event_id: string;
}
export interface UserMyModifyRequest extends UserInformationRequest {
  token: string;
  user_id: string;
  modifyData: EditUserInformation;
}

export interface CompanyCorporateRequest extends UserInformationRequest {
  formData: FormData;
}

export interface CompanyLogoRequest extends UserInformationRequest {
  formData: FormData;
}

export interface EventManageRequest {
  token: string;
  data: {
    page: number;
    dateType: number;
    start: string;
    end: string;
    state: number;
    search: string;
    order: string;
  };
}

export interface EventReviewRequest extends UserInformationRequest {
  event_id: number;
  page: number;
  sort_type: number;
}

export interface EventApplyRequest extends EventInformationRequest {
  applyData: {
    type: string;
    name: string;
    email: string;
    contact: string;
    group: string;
    xlsx: File;
    information: string[];
    surveys: string[];
    terms_of_uses: string[];
  };
}

export interface NewApplyRegisterRequest {
  token: string;
  data: {
    title: string;
    category_id: number;
  };
}

export interface ApplyRegisterGeneralRequest extends EventInformationRequest {
  data: {
    title: string;
    category_id: number;
    img1: File;
    img2: File;
    event_start_date: string;
    event_end_date: string;
    payable_type: number;
    payable_start_date: string;
    payable_end_date: string;
    payable_price_url: string;
    payable_price1: number;
    payable_price2: number;
    progress_type: number;
    progress_url: string;
    position1: string;
    position2: string;
  };
}

export interface SurveyOption {
  text: string;
}

export interface SurveyField {
  type: 0 | 1 | 2; // 0: 단일 선택, 1: 다중 선택, 2: 장문
  title: string;
  options: SurveyOption[];
  required: boolean;
  isReject: boolean;
}

export interface ApplyRegisterSurveyPayload {
  token: string;
  event_id: string;
  data: ApplyRegisterSurveyData;
}

export interface ApplyRegisterSurveyData {
  is_survey: boolean;
  surveys: {
    type: 0 | 1 | 2;
    title: string;
    options: string[];
    required: boolean;
    is_reject: boolean;
  }[];
  is_reject: {
    survey: boolean;
  };
}

export interface FaqField {
  question: string;
  answer: string;
  required: boolean;
  is_reject: boolean;
}

export interface FaqUser {
  contact_name: string;
  contact_email: string;
  contact_number: string;
}
