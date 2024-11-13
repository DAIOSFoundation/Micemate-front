import { useEventPartyDetailQuery } from "@/api/events/events.query";
import { Dispatch, SetStateAction } from "react";
import { useParams } from "react-router-dom";

type Props = {
  applyId: string;
  setDetailPopUp: Dispatch<SetStateAction<boolean>>;
};

const EventPartyDetailPopup = ({ applyId, setDetailPopUp }: Props) => {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const { data: eventPartyDetail } = useEventPartyDetailQuery(
    id,
    token,
    applyId
  );
  const modalCloseHandler = () => {
    setDetailPopUp(false);
  };

  return (
    <>
      {eventPartyDetail && (
        <div className="modal_wrap detailPop detailPop01">
          <div className="dim_layer"></div>
          <div className="modal_inner">
            <button
              onClick={modalCloseHandler}
              className="modal_close"
            ></button>
            <div className="modal_body">
              <div className="modal_tit">사전 설문 결과</div>
              <div className="fs_18 fw_600 mt_48">신청자 정보</div>
              <ul className="key_val_list mt_24">
                <li>
                  <div className="key">신청 유형</div>
                  <div className="val">
                    {eventPartyDetail?.data?.type === 0
                      ? "개인 신청"
                      : "단체 신청"}
                  </div>
                </li>
                <li>
                  <div className="key">이름</div>
                  <div className="val">{eventPartyDetail?.data?.name}</div>
                </li>
                <li>
                  <div className="key">이메일</div>
                  <div className="val">{eventPartyDetail?.data?.email}</div>
                </li>
                <li>
                  <div className="key">휴대전화</div>
                  <div className="val">{eventPartyDetail?.data?.contact}</div>
                </li>
                {eventPartyDetail?.data?.information &&
                  eventPartyDetail?.data?.information.map((data, index) => {
                    return (
                      <li key={index}>
                        <div className="key">{data?.name}</div>
                        <div className="val">{data?.answer}</div>
                      </li>
                    );
                  })}
                <div className="fs_18 fw_600 mt_48">사전 설문</div>

                {eventPartyDetail?.data?.surveys &&
                  eventPartyDetail?.data?.surveys.map((data, index) => {
                    return (
                      <>
                        <div className="fs_16 fw_600 mt_16">
                          {data.type === 0
                            ? "단일 선택"
                            : data.type === 1
                            ? "다중 선택"
                            : data.type === 2
                            ? "단답/장문형"
                            : ""}
                        </div>
                        <li key={index}>
                          <div className="key">{data?.title}</div>
                        </li>
                        {data.type === 0 && (
                          data?.options?.map((option, idx) => {
                            const radioId = `rad-${idx}`; // 고유한 id 생성
                            const radioName = `rad-${idx}`; // 고유한 name 생성

                            return (
                              <div key={idx} className="mt_7">
                                <div className="radio02">
                                  <input
                                    id={radioId}
                                    type="radio"
                                    name={radioName} // 고유한 name 사용
                                    checked={data.answer.includes(idx)}
                                    readOnly // 사용자 상호작용을 막고 단순히 표시 용도로 사용
                                  />
                                  <label htmlFor={radioId}>{option}</label>
                                </div>
                              </div>
                            );
                          })
                        )}
                        {data.type === 1 && (
                          data.options.map((option, idx) => {
                            const checkboxId = `chk00_01 ${idx}`; // 고유한 id 생성

                            return (
                              <div key={idx} className="mt_7">
                                <div className="radio02">
                                  <input
                                    id={checkboxId}
                                    type="checkbox"
                                    checked={data.answer.includes(String(idx))} // 타입 일치
                                    readOnly // 사용자 상호작용 방지 (단순 표시 용도)
                                  />
                                  <label htmlFor={checkboxId}>{option}</label>
                                </div>
                              </div>
                            );
                          })
                        )}
                        {data.type === 2 && (
                          <li>
                            <div className="val">{data.answer}</div>
                          </li>
                        )}
                      </>
                    );
                  })}
              </ul>

              {/* <div className="mt_7">
                <div className="radio02">
                  <input id="rad01" type="radio" />
                  <label htmlFor="rad01">옵션 1입니다.</label>
                </div>
              </div>
              <div className="mt_7">
                <div className="radio02">
                  <input id="rad02" type="radio" />
                  <label htmlFor="rad02">옵션 2입니다.</label>
                </div>
              </div>
              <div className="mt_7">
                <div className="radio02">
                  <input id="rad03" type="radio" checked />
                  <label htmlFor="rad03">기타</label>
                </div>
              </div>
              <div className="mt_7">
                <div className="radio02">
                  <input id="rad04" type="radio" />
                  <label htmlFor="rad04">무응답</label>
                </div>
              </div>

              <div className="fs_16 fw_600 mt_16">다중 선택</div>
              <div className="mt_7">
                <div className="radio02">
                  <input id="chk00_01" type="checkbox" />
                  <label htmlFor="chk00_01">옵션 1입니다.</label>
                </div>
              </div>
              <div className="mt_7">
                <div className="radio02">
                  <input id="chk00_02" type="checkbox" checked />
                  <label htmlFor="chk00_02">옵션 2입니다.</label>
                </div>
              </div>
              <div className="mt_7">
                <div className="radio02">
                  <input id="chk00_03" type="checkbox" checked />
                  <label htmlFor="chk00_03">기타</label>
                </div>
              </div>

              <div className="fs_16 fw_600 mt_20">단답/장문형</div>
              <ul className="key_val_list mt_14 fs_14">
                <li>
                  <div className="val">
                    저녁이 오면, 세상은 마치 숨을 멈춘 듯 고요해진다. 거리의
                    불빛들이 하나둘 켜지고, 그 불빛 속에는 따뜻한 집들의
                    이야기들이 스며 있다. 바람은 부드럽게 나뭇잎을 흔들고, 그
                    소리는 마치 오래된 친구의 속삭임처럼 들린다.
                    <br />
                    길을 걷다 보면, 지나간 시간의 조각들이 내 발걸음에 맞춰 함께
                    걷는 듯하다. 가끔은 추억이 바람에 실려 오기도 하고, 그리움이
                    어깨에 살며시 내려앉기도 한다.
                  </div>
                </li>
              </ul> */}
              <a
                href={`${import.meta.env.VITE_IMAGE_BASE_URL}/${
                  eventPartyDetail.data.xlsx
                }`}
                style={{
                  backgroundColor: "#1E9EFF",
                  padding: "6px 10px",
                  borderRadius: "5px",
                  display: "block",
                  width: "180px",
                  textAlign: "center",
                  margin: "64px auto 0",
                  fontSize: "16px",
                }}
              >
                참가자 엑셀 다운로드
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventPartyDetailPopup;
