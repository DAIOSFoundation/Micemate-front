import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { InputTextC } from "@components/form/inputText";
import { InputRadioB } from "@components/form/inputRadio";
import { InputCheckboxA } from "@components/form/inputCheckbox";
import { telChangeUtilHandler, birthChangeHandler } from "@/util/inputChange";
import {
  UserModifyPageWrap,
  UserInfoBox,
  FormTable,
  ButtonArea,
} from "./userModifyPageStyle";
import { Link } from "react-router-dom";
import {
  useMyInformationQuery,
  useMyModifyQuery,
} from "@/api/users/users.query";
import { useCategoryQuery } from "@/api/etc/category.query";
import { ChangeEvent, useEffect, useState } from "react";
import { UserMyModifyRequest } from "@/type";
import { useToast } from "@/hook/useToast";

const EditSchema = z.object({
  password: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
      " 영문,숫자조합 8자리 이상 입력해주세요."
    )
    .optional(),
  contact: z.string().nullable().optional(),
  birth: z.string().trim().date("날짜 형식으로 입력해주세요."),
  gender: z.string(),
  interests: z
    .number()
    .array()
    .min(1, "관심분야를 최소 하나 이상 선택해야 합니다."),
});

const UserModifyPage = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const [interestList, setInterestList] = useState<number[]>([]);
  const category = useCategoryQuery();
  const userGetData = { token: token, user_id: userId };
  const { data: userData } = useMyInformationQuery(userGetData);
  const useMyModify = useMyModifyQuery();
  const { openToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditSchema),
  });

  useEffect(() => {
    if (userData) {
      setInterestList(userData.data.interests);
      setValue("password", userData.data.password);
      setValue("contact", userData.data.contact);
      setValue("birth", userData.data.birth);
      setValue("gender", userData.data.sex ? "woman" : "man");
      setValue("interests", userData.data.interests);
    }
  }, [userData, setValue]);

  // 핸드폰번호 문자금지 하이픈 추가
  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    telChangeUtilHandler(e, setValue, "contact");
  };

  // 생년월일 문자금지 하이픈 추가
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    birthChangeHandler(e, setValue, "birth");
  };

  // 체크박스 클릭 시 값 업데이트
  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedInterestList = checked
      ? [...interestList, id]
      : interestList.filter((v) => v !== id);

    setInterestList(updatedInterestList); // 상태 업데이트
    setValue("interests", updatedInterestList); // 폼 값 업데이트
  };

  // 요청
  const onSubmit = handleSubmit((data) => {
    const gender = () => {
      if (data.gender === "man") {
        return false;
      } else if (data.gender === "woman") {
        return true;
      }
    };

    const EditData: UserMyModifyRequest = {
      token: token,
      user_id: userId,
      modifyData: {
        birth: data.birth,
        sex: gender(),
        interests: data.interests,
      },
    };
    // contact가 있을 경우에만 추가
    if (data.contact) {
      EditData.modifyData.contact = data.contact;
    }

    if (data.password) {
      EditData.modifyData.password = data.password;
    }

    useMyModify.mutate(EditData, {
      onSuccess: () => {
        openToast("저장 되었습니다.");
      },
      onError: (errors) => {
        console.log(errors);
      },
    });
  });

  return (
    <UserModifyPageWrap>
      {userData && (
        <>
          <UserInfoBox>
            <div>
              <span className="label">이름</span>
              <span className="info">{userData.data.name}</span>
            </div>
            <div>
              <span className="label">이메일(ID)</span>
              <span className="info">{userData.data.email}</span>
            </div>
          </UserInfoBox>
          <FormTable onSubmit={onSubmit}>
            <div className="td_form">
              <InputTextC
                label="전화번호"
                type="text"
                id="contact"
                placeholder="전화번호를 입력하세요"
                register={register}
                onChange={handleTelChange}
              />
              {errors.contact?.message && (
                <p className="err_msg">{errors.contact?.message?.toString()}</p>
              )}
            </div>
            <div className="td_form">
              <InputTextC
                label="비밀번호 변경"
                type="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                register={register}
              />
              {errors.password?.message && (
                <p className="err_msg">
                  {errors.password?.message?.toString()}
                </p>
              )}
            </div>
            <div className="radio_box">
              <p className="label">성별</p>
              <InputRadioB
                label="남"
                id="man"
                name="gender"
                register={register}
              />
              <InputRadioB
                label="여"
                id="woman"
                name="gender"
                register={register}
              />
            </div>
            <div className="td_form">
              <InputTextC
                label="생년월일"
                type="text"
                id="birth"
                placeholder="생년월일을 입력하세요"
                register={register}
                onChange={handleDateChange}
              />
              {errors.birth?.message && (
                <p className="err_msg">{errors.birth?.message?.toString()}</p>
              )}
            </div>
            <div className="favorite_box">
              <p className="label">관심분야</p>
              <div className="favorite_list">
                <Controller
                  name="interests"
                  control={control}
                  render={({ field }) => {
                    return (
                      <>
                        {category &&
                          field.value &&
                          category?.data?.map((data) => {
                            return (
                              <InputCheckboxA
                                key={data.id}
                                label={data.name}
                                id={JSON.stringify(data.id)}
                                checked={interestList.includes(data.id)}
                                onChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  handleCheckboxChange(
                                    data.id,
                                    e.target.checked
                                  );
                                }}
                              />
                            );
                          })}
                      </>
                    );
                  }}
                />
              </div>
              {errors.interests?.message && (
                <p className="err_msg">
                  {errors.interests?.message?.toString()}
                </p>
              )}
            </div>

            <ButtonArea>
              <button className="submit_btn">저장</button>
              <Link to="/mypage/user-modify/with-draw">
                마이스 메이트 탈퇴하기
              </Link>
            </ButtonArea>
          </FormTable>
        </>
      )}
    </UserModifyPageWrap>
  );
};

export default UserModifyPage;
