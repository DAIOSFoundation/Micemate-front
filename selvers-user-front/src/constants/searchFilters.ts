type FilterType = {
  name: string;
  value: number | null;
};

export const FILTER_PROGRESS: FilterType[] = [
  { name: "온/오프라인 모두", value: 0 },
  { name: "온라인", value: 1 },
  { name: "오프라인", value: 2 },
];

export const FILTER_PERIOD: FilterType[] = [
  { name: "모든 날짜", value: 0 },
  { name: "이번주 행사", value: 1 },
  { name: "지난 행사", value: 2 },
];

export const FILTER_PRICE: FilterType[] = [
  { name: "유/무료 모두", value: 0 },
  { name: "유료", value: 1 },
  { name: "무료", value: 2 },
];
