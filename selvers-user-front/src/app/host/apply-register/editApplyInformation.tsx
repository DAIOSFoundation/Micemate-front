import { useForm, Controller } from "react-hook-form";
import { birthChangeHandler } from "@/util/inputChange";
import { ChangeEvent, useEffect, useState } from "react";
import { delDate, delTime } from "@/util/stringTransition";
import { dateTimeToString } from "@/util/stringTransition";
import DatePicker from "react-datepicker";
import {
  useApplyRegisterRecruitQuery,
  useApplyRegisterRecruitMutation,
  useApplySubmitMutation,
  useApplyRegisterGeneralQuery,
} from "@/api/events/events.query";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { UserInformationRequest } from "@/type";
import { useToast } from "@/hook/useToast";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

const EditApplyInformation = () => {
  const { openToast } = useToast();
  const [submitFinish, setSubmitFinish] = useState(false);
  const navigate = useNavigate();
  const OutletContext = useOutletContext<UserInfoConText>();
  const authInfo = OutletContext.authInfo;
  const { id } = useParams();
  const { data: recruitData } = useApplyRegisterRecruitQuery({
    token: authInfo.token,
    event_id: id,
  });
  const { data: GeneralData } = useApplyRegisterGeneralQuery({
    token: authInfo.token,
    event_id: id,
  });

  const registerRecruit = useApplyRegisterRecruitMutation();
  const ApplySubmit = useApplySubmitMutation();
  const [teamWatch, setTeamWatch] = useState<boolean>();
  const [departmentWatch, setDepartmentWatch] = useState<boolean>();
  const [titleWatch, setTitleWatch] = useState<boolean>();
  const [genderWatch, setGenderWatch] = useState<boolean>();
  const [ageWatch, setAgeWatch] = useState<boolean>();
  const [residenceWatch, setResidenceWatch] = useState<boolean>();

  useEffect(() => {
    setValue(
      "event_start_date",
      delTime(recruitData?.data?.application_start_date)
    );
    setValue(
      "event_start_view",
      delTime(recruitData?.data?.application_start_date)
    );
    setValue(
      "event_start_time",
      delDate(recruitData?.data?.application_start_date)
    );
    setValue(
      "event_end_date",
      delTime(recruitData?.data?.application_end_date)
    );
    setValue(
      "event_end_view",
      delTime(recruitData?.data?.application_end_date)
    );
    setValue(
      "event_end_time",
      delDate(recruitData?.data?.application_end_date)
    );
    setValue(
      "application_type",
      JSON.stringify(recruitData?.data?.application_type)
    );
    setValue("team", recruitData?.data?.information[0].is_set);
    setValue("team_child", recruitData?.data?.information[0].required);
    setValue("department", recruitData?.data?.information[1].is_set);
    setValue("department_child", recruitData?.data?.information[1].required);
    setValue("title", recruitData?.data?.information[2].is_set);
    setValue("title_child", recruitData?.data?.information[2].required);
    setValue("gender", recruitData?.data?.information[3].is_set);
    setValue("gender_child", recruitData?.data?.information[3].required);
    setValue("age", recruitData?.data?.information[4].is_set);
    setValue("age_child", recruitData?.data?.information[4].required);
    setValue("residence", recruitData?.data?.information[5].is_set);
    setValue("residence_child", recruitData?.data?.information[5].required);
  }, [recruitData]);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm();

  const handleDateChange = (
    e: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    birthChangeHandler(e, setValue, value);
  };

  const onSubmit = handleSubmit((data) => {
    // 날짜 유효성 검사
    if (
      data.event_start_date &&
      data.event_end_date &&
      data.event_start_date > data.event_end_date
    ) {
      setError("event_end_date", {
        type: "manual",
        message: "종료 날짜는 시작 날짜 이후여야 합니다.",
      });
      return;
    }

    if (GeneralData?.data?.event_end_date < data.event_end_date) {
      setError("event_end_date", {
        type: "manual",
        message: "모집 기간은 행사 종료일 이후 일 수 없습니다.",
      });
      return;
    }

    const start_time = dateTimeToString(data.event_start_time);
    const end_time = dateTimeToString(data.event_end_time);
    let formData = {};
    if (data.team) formData = { ...formData, 1: data.team_child ?? false };
    if (data.department)
      formData = { ...formData, 2: data.department_child ?? false };
    if (data.title) formData = { ...formData, 3: data.title_child ?? false };
    if (data.gender) formData = { ...formData, 4: data.gender_child ?? false };
    if (data.age) formData = { ...formData, 5: data.age_child ?? false };
    if (data.residence)
      formData = { ...formData, 6: data.residence_child ?? false };

    const requestData = {
      information: formData,
      ...(data.event_start_date &&
        start_time && {
          application_start_date: `${data.event_start_date} ${start_time}`,
        }),
      ...(data.event_end_date &&
        end_time && {
          application_end_date: `${data.event_end_date} ${end_time}`,
        }),

      ...(data.application_type && { application_type: data.application_type }),
    };

    if (submitFinish === true) {
      registerRecruit.mutate(
        {
          token: authInfo.token,
          event_id: id,
          data: requestData,
        },
        {
          onSuccess: () => {
            ApplySubmit.mutate(
              { token: authInfo.token, event_id: id },
              {
                onSuccess: () => {
                  navigate("/host/my/apply-register/edit/finish");
                },
                onError: () => {
                  openToast("작성중인 필드가 있습니다.");
                },
              }
            );
          },
        }
      );
    } else if (submitFinish === false) {
      registerRecruit.mutate(
        {
          token: authInfo.token,
          event_id: id,
          data: requestData,
        },
        {
          onSuccess: () => {
            openToast("저장 되었습니다.");
          },
        }
      );
    }
  });
  console.log(recruitData);
  return (
    <div className="cont_area">
      <div className="cont_panel type2">
        <div className="tit_wrap">
          <h2 className="fs_40 fw_700">모집정보</h2>
        </div>
        <div className="tit_wrap mt_12">
          <h3 className="fs_18">
            행사 신청을 위해 모집 방법 및 수집할 정보를 입력해주세요.
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="tit_wrap mt_62">
            <h3 className="fs_20">
              모집 기간 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div
              className={`w_767 dis_flex gap10 ${
                recruitData?.data?.is_reject?.application_date ? "outline" : ""
              }`}
            >
              <div className="date_inp_wrap flex1">
                <input
                  {...register("event_start_view")}
                  onChange={(e) => handleDateChange(e, "event_start_view")}
                  type="text"
                  className="w_full"
                  placeholder="시작 날짜"
                />
                <label htmlFor="event_start_date"></label>
                <input
                  id="event_start_date"
                  type="date"
                  {...register("event_start_date")}
                  onChange={(e) => setValue("event_start_view", e.target.value)}
                />
              </div>
              <div className="flex1">
                <Controller
                  name="event_start_time"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <DatePicker
                        selected={value}
                        onChange={(data: any) => onChange(data)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        showTimeCaption={false}
                        placeholderText="시작 시간"
                        className="w_full"
                      />
                    </>
                  )}
                />
              </div>
              <div className="date_inp_wrap flex1">
                <input
                  type="text"
                  {...register("event_end_view")}
                  onChange={(e) => handleDateChange(e, "event_end_view")}
                  className="w_full"
                  placeholder="종료 날짜"
                />
                <label htmlFor="event_end_date"></label>
                <input
                  id="event_end_date"
                  type="date"
                  {...register("event_end_date")}
                  onChange={(e) => setValue("event_end_view", e.target.value)}
                />
              </div>
              <div className="flex1">
                <Controller
                  name="event_end_time"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <DatePicker
                        selected={value}
                        onChange={(data: any) => onChange(data)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        showTimeCaption={false}
                        placeholderText="종료 시간"
                        className="w_full"
                      />
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          {errors.event_end_date?.message && (
            <p className="err_msg" style={{ paddingTop: "10px" }}>
              {errors.event_end_date?.message?.toString()}
            </p>
          )}
          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              모집 방법 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="tit_wrap mt_4">
            <h3 className="fs_12">
              단체 신청 진행 시, 선택하신 수집 정보를 기반으로 한 엑셀 양식을
              제공합니다.
            </h3>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div
              className={`dis_flex w_767 gap11 ${
                recruitData?.data?.is_reject?.application_type ? "outline" : ""
              }`}
            >
              <div className="checkbox02 flex1">
                <input
                  id="0"
                  {...register("application_type")}
                  type="radio"
                  name="application_type"
                  value={"0"}
                />
                <label htmlFor="0">개인 신청</label>
              </div>
              <div className="checkbox02 flex1">
                <input
                  id="1"
                  {...register("application_type")}
                  type="radio"
                  name="application_type"
                  value={"1"}
                />
                <label htmlFor="1">단체 신청</label>
              </div>
              <div className="checkbox02 flex1">
                <input
                  id="2"
                  {...register("application_type")}
                  type="radio"
                  name="application_type"
                  value={"2"}
                />
                <label htmlFor="2">개인/단체 신청 모두</label>
              </div>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              수집 정보 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox02 w_767">
              <input id="chk03_1" type="checkbox" disabled={true} checked />
              <label
                htmlFor="chk03_1"
                className={`${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                이름
              </label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox02 w_767">
              <input id="chk03_2" type="checkbox" disabled={true} checked />
              <label
                htmlFor="chk03_2"
                className={`${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                이메일
              </label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox02 w_767">
              <input id="chk03_3" type="checkbox" disabled={true} checked />
              <label
                htmlFor="chk03_3"
                className={`${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                휴대전화 번호
              </label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox_toggle w_767">
              <input
                {...register("team")}
                id="chk03_4"
                type="checkbox"
                className="input"
                value={"1"}
                onChange={(e) => {
                  setTeamWatch(e.target.checked);
                  if (e.target.checked === false) {
                    setValue("team_child", false);
                  }
                }}
              />
              <label
                htmlFor="chk03_4"
                className={`label ${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                소속 (회사/기관/학교명)
              </label>
              <input
                {...register("team_child")}
                type="checkbox"
                className="hide toggle"
                id="team_child"
                disabled={!teamWatch}
              />
              <label htmlFor="team_child" className="required_toggle_btn">
                필수<i></i>
              </label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox_toggle w_767">
              <input
                {...register("department")}
                id="chk03_5"
                type="checkbox"
                className="input"
                value={"2"}
                onChange={(e) => {
                  setDepartmentWatch(e.target.checked);
                  if (e.target.checked === false) {
                    setValue("department_child", false);
                  }
                }}
              />
              <label
                htmlFor="chk03_5"
                className={`label ${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                부서
              </label>
              <input
                {...register("department_child")}
                type="checkbox"
                className="hide toggle"
                id="department_child"
                disabled={!departmentWatch}
              />
              <label htmlFor="department_child" className="required_toggle_btn">
                필수<i></i>
              </label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox_toggle w_767">
              <input
                {...register("title")}
                id="title"
                type="checkbox"
                className="input"
                value={"3"}
                onChange={(e) => {
                  setTitleWatch(e.target.checked);
                  if (e.target.checked === false) {
                    setValue("title_child", false);
                  }
                }}
              />
              <label
                htmlFor="title"
                className={`label ${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                직함
              </label>
              <input
                {...register("title_child")}
                type="checkbox"
                className="hide toggle"
                id="title_child"
                disabled={!titleWatch}
              />
              <label htmlFor="title_child" className="required_toggle_btn">
                필수<i></i>
              </label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox_toggle w_767">
              <input
                {...register("gender")}
                id="chk03_7"
                type="checkbox"
                className="input"
                value={"4"}
                onChange={(e) => {
                  setGenderWatch(e.target.checked);
                  if (e.target.checked === false) {
                    setValue("gender_child", false);
                  }
                }}
              />
              <label
                htmlFor="chk03_7"
                className={`label ${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                성별
              </label>
              <input
                {...register("gender_child")}
                type="checkbox"
                className="hide toggle"
                id="gender_child"
                disabled={!genderWatch}
              />
              <label htmlFor="gender_child" className="required_toggle_btn ">
                필수<i></i>
              </label>
            </div>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox_toggle w_767">
              <input
                {...register("age")}
                id="age"
                type="checkbox"
                className="input"
                value={"5"}
                onChange={(e) => {
                  setAgeWatch(e.target.checked);
                  if (e.target.checked === false) {
                    setValue("age_child", false);
                  }
                }}
              />
              <label
                htmlFor="age"
                className={`label ${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                나이
              </label>
              <input
                {...register("age_child")}
                type="checkbox"
                className="hide toggle"
                id="age_child"
                disabled={!ageWatch}
              />
              <label htmlFor="age_child" className="required_toggle_btn">
                필수<i></i>
              </label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox_toggle w_767">
              <input
                {...register("residence")}
                id="residence"
                type="checkbox"
                className="input"
                value={"6"}
                onChange={(e) => {
                  setResidenceWatch(e.target.checked);
                  if (e.target.checked === false) {
                    setValue("residence_child", false);
                  }
                }}
              />
              <label
                htmlFor="residence"
                className={`label ${
                  recruitData?.data?.is_reject?.application_information
                    ? "outline"
                    : ""
                }`}
              >
                거주 지역
              </label>
              <input
                {...register("residence_child")}
                type="checkbox"
                className="hide toggle"
                id="residence_child"
                disabled={!residenceWatch}
              />
              <label htmlFor="residence_child" className="required_toggle_btn">
                필수<i></i>
              </label>
            </div>
          </div>
          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap"></div>
            <div className="btn_wrap gap23">
              <button
                onClick={() => setSubmitFinish(false)}
                className="btn blue_bor"
              >
                저장
              </button>
              <button
                onClick={() => setSubmitFinish(true)}
                className="btn dark_blue"
              >
                행사 게시
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditApplyInformation;
