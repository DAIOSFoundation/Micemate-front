import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import dayjs from "dayjs";
import { FilterType01 } from "@/type";

const dateType = [
  { value: "등록일", type: "1" },
  { value: "행사 개설일", type: "2" },
];

const periodType = [
  { value: "오늘", type: "today" },
  { value: "어제", type: "yesterday" },
  { value: "7일", type: "7days" },
  { value: "1개월", type: "1month" },
  { value: "전체", type: "all" },
];

const searchType = [
  { value: "전체", type: "none" },
  { value: "승인대기", type: "1" },
  { value: "수정중", type: "2" },
  { value: "모집대기", type: "3" },
  { value: "모집중", type: "4" },
  { value: "마감", type: "5" },
  { value: "행사종료", type: "6" },
];

const SearchFilter = ({
  setFilterData,
  resetFilter,
  resetDate = null,
}: {
  setFilterData: Dispatch<SetStateAction<FilterType01>>;
  resetFilter: () => void;
  resetDate?: string;
}) => {
  const [selectedDateType, setSelectedDateType] = useState<string | null>(null);
  const today = dayjs().format("YYYY-MM-DD");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    // formState: { errors },
  } = useForm();

  const dateOptionHandler = (range: string) => {
    let start = "";
    let end = dayjs().format("YYYY-MM-DD");

    switch (range) {
      case "today":
        start = dayjs().format("YYYY-MM-DD");
        break;
      case "yesterday":
        start = dayjs().subtract(1, "day").format("YYYY-MM-DD");
        end = start;
        break;
      case "7days":
        start = dayjs().subtract(7, "day").format("YYYY-MM-DD");
        break;
      case "1month":
        start = dayjs().subtract(1, "month").format("YYYY-MM-DD");
        break;
      case "all":
        start = "";
        end = ""; // 전체는 날짜 범위가 없음을 의미
        break;
    }

    setValue("start", start);
    setValue("end", end);
    setSelectedDateType(range);
  };

  const handleDateInputClick = () => {
    setSelectedDateType(null);
  };

  const onSubmit = (data) => {
    setFilterData(data);
  };

  const resetFilterHandler = () => {
    reset();
    resetFilter();
    dateOptionHandler(resetDate);
  };

  useEffect(() => {
    dateOptionHandler(resetDate);
    onSubmit(watch());
  }, [resetDate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="table_wrap ft_table mt_20">
        <table className="type4">
          <colgroup>
            <col width="60px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th className="txt_left">기간</th>
              <td>
                <div className="dis_inblock">
                  <select 
                    className="btn border_w w_96" 
                    {...register("dateType")}
                  >
                    {dateType.map((data) => (
                      <option key={data.type} value={data.type}>
                        {data.value}
                      </option>
                    ))}
                  </select>
                </div>
                {periodType.map((data) => (
                  <div key={data.type} className="dis_inblock">
                    <input
                      type="radio"
                      name="dateFilter"
                      id={data.type}
                      onChange={() => dateOptionHandler(data.type)}
                      checked={selectedDateType === data.type}
                      className="hide"
                    />
                    <label htmlFor={data.type} className="btn border_w">
                      {data.value}
                    </label>
                  </div>
                ))}
                <div className="dis_inblock">
                  <input
                    type="date"
                    {...register("start")}
                    id="start"
                    onClick={handleDateInputClick}
                    onChange={(e) => setValue("start", e.target.value)}
                    defaultValue={today}
                    className="small w_104"
                  />
                  <label htmlFor="start" className="date_icon"></label>
                </div>
                <div className="dis_inblock">&nbsp;~&nbsp;</div>
                <div className="dis_inblock">
                  <input
                    type="date"
                    {...register("end")}
                    id="end"
                    onClick={handleDateInputClick}
                    onChange={(e) => setValue("end", e.target.value)}
                    defaultValue={today}
                    className="small w_104"
                  />
                  <label htmlFor="end" className="date_icon"></label>
                </div>
              </td>
            </tr>
            <tr>
              <th className="txt_left">검색</th>
              <td>
                <div className="dis_inblock">
                  <select {...register("state")} className="btn border_w w_96">
                    {searchType.map((data) => {
                      return (
                        <option value={data.type} key={data.type}>
                          {data.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="dis_inblock">
                  <input
                    type="text"
                    placeholder="전체"
                    {...register("search")}
                    className="small search w_364"
                  />
                </div>
                <div className="dis_inblock">
                  <button type="submit" className="btn small w_83 light_blue">
                    검색
                  </button>
                  <button
                    type="button"
                    className="btn small w_83 light_gray ml_4"
                    onClick={resetFilterHandler}
                  >
                    초기화
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default SearchFilter;
