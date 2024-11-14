import useQueryParams from "@/hook/useSearchParams";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const getFormattedDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

const BannerFilter = () => {
  const today = new Date();
  const navigate = useNavigate();
  const queryParams = useQueryParams({
    isDirectPush: true,
    isReplace: true,
    isSetPageFirst: true,
  });
  const [search, setSearch] = useState(queryParams.get("search") || "");
  const [dateType, setDateType] = useState<string>(
    queryParams.get("dateType") || "1"
  );
  const [start, setStart] = useState(queryParams.get("start") || "");
  const [end, setEnd] = useState(queryParams.get("end") || "");
  const [state, setState] = useState<string>(queryParams.get("state") || "1");

  const onKeyupSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      queryParams.set("search", e.currentTarget.value);
    }
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickDate = (start: string, end: string) => {
    setStart(start);
    setEnd(end);
  };

  const onClickReset = () => {
    setSearch("");
    setDateType("1");
    setState("1");
    setStart("");
    setEnd("");
    navigate(`/banner?type=${queryParams.get("type")}`);
  };

  const dateButtonList = [
    {
      label: "오늘",
      start: getFormattedDate(today),
      end: getFormattedDate(today),
    },
    {
      label: "어제",
      start: getFormattedDate(new Date(today.setDate(today.getDate() - 1))),
      end: getFormattedDate(new Date(today)),
    },
    {
      label: "7일",
      start: getFormattedDate(new Date(today.setDate(today.getDate() - 7))),
      end: getFormattedDate(new Date()),
    },
    {
      label: "1개월",
      start: getFormattedDate(new Date(today.setMonth(today.getMonth() - 1))),
      end: getFormattedDate(new Date()),
    },
    { label: "전체", start: "", end: "" },
  ];

  return (
    <>
      <div className="table_wrap">
        <table className="type3">
          <colgroup>
            <col width="160px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>기간</th>
              <td>
                <div className="dis_inblock">
                  <select
                    className="btn border_w w_96"
                    onChange={(e) => {
                      setDateType(e.target.value);
                    }}
                    value={dateType}
                  >
                    <option value={1}>등록일</option>
                    <option value={2}>게시일</option>
                  </select>
                </div>
                {dateButtonList.map((item, index) => (
                  <div className="dis_inblock" key={index}>
                    <input
                      type="radio"
                      name="rad"
                      id="rad01"
                      className="hide"
                      checked={item.start === start && item.end === end}
                      readOnly
                    />
                    <label
                      htmlFor={`rad${index}`}
                      className="btn border_w"
                      onClick={() => onClickDate(item.start, item.end)}
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
                <div className="dis_inblock">
                  <input
                    id="date01"
                    type="date"
                    className="small w_104"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                  />
                  <label htmlFor="date01" className="date_icon"></label>
                </div>
                <div className="dis_inblock">&nbsp;~</div>
                <div className="dis_inblock">
                  <input
                    id="date02"
                    type="date"
                    className="small w_104"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                  />
                  <label htmlFor="date02" className="date_icon"></label>
                </div>
              </td>
            </tr>
            <tr>
              <th>검색</th>
              <td>
                <div className="dis_inblock">
                  <select
                    className="btn border_w w_96"
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    value={state}
                  >
                    <option value={"1"}>노출</option>
                    <option value={"2"}>노출 안함</option>
                    <option value={"3"}>종료</option>
                  </select>
                </div>
                <div className="dis_inblock">
                  <input
                    className="small search w_548"
                    type="text"
                    placeholder="전체"
                    value={search}
                    onChange={onChangeSearch}
                    onKeyUp={onKeyupSearch}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="btn_wrap gap7 mt_18">
        <button
          className="btn small light_blue"
          onClick={() => {
            queryParams.setAll({
              search,
              dateType,
              state,
              start,
              end,
            });
          }}
        >
          검색
        </button>
        <button className="btn small gray" onClick={onClickReset}>
          초기화
        </button>
      </div>
    </>
  );
};

export default BannerFilter;
