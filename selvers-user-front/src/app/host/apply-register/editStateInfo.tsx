import {
  useParams,
  useOutletContext,
  Link,
  useNavigate,
} from "react-router-dom";
import { UserInformationRequest } from "@/type";
import {
  useApplyRegisterStateQuery,
  useApplyRegisterSurveyMutation,
  useApplyRegisterFaqMutation,
  useApplySubmitMutation,
} from "@/api/events/events.query";
//1차개발 임시
import { useMyInformationQuery } from "@/api/users/users.query";
//1차개발 임시
import LoadingScreen from "@components/shared/LoadingScreen";
import ApplyPreview from "@/components/host/applyPreview";
import { useEffect, useState } from "react";
import { useToast } from "@/hook/useToast";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

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
      return { text: "-", class: "col_blue" };
  }
};

const writeNav = [
  { title: "기본정보", key: "general" },
  { title: "상세페이지", key: "detail" },
  { title: "모집정보", key: "application" },
  // { title: "사전설문", key: "survey", url: "survey" },
  // { title: "FAQ & 문의", key: "faq", url: "faq" },
];

const EditStateInfo = () => {
  //1차개발 임시
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const { data: userData } = useMyInformationQuery({
    token: token,
    user_id: userId,
  });
  const useApplyRegisterSurvey = useApplyRegisterSurveyMutation();
  const useApplyRegisterFaq = useApplyRegisterFaqMutation();
  //1차개발 임시
  const useApplySubmit = useApplySubmitMutation();
  const OutletContext = useOutletContext<UserInfoConText>();
  const authInfo = OutletContext.authInfo;
  const { id } = useParams();
  const [preview, setPreview] = useState(false);
  const { openToast } = useToast();
  const navigate = useNavigate();

  const {
    data: RegisterState,
    isLoading,
    isError,
  } = useApplyRegisterStateQuery({
    token: authInfo.token,
    event_id: id,
  });
  console.log(RegisterState);
  //1차개발 임시
  useEffect(() => {
    if (userData) {
      useApplyRegisterSurvey.mutate({
        token: authInfo.token,
        event_id: id,
        data: { is_survey: false },
      });
      useApplyRegisterFaq.mutate({
        token: authInfo.token,
        event_id: id,
        data: {
          is_FAQ: false,
          contact_name: userData.data.company.name,
          contact_email: userData.data.email,
          contact_number: userData.data.company.contact,
        },
      });
    }
  }, [userData]);
  //1차개발 임시

  const submitHandler = () => {
    useApplySubmit.mutate(
      { token: token, event_id: id },
      {
        onSuccess: () => {
          navigate("/host/my/apply-register/edit/finish");
        },
        onError: () => {
          openToast("작성중인 필드가 있습니다.");
        },
      }
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError || !RegisterState) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  return (
    <div className="cont_area">
      <div className="cont_panel type2">
        <div className="tit_wrap">
          <h2 className="fs_40 fw_700">행사 상세설정</h2>
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
            <p className="fs_12 fw_500">
              아래의 필수 항목들이 모두 작성 완료 상태로 바뀌면 [제출하기]를
              누룰 수 있습니다.
            </p>
          </div>
        </div>

        <div className="tit_wrap mt_26">
          <h3 className="fs_20">작성 항목</h3>
        </div>
        <div className="dis_flex mt_16">
          <div className="w_767">
            <ul className="border_item_list">
              {writeNav.map((item) => (
                <li className="blue" key={item.key}>
                  <span className="tit">{item.title}</span>
                  {RegisterState?.data?.state === 0 &&
                    RegisterState?.data?.[item.key] === true && (
                      <span className={`state col_blue`}>작성 완료</span>
                    )}
                  {RegisterState?.data?.state === 1 &&
                    RegisterState?.data?.[item.key] === true && (
                      <span className={`state col_blue`}>작성 완료</span>
                    )}
                  {RegisterState?.data?.state === 2 &&
                    RegisterState?.data?.[item.key] === true && (
                      <span className={`state col_blue`}>작성 완료</span>
                    )}
                  {RegisterState?.data?.state === 3 &&
                    RegisterState?.data?.[item.key] === true && (
                      <span className={`state col_blue`}>작성 완료</span>
                    )}
                  {RegisterState?.data?.state === 0 &&
                    RegisterState?.data?.[item.key] === false && (
                      <span className={`state col_yellow`}>작성 중</span>
                    )}
                  {RegisterState?.data?.state === 1 &&
                    RegisterState?.data?.[item.key] === false && (
                      <span className={`state col_yellow`}>작성 전</span>
                    )}
                  {RegisterState?.data?.state === 2 &&
                    RegisterState?.data?.[item.key] === false && (
                      <span className={`state col_yellow`}>수정 중</span>
                    )}
                  <Link
                    to={`/host/my/apply-register/edit/${id}/${item.key}`}
                    className="btn gray"
                  >
                    작성하기
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dis_flex justify_between mt_40">
          <div className="btn_wrap"></div>
          <div className="btn_wrap gap23">
            <Link
              to={`/host/${id}/priview`}
              target="_blank"
              className="btn blue_bor"
            >
              미리보기
            </Link>
            <button onClick={submitHandler} className="btn dark_blue">
              제출하기
            </button>
          </div>
        </div>
      </div>
      {preview && <ApplyPreview target={id} setClose={setPreview} />}
    </div>
  );
};

export default EditStateInfo;
