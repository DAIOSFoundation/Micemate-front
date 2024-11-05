import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hook/useToast";
import * as z from "zod";
import dayjs from "dayjs";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import LoadingScreen from "@components/shared/LoadingScreen";
import {
  useCompanyAcceptMutation,
  useModifyUserMutataion,
  usePasswordResetMutation,
  useUserDetailQuery,
} from "@/api/users/users.query";
import { telChangeUtilHandler } from "@/util/inputChange";
import { EditUserRequest } from "@/type";
import { useAlret } from "@/hook/useAlret";
import { useConfirm } from "@/hook/useConfirm";
import { confirmState } from "@/store/modalState";
import { useRecoilValue } from "recoil";
import { commonImgUrl } from "@/constants/config";

const schema = z.object({
  contact: z.string().nullable().optional(),
});

const Page = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [tempPwLoading, setTempPwLoading] = useState(false);

  const { openToast } = useToast();
  const { openAlret } = useAlret();
  const { openConfirm } = useConfirm();
  const confirmValue = useRecoilValue(confirmState);
  const {
    data: userDetailData,
    isLoading: userDetailLoading,
    isError: userDetailError,
  } = useUserDetailQuery(id ? Number(id) : undefined);
  const usePasswordReset = usePasswordResetMutation();
  const useModifyUser = useModifyUserMutataion();
  const useCompanyAccept = useCompanyAcceptMutation();

  const getIsAgreeDate = () => {
    const foundAgree = userDetailData?.data?.terms_of_uses?.find(
      (item) => item.id === 2
    );
    return foundAgree ? foundAgree : null; // 기본값 설정
  };

  const getTempPassword = () => {
    if (!userDetailData?.data?.email) return;

    setTempPwLoading(true);
    usePasswordReset.mutate(userDetailData.data.email, {
      onSuccess: () => {
        setTempPwLoading(false);
        openAlret({
          text: "메일로 임시 비밀번호를 발송했습니다.",
        });
      },
      onError: (errors) => {
        console.log(errors);
      },
    });
  };

  // 승인/미승인
  const goAccept = (accept: boolean) => {
    const text = accept ? "승인" : "미승인";
    openConfirm({
      text: `[${
        userDetailData?.data?.name ?? "-"
      }]회원 기업회원으로 전환을 ${text}\n처리 하시겠습니까?`,
      okBtn: "확인",
      type: text,
    });
  };

  useEffect(() => {
    if (confirmValue.confirm === true) {
      useCompanyAccept.mutate(
        {
          id: id ? Number(id) : undefined,
          accept: confirmValue.type === "승인" ? true : false,
        },
        {
          onSuccess: () => {
            openAlret({
              text: `${confirmValue.type} 처리되었습니다.`,
              callback: () => {
                location.reload();
              },
            });
          },
          onError: (errors) => {
            console.log(errors);
          },
        }
      );
    }
  }, [confirmValue.confirm]);

  const onSubmit = handleSubmit((data) => {
    if (!id || !data.contact) return;

    const editData: EditUserRequest = {
      id: id ? Number(id) : undefined,
      modifyData: {
        ...data,
      },
    };
    useModifyUser.mutate(editData, {
      onSuccess: () => {
        openToast("수정되었습니다.");
      },
      onError: (errors) => {
        console.log(errors);
      },
    });
  });

  // 사업자등록번호 다운로드 버튼
  const fileDownload = () => {
    const fileUrl = `${commonImgUrl}/${userDetailData?.data?.company?.company_id_file}`;

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = userDetailData?.data?.company?.company_id_file.split("/").pop() || "download";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a); 
      })
      .catch((error) => {
        console.error("파일 다운로드 오류:", error);
      });
  };

  useEffect(() => {
    if (userDetailData !== undefined && !userDetailLoading) {
      // console.log(userDetailData);
      setValue("contact", userDetailData?.data?.contact ?? "");
    }
  }, [userDetailData, userDetailLoading, setValue]);

  if (userDetailLoading) return <LoadingScreen />;
  if (userDetailError) {
    alert("데이터가 없습니다.");
    window.history.back();
    return null;
  }

  return (
    <>
      {tempPwLoading && (
        <div className="loading_wrap">
          <LoadingScreen />
        </div>
      )}
      <div className="container">
        <div className="history_tit">
          <Link className="item" to="/member/general">
            회원관리
          </Link>
          <Link className="item" to="/member/corporate">
            기업회원 리스트
          </Link>
          <p className="item">기업회원 상세정보</p>
          {userDetailData?.data?.company?.accept === 0 && (
            <i className="btn light_blue small">승인대기</i>
          )}
        </div>
        <SideMenu />

        <div className="cont_area">
          <div className="cont_panel">
            <div className="tit_wrap">
              <h3 className="tit">기본정보</h3>
            </div>
            <form onSubmit={onSubmit}>
              <div className="table_wrap mt_14">
                <table className="type2">
                  <colgroup>
                    <col width="135px" />
                    <col width="*" />
                    <col width="135px" />
                    <col width="*" />
                    <col width="135px" />
                    <col width="182px" />
                    <col width="135px" />
                    <col width="160px" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>이름</th>
                      <td colSpan={3}>{userDetailData?.data?.name ?? "-"}</td>
                      <th>출생년도</th>
                      <td colSpan={3}>{userDetailData?.data?.birth ?? "-"}</td>
                    </tr>
                    <tr>
                      <th>아이디</th>
                      <td colSpan={3}>{userDetailData?.data?.email ?? "-"}</td>
                      <th>성별</th>
                      <td colSpan={3}>
                        {userDetailData?.data?.sex === true
                          ? "여"
                          : userDetailData?.data?.sex === false
                          ? "남"
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>비밀번호</th>
                      <td colSpan={3}>
                        <button
                          className="btn border_w w_136"
                          onClick={getTempPassword}
                          disabled={userDetailData?.data?.company?.accept !== 2}
                        >
                          임시 비밀번호 생성
                        </button>
                      </td>
                      <th>비밀번호 변경일</th>
                      <td colSpan={3}>
                        <span className="col_gray">
                          {userDetailData?.data?.password_updated_at
                            ? dayjs(
                                userDetailData?.data?.password_updated_at
                              ).format("YYYY-MM-DD hh:mm:ss")
                            : "-"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>회원구분</th>
                      <td colSpan={3}>
                        <select className="btn border_w w_136" disabled>
                          <option value="">기업회원</option>
                        </select>
                      </td>
                      <th>회사명</th>
                      <td className="pr_0">
                        {userDetailData?.data?.company?.company_name ?? "-"}
                      </td>
                      <th>기업 전환일</th>
                      <td className="pr_0">
                        <span className="col_gray">
                          {userDetailData?.data?.company?.accepted_at
                            ? dayjs(
                                userDetailData?.data?.company?.accepted_at
                              ).format("YYYY-MM-DD")
                            : "-"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>휴대번호</th>
                      <td colSpan={3}>
                        <input
                          id="contact"
                          className="small w_136"
                          type="text"
                          {...(register && register("contact"))}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            telChangeUtilHandler(e, setValue, "contact");
                          }}
                          disabled={userDetailData?.data?.company?.accept !== 2}
                        />
                        {errors.contact?.message && (
                          <p className="err_msg">
                            {errors.contact?.message?.toString()}
                          </p>
                        )}
                      </td>
                      <th>담당자</th>
                      <td className="pr_0">
                        {userDetailData?.data?.company?.name ?? "-"}
                      </td>
                      <th>소속 부서/ 직책</th>
                      <td className="pr_0">
                        {userDetailData?.data?.company?.department ?? "-"} /{" "}
                        {userDetailData?.data?.company?.position ?? "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>회원가입일</th>
                      <td colSpan={3}>
                        <span className="col_gray">
                          {userDetailData?.data?.created_at
                            ? dayjs(userDetailData?.data?.created_at).format(
                                "YYYY-MM-DD hh:mm:ss"
                              )
                            : "-"}
                        </span>
                      </td>
                      <th>사업자등록번호</th>
                      <td className="pr_0">
                        {userDetailData?.data?.company?.company_id ?? "-"}
                      </td>
                      <th>연락처</th>
                      <td className="pr_0">
                        {userDetailData?.data?.company?.contact ?? "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>사업자등록</th>
                      <td
                        colSpan={
                          userDetailData?.data?.company?.accept === 1 ? 3 : 7
                        }
                      >
                        <div className="dis_flex gap32">
                          <span className="col_gray">
                            {userDetailData?.data?.company
                              ?.company_id_file_name ?? "-"}
                          </span>
                          {userDetailData?.data?.company && (
                            <button
                              type="button"
                              className="btn border_w"
                              onClick={fileDownload}
                            >
                              저장
                            </button>
                          )}
                        </div>
                      </td>
                      {userDetailData?.data?.company?.accept === 1 && (
                        <>
                          <th>탈퇴일</th>
                          <td colSpan={3}>
                            <span className="col_gray">
                              {userDetailData?.data?.deleted_at ?? "-"}
                            </span>
                          </td>
                        </>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tit_wrap mt_44">
                <h3 className="tit">수신동의 및 개인정보 이용 동의</h3>
              </div>
              <div className="table_wrap mt_14">
                <table className="type2">
                  <colgroup>
                    <col width="135px" />
                    <col width="*" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        마케팅 정보 수신
                        <br />
                        동의 (선택)
                      </th>
                      <td className="ver_top">
                        {getIsAgreeDate()?.agree === false
                          ? "동의 이력 없음"
                          : getIsAgreeDate()?.agree === true
                          ? `동의함 (동의일: ${
                              getIsAgreeDate()?.updated_at
                                ? dayjs(getIsAgreeDate()?.updated_at).format(
                                    "YYYY-MM-DD"
                                  )
                                : "-"
                            })`
                          : "-"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="dis_flex justify_between mt_190">
                <div className="btn_wrap"></div>
                <div className="btn_wrap gap23">
                  {userDetailData?.data?.company?.accept === 0 ? (
                    <>
                      <button
                        type="button"
                        className="btn gray"
                        onClick={() => goAccept(false)}
                      >
                        미승인
                      </button>
                      <button
                        type="button"
                        className="btn light_blue"
                        onClick={() => goAccept(true)}
                      >
                        승인
                      </button>
                    </>
                  ) : userDetailData?.data?.company?.accept === 2 ? (
                    <>
                      <Link to="/member/corporate" className="btn blue">
                        취소
                      </Link>
                      <button type="submit" className="btn blue">
                        수정
                      </button>
                    </>
                  ) : (
                    <Link to="/member/corporate" className="btn blue">
                      확인
                    </Link>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
