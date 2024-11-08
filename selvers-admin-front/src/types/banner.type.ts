export type BannerType = 0 | 1; // 0 : 메인 배너, 1 : 띠배너
export type DateType = 0 | 1; // 0 : 등록일, 1 : 게시일
export type BannerState = 1 | 2 | 3; // 1 : 노출, 2 : 노출 안함, 3 : 종료

export type BannerItemType = {
  id: number;
  order: number;
  title: string;
  img: string;
  created_at: string;
  start_date: string;
  end_date: string;
  state: BannerState;
};

export type CreateBannerForm = {
  type: BannerType;
  title: string;
  start_date: string;
  end_date: string;
  img: File;
  url: string;
  show: boolean;
};
