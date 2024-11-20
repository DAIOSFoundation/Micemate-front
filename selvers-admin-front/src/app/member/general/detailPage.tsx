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
  useModifyUserMutataion,
  usePasswordResetMutation,
  useUserDetailQuery,
} from "@/api/users/users.query";
import { useCategoryQuery } from "@/api/category/category.query";
import { telChangeUtilHandler } from "@/util/inputChange";
import { EditUserRequest } from "@/type";
import { useUsersEventQuery } from "@/api/events/events.query";
import { dateStringFormatB } from "@/util/stringTransition";
import { useAlret } from "@/hook/useAlret";

const schema = z.object({
  contact: z.string().nullable().optional(),
  interests: z.number().array(),
});

const eventState = [
  { type: "1", text: "신청 행사" },
  { type: "2", text: "취소 내역" },
  { type: "3", text: "관심 행사" },
  { type: "4", text: "지난 행사" },
];

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
  const [isMore, setIsMore] = useState(false);
  const [eventSelected, setEventSelected] = useState(eventState?.[0]?.type);
  const [interestList, setInterestList] = useState<number[]>([]);
  const [tempPwLoading, setTempPwLoading] = useState(false);

  const { openToast } = useToast();
  const { openAlret } = useAlret();
  const { data: categoryData } = useCategoryQuery();
  const {
    data: userDetailData,
    isLoading: userDetailLoading,
    isError: userDetailError,
  } = useUserDetailQuery(id ? Number(id) : undefined);
  const { data: eventData } = useUsersEventQuery(
    id ? Number(id) : undefined,
    eventSelected
  );

  const usePasswordReset = usePasswordResetMutation();
  const useModifyUser = useModifyUserMutataion();

  const getIsAgreeDate = () => {
    const foundAgree = userDetailData?.data?.terms_of_uses?.find(
      (item) => item.id === 2
    );
    return foundAgree ? foundAgree : null; // 기본값 설정
  };

  // 체크박스 클릭 시 값 업데이트
  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedInterestList = checked
      ? [...interestList, id]
      : interestList.filter((v) => v !== id);

    setInterestList(updatedInterestList); // 상태 업데이트
    setValue("interests", updatedInterestList); // 폼 값 업데이트
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

  const onSubmit = handleSubmit((data) => {
    if (!id || (!data.contact && !isMore)) return;

    const editData: EditUserRequest = {
      id: id ? Number(id) : undefined,
      modifyData: {
        interests: data.interests,
      },
    };
    // contact가 있을 경우에만 추가
    if (data.contact) {
      editData.modifyData.contact = data.contact;
    }
    useModifyUser.mutate(editData, {
      onSuccess: () => {
        openToast("수정되었습니다.");
      },
      onError: (errors) => {
        console.log(errors);
      },
    });
  });

  useEffect(() => {
    if (userDetailData !== undefined && !userDetailLoading) {
      setValue("contact", userDetailData?.data?.contact ?? "");
      setValue("interests", userDetailData.data.interests);
      setInterestList(userDetailData.data.interests);
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
          <Link className="item" to="/member/general">
            회원 리스트
          </Link>
          <p className="item">회원 상세정보</p>
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
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>이름</th>
                      <td>{userDetailData?.data?.name ?? "-"}</td>
                      <th>출생년도</th>
                      <td>{userDetailData?.data?.birth ?? "-"}</td>
                    </tr>
                    <tr>
                      <th>아이디</th>
                      <td>{userDetailData?.data?.email ?? "-"}</td>
                      <th>성별</th>
                      <td>
                        {userDetailData?.data?.sex === true
                          ? "여"
                          : userDetailData?.data?.sex === false
                          ? "남"
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>비밀번호</th>
                      <td>
                        <button
                          type="button"
                          className="btn border_w w_136"
                          onClick={getTempPassword}
                        >
                          임시 비밀번호 생성
                        </button>
                      </td>
                      <th>비밀번호 변경일</th>
                      <td>
                        <span className="col_gray">
                          {userDetailData?.data?.password_updated_at
                            ? dayjs(
                                userDetailData?.data?.password_updated_at
                              ).format("YYYY-MM-DD HH:mm:ss")
                            : "-"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>회원구분</th>
                      <td>
                        <select className="btn border_w w_136" disabled>
                          <option value="">일반회원</option>
                        </select>
                      </td>
                      <th></th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>휴대폰번호</th>
                      <td>
                        <input
                          id="contact"
                          className="small w_136"
                          type="text"
                          {...(register && register("contact"))}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            telChangeUtilHandler(e, setValue, "contact");
                          }}
                        />
                        {errors.contact?.message && (
                          <p className="err_msg">
                            {errors.contact?.message?.toString()}
                          </p>
                        )}
                      </td>
                      <th></th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>회원가입일</th>
                      <td>
                        <span className="col_gray">
                          {userDetailData?.data?.created_at
                            ? dayjs(userDetailData?.data?.created_at).format(
                                "YYYY-MM-DD HH:mm:ss"
                              )
                            : "-"}
                        </span>
                      </td>
                      <th></th>
                      <td></td>
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

              {isMore && (
                <div id="moreInfo">
                  <div className="tit_wrap mt_44">
                    <h3 className="tit">추가정보</h3>
                  </div>
                  <div className="table_wrap mt_14">
                    <table className="type2">
                      <colgroup>
                        <col width="135px" />
                        <col width="*" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th className="ver_top">관심분야</th>
                          <td>
                            {categoryData && (
                              <div className="dis_flex row_item_7">
                                {categoryData.map((item) => {
                                  return (
                                    <div
                                      key={item.id}
                                      className="checkbox item"
                                    >
                                      <input
                                        type="checkbox"
                                        id={`checkbox-${item.id}`}
                                        checked={interestList.includes(item.id)}
                                        onChange={(
                                          e: ChangeEvent<HTMLInputElement>
                                        ) => {
                                          handleCheckboxChange(
                                            item.id,
                                            e.target.checked
                                          );
                                        }}
                                      />
                                      <label htmlFor={`checkbox-${item.id}`}>
                                        {item.name}
                                      </label>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            {errors.interests && (
                              <p className="err_msg">
                                {errors.interests?.message?.toString()}
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th className="ver_top">행사 관리</th>
                          <td>
                            <div>
                              <select
                                className="btn border_w w_136"
                                value={eventSelected}
                                onChange={(e) =>
                                  setEventSelected(e.target.value)
                                }
                              >
                                {eventState.map((item) => {
                                  return (
                                    <option
                                      key={item.type}
                                      value={item.type}
                                      // selected={item.type === eventSelected}
                                    >
                                      {item.text}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            {eventData?.data?.items?.length > 0 ? (
                              <div className="table_wrap min_h_300">
                                <table className="type1">
                                  <colgroup>
                                    <col width="130px" />
                                    <col width="240px" />
                                    <col width="" />
                                    <col width="220px" />
                                    <col width="220px" />
                                    <col width="" />
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th>행사번호</th>
                                      <th>행사명</th>
                                      <th></th>
                                      <th>행사 일시</th>
                                      <th>행사 신청일</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {eventData?.data?.items?.map((item) => {
                                      return (
                                        <tr key={item.id}>
                                          <td>{item.id ?? "-"}</td>
                                          <td>{item.title ?? "-"}</td>
                                          <td></td>
                                          <td>
                                            {item.event_start_date &&
                                              dateStringFormatB(
                                                item.event_start_date
                                              )}
                                            {" ~ "}
                                            {item.event_end_date &&
                                              dateStringFormatB(
                                                item.event_end_date
                                              )}
                                          </td>
                                          <td>
                                            {item.date
                                              ? dateStringFormatB(item.date)
                                              : "-"}
                                          </td>
                                          <td></td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <div className="table_wrap min_h_300 pt_22">
                                행사 데이터가 없습니다.
                              </div>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="dis_flex justify_between mt_64">
                <div className="btn_wrap">
                  {!isMore && (
                    <button
                      type="button"
                      className="btn gray"
                      onClick={() => setIsMore(true)}
                    >
                      더보기
                    </button>
                  )}
                </div>
                <div className="btn_wrap gap23">
                  <Link to="/member/general" className="btn blue">
                    취소
                  </Link>
                  <button type="submit" className="btn blue">
                    수정
                  </button>
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
