import { commonUserUrl } from "@/constants/config";
import { dateStringFormatB } from "@/util/stringTransition";
import { useState } from "react";
import { Link } from "react-router-dom";
import RejectModal from "./rejectModal";

const eventState = [
  { type: 0, text: "임시 저장", class: "yellow" },
  { type: 1, text: "승인 대기", class: "brighter_blue" },
  { type: 2, text: "수정 중", class: "yellow" },
  { type: 3, text: "모집 대기", class: "brighter_gray" },
  { type: 4, text: "모집 중", class: "brighter_gray" },
  { type: 5, text: "마감", class: "gray" },
  { type: 6, text: "행사 종료", class: "gray" },
];

const ListTable = ({ eventList, checkedList, setCheckedList }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectOpen, setRejectOpen] = useState(false);

  const handleCheckboxChange = (id) => {
    setCheckedList(
      (prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) // 체크 해제 시 ID 제거
          : [...prev, id] // 체크 시 ID 추가
    );
  };

  const handleAllCheckboxChange = () => {
    if (allChecked) {
      setCheckedList([]); // 전체 선택 해제 시 모든 ID 제거
    } else {
      // 상태가 승인 대기(1) 또는 수정 중(2)인 항목만 체크 리스트에 추가
      const selectableIds = eventList.map((data) => data.id);
      setCheckedList(selectableIds); // 전체 선택 시 선택 가능한 항목들만 추가
    }
    setAllChecked(!allChecked); // 전체 선택 상태 반전
  };

  const getStateTextAndClass = (state: number) => {
    const foundState = eventState.find((item) => item.type === state);
    return foundState ? foundState : { text: "알 수 없음", class: "" }; // 기본값 설정
  };

  return (
    <>
      <div className="table_wrap mt_22">
        <table className="type1 table_hover">
          <colgroup>
            <col width="16px" />
            <col width="150px" />
            <col width="*" />
            <col width="200px" />
            <col width="200px" />
            <col width="140px" />
            <col width="120px" />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div className="checkbox">
                  <input
                    id="all_chk"
                    onChange={handleAllCheckboxChange} // 전체 선택 핸들러
                    type="checkbox"
                  />
                  <label htmlFor="all_chk"></label>
                </div>
              </th>
              <th>행사번호</th>
              <th className="txt_left">행사명</th>
              <th>행사 일시</th>
              <th>행사 개설일</th>
              <th></th>
              <th>미리보기</th>
              <th>진행 상태</th>
            </tr>
          </thead>
          <tbody>
            {eventList &&
              eventList.map((data) => {
                const { text, class: stateClass } = getStateTextAndClass(
                  data.state
                );
                return (
                  <tr key={data.id}>
                    <td>
                      <div className="checkbox">
                        <input
                          id={data.id}
                          checked={checkedList.includes(data.id)}
                          onChange={() => handleCheckboxChange(data.id)}
                          type="checkbox"
                        />
                        <label htmlFor={data.id}></label>
                      </div>
                    </td>
                    <td>{data.id ?? "-"}</td>
                    <td className="txt_left">
                      {data.state === 3 ||
                      data.state === 4 ||
                      data.state === 5 ||
                      data.state === 6 ? (
                        <Link
                          to={`${commonUserUrl}/${data.id}`}
                          target="_blank"
                        >
                          {data.title ?? "-"}
                        </Link>
                      ) : (
                        <Link to={`/event/apply/${data.id}`}>
                          {data.title ?? "-"}
                        </Link>
                      )}
                    </td>
                    <td>
                      {data.start_date
                        ? dateStringFormatB(data.start_date)
                        : "-"}
                    </td>
                    <td>
                      {data.publish_date
                        ? dateStringFormatB(data.publish_date)
                        : "-"}
                    </td>
                    <td>
                      {data.reject_reason ? (
                        <button
                          className="underline col_blue"
                          onClick={() => {
                            setRejectOpen(true);
                            setRejectReason(data.reject_reason);
                          }}
                        >
                          반려사유
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      <Link
                        to={`/preview/${data.id}`}
                        target="_blank"
                        className="btn small gray w_72"
                      >
                        미리보기
                      </Link>
                    </td>
                    <td>
                      <i className={`btn small  w_72 ${stateClass}`}>{text}</i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {rejectOpen && (
        <RejectModal setOpen={setRejectOpen} data={rejectReason} />
      )}
    </>
  );
};

export default ListTable;
