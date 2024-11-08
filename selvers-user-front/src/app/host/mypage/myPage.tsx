import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect, ChangeEvent } from "react";
import {
  useMyInformationQuery,
  useMyModifyQuery,
} from "@/api/users/users.query";
import { useCategoryQuery } from "@/api/etc/category.query";
import { useToast } from "@/hook/useToast";
import { birthChangeHandler, telChangeUtilHandler } from "@/util/inputChange";
import { UserMyModifyRequest } from "@/type";
import { Link } from "react-router-dom";

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

const MyPage = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const category = useCategoryQuery();
  const [interestList, setInterestList] = useState<number[]>([]);
  const useMyModify = useMyModifyQuery();
  const { openToast } = useToast();
  const { data: userData } = useMyInformationQuery({
    token: token,
    user_id: userId,
  });

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
      setValue("contact", userData.data.company.contact);
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
      onError: () => {
        openToast("저장 실패, 다시 시도해 주세요.");
      },
    });
  });

  return (
    <div className="cont_area">
      <div className="history_tit">
        <a className="item" href="#none">
          내 정보 수정
        </a>
      </div>
      <div className="cont_panel type2">
        <div className="table_wrap">
          <table className="w_880 type5">
            <colgroup>
              <col width="121px" />
              <col width="*" />
              <col width="158px" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>이름</th>
                <td>{userData?.data?.name}</td>
                <th>사업자등록번호</th>
                <td>{userData?.data?.company?.company_id}</td>
              </tr>
              <tr>
                <th>아이디</th>
                <td>{userData?.data?.email}</td>
                <th>소속 부서/직책</th>
                <td>{userData?.data?.company?.department}</td>
              </tr>
              <tr>
                <th>기업명</th>
                <td>{userData?.data?.company?.company_name}</td>
                <th>연락처</th>
                <td>{userData?.data?.company?.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={onSubmit}>
          <div className="tit_wrap mt_44">
            <h3 className="fs_18">전화번호</h3>
          </div>
          <div className="table_wrap mt_10">
            <input
              type="text"
              {...register("contact")}
              onChange={handleTelChange}
              className="w_412"
            />
          </div>
          <div className="tit_wrap mt_24">
            <h3 className="fs_18">비밀번호 변경</h3>
          </div>
          <div className="table_wrap mt_10">
            <input
              type="password"
              {...register("password")}
              className="w_412"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <div className="dis_flex mt_36">
            <h3 className="fs_18">성별</h3>
            <div className="dis_flex ml_86 gap32">
              <div className="radio item">
                <input
                  id="man"
                  value="man"
                  {...register("gender")}
                  type="radio"
                  name="gender"
                />
                <label htmlFor="man">남</label>
              </div>
              <div className="radio item">
                <input
                  id="woman"
                  value="woman"
                  {...register("gender")}
                  type="radio"
                  name="gender"
                />
                <label htmlFor="woman">여</label>
              </div>
            </div>
          </div>

          <div className="tit_wrap mt_20">
            <h3 className="fs_18">생년월일</h3>
          </div>
          <div className="table_wrap mt_10">
            <input
              type="text"
              {...register("birth")}
              onChange={handleDateChange}
              className="w_412"
            />
          </div>

          <div className="tit_wrap mt_29">
            <h3 className="fs_18">관심분야</h3>
          </div>
          <div className="dis_flex row_item_7 mt_24">
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
                          <div className="checkbox item" key={data.id}>
                            <input
                              id={JSON.stringify(data.id)}
                              checked={interestList.includes(data.id)}
                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                handleCheckboxChange(data.id, e.target.checked);
                              }}
                              type="checkbox"
                            />
                            <label htmlFor={JSON.stringify(data.id)}>
                              {data.name}
                            </label>
                          </div>
                        );
                      })}
                  </>
                );
              }}
            />
            {}
          </div>
          {errors.interests?.message && (
            <p className="err_msg" style={{ paddingTop: "20px" }}>
              {errors.interests?.message?.toString()}
            </p>
          )}
          <div className="dis_flex justify_between mt_64">
            <div className="btn_wrap">
              <Link
                to="/mypage/user-modify/with-draw"
                className="col_gray underline"
              >
                마이스 메이트 탈퇴하기
              </Link>
            </div>
            <div className="btn_wrap gap23">
              <button className="btn blue">저장</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
