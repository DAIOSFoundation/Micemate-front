import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useApplyRegisterAcceptMutation,
  useApplyRegisterGeneralQuery,
  useApplyRegisterStateQuery,
} from "@/api/events/events.query";
import { useConfirm } from "@/hook/useConfirm";
import { useAlret } from "@/hook/useAlret";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { confirmState } from "@/store/modalState";
import PostRejectModal from "@components/page/event/postRejectModal";

const AcceptBtns = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openConfirm } = useConfirm();
  const { openAlret } = useAlret();
  const confirmValue = useRecoilValue(confirmState);
  const [reason, setReason] = useState("");
  const [rejectOpen, setRejectOpen] = useState(false);
  const resetConfirm = useResetRecoilState(confirmState);

  const { data: GeneralData } = useApplyRegisterGeneralQuery(
    id ? Number(id) : undefined
  );
  const { data: RegisterState } = useApplyRegisterStateQuery(
    id ? Number(id) : undefined
  );
  const useApplyRegisterAccept = useApplyRegisterAcceptMutation();

  // 행사 반려/승인
  const onAccept = (type) => {
    const hasAnyFalse = [
      "general",
      "detail",
      "application",
      // "survey",
      // "faq",
    ].some((key) => RegisterState?.data[key] === false);
    if (hasAnyFalse)
      return openAlret({
        text: "작성완료되지 않은 항목이 존재합니다.",
      });

    switch (type) {
      case 0:
        return setRejectOpen(true);
      case 1:
        return openConfirm({
          text: `[${
            GeneralData?.data?.title ?? ""
          }] 게시를 \n승인 처리 하시겠습니까?`,
          okBtn: "확인",
        });
      default:
        return;
    }
  };

  const onModalSubmit = () => {
    const getData = sessionStorage.getItem("EVENT_ACCEPT");
    const storageData = JSON.parse(getData);

    useApplyRegisterAccept.mutate(
      {
        id: id ? Number(id) : undefined,
        data: {
          accept: false,
          reject: storageData
            ? {
                ...storageData?.reject,
                reason: reason,
              }
            : undefined,
        },
      },
      {
        onSuccess: () => {
          openAlret({
            text: `행사가 반려되었습니다.`,
            callback: () => {
              location.reload();
            },
          });
          resetConfirm();
        },
      }
    );
  };

  useEffect(() => {
    if (confirmValue.confirm === true) {
      useApplyRegisterAccept.mutate(
        {
          id: id ? Number(id) : undefined,
          data: {
            accept: true,
          },
        },
        {
          onSuccess: () => {
            openAlret({
              text: `행사가 승인되었습니다.`,
            });
            resetConfirm();
            navigate("/event");
          },
        }
      );
    }
  }, [confirmValue.confirm]);

  return (
    <>
      <div className="btn_wrap gap23">
        <button className="btn gray" onClick={() => onAccept(0)}>
          반려
        </button>
        <button className="btn light_blue" onClick={() => onAccept(1)}>
          승인
        </button>
      </div>

      {rejectOpen && (
        <PostRejectModal
          setOpen={setRejectOpen}
          title={GeneralData?.data?.title ?? ""}
          reason={reason}
          setReason={setReason}
          onSubmit={onModalSubmit}
        />
      )}
    </>
  );
};

export default AcceptBtns;
