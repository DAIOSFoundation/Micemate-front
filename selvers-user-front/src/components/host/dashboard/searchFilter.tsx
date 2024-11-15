import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useState } from "react";
import dayjs from "dayjs";
import { FilterType } from "@/type";

const dateType = [
  { value: "오늘", type: "today" },
  { value: "어제", type: "yesterday" },
  { value: "7일", type: "7days" },
  { value: "1개월", type: "1month" },
  { value: "전체", type: "all" },
];

const sortType = [
  { value: "등록일", type: 1 },
  { value: "행사 개설일", type: 2 },
];

const progressType = [
  // { value: "임시 저장", type: 0 },
  { value: "승인 대기", type: 1 },
  { value: "수정 중", type: 2 },
  { value: "모집 대기", type: 3 },
  { value: "모집 중", type: 4 },
  { value: "마감", type: 5 },
  { value: "행사 종료", type: 6 },
];

const SearchFilter = ({
  setFilterData,
  resetFilter,
}: {
  setFilterData: Dispatch<SetStateAction<FilterType>>;
  resetFilter: () => void;
}) => {
  const [selectedDateType, setSelectedDateType] = useState<string | null>(
    "all"
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,

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

    setValue("startDate", start);
    setValue("endDate", end);
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="table_wrap mt_20">
        <table className="type3">
          <colgroup>
            <col width="160px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th className="txt_left">기간</th>
              <td>
                <div className="dis_inblock">
                  <select
                    className="btn border_w w_96"
                    {...register("sortType")}
                  >
                    {sortType.map((data) => {
                      return (
                        <option value={data.type} key={data.type}>
                          {data.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {dateType.map((data) => (
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
                    {...register("startDate")}
                    id="startDate"
                    onClick={handleDateInputClick}
                    onChange={(e) => setValue("startDate", e.target.value)}
                    defaultValue={""}
                    className="small w_104"
                  />
                  <label htmlFor="startDate" className="date_icon"></label>
                </div>
                <div className="dis_inblock">&nbsp;~&nbsp;</div>
                <div className="dis_inblock">
                  <input
                    type="date"
                    {...register("endDate")}
                    id="endDate"
                    onClick={handleDateInputClick}
                    onChange={(e) => setValue("endDate", e.target.value)}
                    defaultValue={""}
                    className="small w_104"
                  />
                  <label htmlFor="endDate" className="date_icon"></label>
                </div>
              </td>
            </tr>
            <tr>
              <th className="txt_left">검색</th>
              <td>
                <div className="dis_inblock">
                  <select
                    {...register("progressType")}
                    className="btn border_w w_96"
                  >
                    {progressType.map((data) => {
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
                    {...register("searchKeyword")}
                    className="small search w_548"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn_wrap mt_18">
        <button className="btn small w_83 light_blue" type="submit">
          검색
        </button>
        <button
          className="btn small w_83 light_gray ml_4"
          type="button"
          onClick={() => resetFilterHandler()}
        >
          초기화
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;
