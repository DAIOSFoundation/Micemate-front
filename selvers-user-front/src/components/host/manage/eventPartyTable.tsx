import { delTime } from "@/util/stringTransition";
import EventPartyDetailPopup from "./eventPartyDetailPopup";
import { useState } from "react";

const EventPartyTable = ({ partyList }) => {
  const [detailpopUp, setDetailPopUp] = useState(false);
  const [applyId, setApplyId] = useState(null);

  const modalHandler = (applyId) => {
    setApplyId(applyId);
    setDetailPopUp(true);
  };
  return (
    <div className="table_wrap mt_22">
      {partyList?.total > 0 ? (
        <table className="type1">
          <colgroup>
            <col width="130px" />
            <col width="130px" />
            <col width="130px" />
            <col width="150px" />
            <col width="160px" />
            <col width="220px" />
            <col width="*" />
            <col width="120px" />
          </colgroup>
          <thead>
            <tr>
              <th>신청일</th>
              <th>신청유형</th>
              <th>이름</th>
              <th>이메일</th>
              <th>휴대전화</th>
              <th>단체명</th>
              <th></th>
              <th>상세 보기</th>
            </tr>
          </thead>
          <tbody>
            {partyList &&
              partyList?.items.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{delTime(data.created_at)}</td>
                    <td>{data.type === 0 ? "개인 신청" : "단체 신청"}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                    <td>{data.group}</td>
                    <td></td>
                    <td>
                      <button
                        onClick={() => {
                          modalHandler(data.id);
                        }}
                        className="col_blue underline"
                      >
                        상세 보기
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div>해당하는 참가자가 없습니다. </div>
      )}

      {detailpopUp === true && (
        <EventPartyDetailPopup
          applyId={applyId}
          setDetailPopUp={setDetailPopUp}
        />
      )}
    </div>
  );
};

export default EventPartyTable;
