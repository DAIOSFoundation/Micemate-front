import { Link, useParams, useNavigate } from "react-router-dom";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useApplyRegisterGeneralQuery, useApplyRegisterStateQuery } from "@/api/events/events.query";
import AcceptBtns from "@components/page/event/acceptBtns";
import { useEffect } from "react";

const acceptState = (type: number) => {
  switch (type) {
    case 0:
      return { text: "· 작성중", class: "col_orange" };
    case 1:
      return { text: "· 승인 대기중", class: "col_darkblue" };
    case 2:
      return { text: "· 수정 필요", class: "col_orange" };
    case 3:
      return { text: "· 완료", class: "col_darkblue" };
    default:
      return { text: "· 알 수 없음", class: "col_orange" };
  }
};

const writeState = (type: boolean) => {
  switch (type) {
    case true:
      return { text: "작성완료", class: "col_blue" };
    case false:
      return { text: "작성 전", class: "col_yellow" };
    default:
      return { text: "알 수 없음", class: "col_orange" }; // 예외 처리
  }
};

const writeNav = [
  { title: "기본정보", key: "general", url: "general" },
  { title: "상세페이지", key: "detail", url: "detail" },
  { title: "모집정보", key: "application", url: "information" },
  // TODO : 2차 개발 범위
  { title: "사전설문", key: "survey", url: "survey" },
  { title: "FAQ & 문의", key: "faq", url: "faq" },
];

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: GeneralData } = useApplyRegisterGeneralQuery(
    id ? Number(id) : undefined
  );
  const {
    data: RegisterState,
    isLoading,
    isError,
  } = useApplyRegisterStateQuery(id ? Number(id) : undefined);

  useEffect(() => {
    if (!GeneralData) return sessionStorage.removeItem("EVENT_ACCEPT");

    const getData = sessionStorage.getItem("EVENT_ACCEPT");
    const storageData = JSON.parse(getData);
    let newData;

    if (getData && storageData.id === id)
      newData = {
        id: id,
        reject: {
          ...storageData.reject,
          ...GeneralData?.data?.is_reject,
        },
      };
    else
      newData = {
        id: id,
        reject: {
          ...GeneralData?.data?.is_reject,
        },
      };

    sessionStorage.setItem("EVENT_ACCEPT", JSON.stringify(newData));
  }, [GeneralData]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError || !RegisterState) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  return (
    <div className="container">
      <SideMenu />

      <div className="cont_area">
        <div className="cont_panel type2">
          <div className="tit_wrap">
            <h2 className="fs_40">행사 상세설정</h2>
          </div>
          <div className="tit_wrap mt_12">
            <h3 className="fs_18">행사 등록을 위해 내용을 작성해주세요.</h3>
          </div>

          <div className="tit_wrap mt_44">
            <h3 className="fs_20">행사 등록 준비 상태</h3>
          </div>
          <div className="dis_flex mt_16">
            <div className="border_item w_767">
              <span
                className={`${acceptState(RegisterState?.data?.state).class}`}
              >
                {acceptState(RegisterState?.data?.state).text}
              </span>
            </div>
          </div>

          <div className="tit_wrap mt_26">
            <h3 className="fs_20">작성 항목</h3>
          </div>
          <div className="dis_flex mt_16">
            <div className="w_767">
              <ul className="border_item_list">
                {writeNav.map((item) => (
                  <li
                    key={item.key}
                    onClick={() => navigate(`/event/apply/${id}/${item.url}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="tit">{item.title}</span>
                    <p className="btn gray">
                      {writeState(RegisterState?.data?.[item.key]).text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dis_flex justify_between mt_40">
            <div className="btn_wrap">
              <Link to="/event" className="fs_18 fw_600">
                &lt; 리스트로 돌아가기
              </Link>
            </div>
            <AcceptBtns />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
