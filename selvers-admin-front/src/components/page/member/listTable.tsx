import { useState } from "react";
import { Link } from "react-router-dom";

const userState = [
  { type: 0, text: "인증 대기", class: "col_gray" },
  { type: 1, text: "일반 회원", class: "" },
  { type: 2, text: "탈퇴 회원", class: "col_gray" },
];

const ListTable = ({ userList, checkedList, setCheckedList }) => {
  const [allChecked, setAllChecked] = useState(false);
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
      const selectableIds = userList.map((data) => data.id);
      setCheckedList(selectableIds); // 전체 선택 시 선택 가능한 항목들만 추가
    }
    setAllChecked(!allChecked); // 전체 선택 상태 반전
  };

  const getStateTextAndClass = (state: number) => {
    const foundState = userState.find((item) => item.type === state);
    return foundState ? foundState : { text: "알 수 없음", class: "" }; // 기본값 설정
  };

  return (
    <div className="table_wrap mt_22">
      <table className="type1 table_hover">
        <colgroup>
          <col width="16px" />
          <col width="130px" />
          <col width="130px" />
          <col width="220px" />
          <col width="150px" />
          <col width="130px" />
          <col width="160px" />
          <col width="*" />
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
            <th>등록일</th>
            <th>이름</th>
            <th>아이디</th>
            <th>휴대전화</th>
            <th>생일</th>
            <th>수신동의</th>
            <th></th>
            <th>회원유형</th>
          </tr>
        </thead>
        <tbody>
          {userList &&
            userList.map((data) => {
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
                  <td>{data?.created_at ?? "-"}</td>
                  <td>{data?.name ?? "-"}</td>
                  <td>
                    <Link to={`/member/general/detail/${data.id}`}>
                      {data?.email ?? "-"}
                    </Link>
                  </td>
                  <td>{data?.contact ?? "-"}</td>
                  <td>{data?.birth ?? "-"}</td>
                  <td>
                    {data?.agree === true
                      ? "동의"
                      : data?.agree === false
                      ? "동의안함"
                      : "-"}
                  </td>
                  <td></td>
                  <td>
                    <span className={stateClass}>{text}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
