import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import dayjs from "dayjs";
import { FilterType01 } from "@/type";

const dateType = [
  { value: "오늘", type: "today" },
  { value: "어제", type: "yesterday" },
  { value: "7일", type: "7days" },
  { value: "1개월", type: "1month" },
  { value: "전체", type: "all" },
];

const SearchFilter = ({
  setFilterData,
  resetFilter,
  resetDate = null,
  userType = [],
}: {
  setFilterData: Dispatch<SetStateAction<FilterType01>>;
  resetFilter: () => void;
  resetDate?: string;
  userType?: { value: string; type: string | number }[];
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
    setTimeout(() => {
      onSubmit(watch());
    }, 10);
  };

  useEffect(() => {
    dateOptionHandler(resetDate);
    onSubmit(watch());
  }, [resetDate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="table_wrap ft_table">
        <table className="type3">
          <colgroup>
            <col width="160px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>기간</th>
              <td>
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
              <th>검색</th>
              <td>
                <div className="dis_inblock">
                  <select {...register("type")} className="btn border_w">
                    {userType.map((data) => {
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
                    className="small search w_548"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="btn_wrap gap7 mt_18">
        <button type="submit" className="btn small light_blue">
          검색
        </button>
        <button
          type="button"
          className="btn small gray"
          onClick={resetFilterHandler}
        >
          초기화
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;
