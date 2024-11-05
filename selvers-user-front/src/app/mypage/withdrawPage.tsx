import { useState, useEffect } from "react";
import { WithdrawPageWrap } from "./withdrawPageStyle";
import { InputCheckboxA } from "@components/form/inputCheckbox";
import { useMyEventQuery, useMyDeleteMutation } from "@/api/users/users.query";
import { MyEventQueryType } from "@/type";
import { useConfirm } from "@/hook/useConfirm";
import { useAlret } from "@/hook/useAlret";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { confirmState } from "@/store/modalState";
import { useNavigate } from "react-router-dom";
import { userState } from "@/store/userState";

const WithdrawPage = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const useMyDelete = useMyDeleteMutation();
  const { openConfirm } = useConfirm();
  const [confirmA, setConfirmA] = useState(false);
  const resetConfirm = useResetRecoilState(confirmState);
  const logout = useResetRecoilState(userState);
  const confirmValue = useRecoilValue(confirmState);
  const { openAlret } = useAlret();
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(false);
  const [chkState, setChkState] = useState(false);

  const data: MyEventQueryType = {
    token: token,
    user_id: userId,
    type: 1,
    page: 1,
  };

  const useMyEvent = useMyEventQuery(data);

  useEffect(() => {
    if (useMyEvent?.data?.data?.total <= 0 && chkState) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [useMyEvent?.data?.data?.total, chkState]);

  const submitHandler = () => {
    const cancelConfirmData = {
      text: "탈퇴하시겠습니까?",
      okBtn: "확인",
      logout: false,
    };
    openConfirm(cancelConfirmData);
  };

  useEffect(() => {
    setConfirmA(confirmValue.confirm);
  }, [confirmValue.confirm]);

  useEffect(() => {
    if (confirmA === true) {
      const drawData = {
        token: token,
        user_id: userId,
      };
      useMyDelete.mutate(drawData, {
        onSuccess: () => {
          setConfirmA(false);
          resetConfirm();
          logout();
          navigate("/with-draw-finish");
        },
        onError: () => {
          const cancelSuccessData = {
            text: "요청이 실패하였습니다. 다시 시도해 주세요.",
          };
          setConfirmA(false);
          openAlret(cancelSuccessData);
        },
      });
    }
    setConfirmA(confirmValue.confirm);
  }, [confirmA]);

  return (
    <WithdrawPageWrap>
      <div className="title">그 동안 서비스를 이용해주셔서 감사합니다.</div>
      <div className="info_box">
        - 회원탈퇴 신청 시, 회원님 이메일 아이디로 즉시 탈퇴 처리가 진행됩니다.
        <br />
        - 회원가입 시, 입력한 회원정보는 모두 삭제됩니다.
        <br />
        - 회원탈퇴가 완료된 이메일은 본인을 포함한 타인 모두 재사용이나 복구가
        불가능합니다.
        <br />
        - 회원탈퇴 완료 후, 삭제된 행사와 접수내역의 데이터는 복구되지 않습니다.
        <br />- 등록한 행사나 참가한 행사 중에 진행중인 행사가 있을 시, 탈퇴가
        불가능합니다. 행사 내역 삭제나 취소를 후에 탈퇴 부탁드립니다.
      </div>
      <div className="chk_wrap">
        <InputCheckboxA
          label="안내사항을 모두 확인하였으며, 이에 동의합니다."
          id="agree01"
          onChange={(e) => {
            setChkState((e.target as HTMLInputElement).checked);
          }}
        />
      </div>
      <div className="btn_area">
        {useMyEvent?.data?.data?.total > 0 && (
          <span className="err_txt">
            참가한 행사가 존재합니다. &#91;마이페이지 &#62;신청 행사
            내역&#93;에서 취소해주세요.
          </span>
        )}
        <button onClick={submitHandler} disabled={!buttonState}>
          탈퇴하기
        </button>
      </div>
    </WithdrawPageWrap>
  );
};

export default WithdrawPage;
