import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ChangeEvent, useEffect, useState } from "react";
import { useCompanyCorporateMutation } from "@/api/users/users.query";
import { telChangeUtilHandler } from "@/util/inputChange";
import { useNavigate } from "react-router-dom";

const corporateSchema = z
  .object({
    company_name: z.string().trim().min(1, "회사명을 입력해주세요."),
    company_id_01: z.string().trim().min(3),
    company_id_02: z.string().trim().min(2),
    company_id_03: z.string().trim().min(5),
    company_id_file: z
      .any()
      .refine((file) => file && file[0].size > 0, {
        message: "사업자 등록증을 첨부해주세요.",
      })
      .refine(
        (file) => {
          const allowedTypes = ["image/png", "application/pdf"];
          return (
            file &&
            file[0] &&
            allowedTypes.some((type) => file[0].type.startsWith(type))
          );
        },
        {
          message: "pdf또는 png파일로 업로드 해주세요.",
        }
      ),
    name: z.string().trim().min(1, "담당자 이름을 입력해주세요."),
    department: z.string().trim().min(1, "소속 부서를 입력해주세요."),
    position: z.string().trim().min(1, "직책을 입력해주세요."),
    contact: z.string().trim().min(1, "연락처를 입력해주세요."),
  })
  .refine(
    (data) =>
      data.company_id_01.length >= 3 &&
      data.company_id_02.length >= 2 &&
      data.company_id_03.length >= 5,
    {
      message: "사업자 등록 번호를 입력해주세요.",
      path: ["company_id"],
    }
  );

const CorporatePage = () => {
  const [fileName, setFileName] = useState("");
  const useCompanyCorporate = useCompanyCorporateMutation();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate();
  const [companyFile, setCompanyFile] = useState<File>(null);

  // 핸드폰번호 문자금지 하이픈 추가
  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    telChangeUtilHandler(e, setValue, "contact");
  };

  const numberMaxLengthCheck = (
    e: ChangeEvent<HTMLInputElement>,
    maxValue: number
  ) => {
    if (maxValue && maxValue < Number(e.target.value)) {
      e.target.value = e.target.value.slice(0, maxValue);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(corporateSchema),
  });

  // 사업자등록증 파일 핸들러
  const fileNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files[0];
      if (files) {
        setCompanyFile(files);
        setFileName(files.name);
      }
    }
  };

  console.log(watch("company_id_file"));

  // useEffect(() => {
  //   if (companyFile) {
  //     setValue("company_id_file", [companyFile]);
  //   }
  // }, [companyFile, setValue]);

  useEffect(() => {
    setValue("file_name_view", fileName);
  }, [fileName, setValue]);

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    // 회사 정보 추가
    formData.append("company_name", data.company_name);
    formData.append(
      "company_id",
      `${data.company_id_01}-${data.company_id_02}-${data.company_id_03}`
    );

    formData.append("company_id_file", companyFile);

    formData.append("name", data.name);
    formData.append("department", data.department);
    formData.append("position", data.position);
    formData.append("contact", data.contact);

    // API 호출
    useCompanyCorporate.mutate(
      { token, user_id: userId, formData },
      {
        onSuccess: () => {
          navigate("/host/corporate/finish", { replace: true });
        },
        onError: (error) => {
          console.error("Submission failed: ", error);
        },
      }
    );
  });

  return (
    <div className="container">
      <div className="login_pagi">
        <form onSubmit={onSubmit} className="inner">
          <div className="login_tit">
            <span>행사등록을 위해 추가정보를 입력해주세요</span>
          </div>
          <div className="login_inp">
            <p className="fs_16 fw_500">회사명</p>
            <input
              type="text"
              className="w_full mt_12"
              placeholder="회사명 입력"
              {...register("company_name")}
            />
            {errors.company_name?.message && (
              <p className="err_msg mt_8">
                {errors.company_name?.message?.toString()}
              </p>
            )}
            <p className="fs_16 fw_500 mt_25">사업자등록번호</p>
            <div className="mt_12 dis_flex gap21">
              <input
                type="number"
                className="w_96"
                {...register("company_id_01")}
                maxLength={3}
                onChange={(e) => numberMaxLengthCheck(e, 3)}
              />
              <input
                type="number"
                className="w_72"
                {...register("company_id_02")}
                maxLength={2}
                onChange={(e) => numberMaxLengthCheck(e, 2)}
              />
              <input
                type="number"
                className="w_72 flex1"
                {...register("company_id_03")}
                maxLength={5}
                onChange={(e) => numberMaxLengthCheck(e, 5)}
              />
            </div>
            {errors.company_id?.message && (
              <p className="err_msg mt_8">
                {errors.company_id?.message?.toString()}
              </p>
            )}
            <p className="fs_16 fw_500 mt_25">
              사업자등록증&nbsp;
              <span className="col_green fs_12">
                *pdf 또는 png 파일로 업로드 해주세요.
              </span>
            </p>
            <div className="mt_12 dis_flex gap21">
              <input
                type="text"
                placeholder="파일을 업로드 해주세요."
                {...register("file_name_view")}
                style={{ width: "100%" }}
                className="flex1 type_w"
                disabled
              />
              <input
                id="company_id_file"
                type="file"
                accept="image/png, .pdf"
                multiple={false}
                {...register("company_id_file")}
                onChange={(e) => {
                  fileNameHandler(e);
                }}
                className="hide"
              />
              <label
                htmlFor="company_id_file"
                className="w_72 btn dark_blue fs_14"
                style={{ minWidth: "72px" }}
              >
                업로드
              </label>
            </div>
            {errors.company_id_file?.message && (
              <p className="err_msg mt_8">
                {errors.company_id_file?.message?.toString()}
              </p>
            )}
            <p className="fs_16 fw_500 mt_25">담당자 이름</p>
            <input
              type="text"
              className="w_full mt_12"
              placeholder="성함"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="err_msg mt_8">{errors.name?.message?.toString()}</p>
            )}
            <div
              className="dis_flex gap20 mt_25"
              style={{ alignItems: "flex-start" }}
            >
              <div className="flex1">
                <p className="fs_16 fw_500">소속 부서</p>
                <input
                  type="text"
                  className="w_full mt_12"
                  placeholder="소속 부서"
                  {...register("department")}
                />
                {errors.department?.message && (
                  <p className="err_msg mt_8">
                    {errors.department?.message?.toString()}
                  </p>
                )}
              </div>
              <div className="flex1">
                <p className="fs_16 fw_500">직책</p>
                <input
                  type="text"
                  className="w_full mt_12"
                  placeholder="직책"
                  {...register("position")}
                />
                {errors.position?.message && (
                  <p className="err_msg mt_8">
                    {errors.position?.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <p className="fs_16 fw_500 mt_25">연락처</p>
            <input
              type="text"
              className="w_full mt_12"
              placeholder="핸드폰 번호 입력"
              {...register("contact")}
              onChange={handleTelChange}
            />
            {errors.contact?.message && (
              <p className="err_msg mt_8">
                {errors.contact?.message?.toString()}
              </p>
            )}
          </div>

          <div className="btn_wrap mt_32">
            <button
              type="submit"
              className="btn dark_blue fs_14"
              // disabled={!isValid}
            >
              제출
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CorporatePage;
