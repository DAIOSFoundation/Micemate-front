import { useNavigate } from "react-router-dom";
import { UseFormReturn } from "react-hook-form";
import { type CreateBannerForm } from "@/types";

interface BannerDetailFormProps {
  form: UseFormReturn<CreateBannerForm>;
  onSubmit: (data: CreateBannerForm) => void;
  type: "create" | "update";
}

const BannerDetailForm = ({ form, onSubmit, type }: BannerDetailFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = form;

  const startDate = watch("start_date");
  const endDate = watch("end_date");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.[0]) {
      setValue("img", files[0] as File, {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="cont_area">
      <div className="cont_panel">
        <div className="tit_wrap">
          <h3 className="tit02">
            배너명 <i className="col_red">*</i>
          </h3>
        </div>
        <div className="dis_flex mt_10">
          <input
            className="w_767"
            type="text"
            placeholder="배너명 입력"
            {...register("title", {
              required: "배너명을 입력해주세요.",
            })}
          />
        </div>

        <div className="tit_wrap mt_25">
          <h3 className="tit02">
            노출일 <i className="col_red">*</i>
          </h3>
        </div>
        <div className="dis_flex mt_10">
          <div className="dis_flex w_767">
            <div className="date_inp_wrap flex1">
              <input
                className="w_full"
                type="text"
                readOnly
                placeholder="노출 시작 날짜"
                value={startDate || ""}
              />
              <label htmlFor="start_date"></label>
              <input
                type="date"
                id="start_date"
                {...register("start_date", {
                  required: "노출 시작 날짜를 입력해주세요.",
                })}
              />
            </div>
            <span className="fs_20">&nbsp;~&nbsp;</span>
            <div className="date_inp_wrap flex1">
              <input
                className="w_full"
                type="text"
                readOnly
                placeholder="노출 종료 날짜"
                value={endDate || ""}
              />
              <label htmlFor="start_end"></label>
              <input
                type="date"
                id="start_end"
                {...register("end_date", {
                  required: "노출 종료 날짜를 입력해주세요.",
                })}
              />
            </div>
          </div>
        </div>

        <div className="tit_wrap mt_25">
          <h3 className="tit02">
            배너 이미지 <i className="col_red">*</i>
          </h3>
        </div>
        <div className="dis_flex mt_10">
          <div className="infomation_blue_box w_767">
            <div className="dis_flex gap5 fs_12 fw_600">
              <i className="info_icon"></i>
              <span>배너 이미지 등록 가이드</span>
            </div>
            <div className="mt_8 fs_12 fw_500 pl_15">
              · 10MB 이하의 JPG, JPEG, PNG 파일
              <br />· 해상도 1920*1080픽셀
            </div>
          </div>
        </div>

        {watch("img")?.[0] && (
          <img
            src={
              watch("img") instanceof FileList && watch("img")?.[0]
                ? URL.createObjectURL(watch("img")?.[0] as File)
                : `${import.meta.env.VITE_IMAGE_BASE_URL}/` +
                  String(watch("img"))
            }
            alt="Preview"
            className="w_767"
            style={{
              height: "300px",
              aspectRatio: "1920 / 1080",
              objectFit: "cover",
              marginTop: "20px",
            }}
          />
        )}
        <div className="dis_flex mt_10">
          <div>
            <input
              type="file"
              id="fileInp01"
              className="hide"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
              {...register("img", {
                required: type === "create" ? "이미지를 선택해주세요." : false,
              })}
            />
            <label htmlFor="fileInp01" className="file_inp">
              {watch("img")?.[0] ? "1" : "0"} / 1
            </label>
          </div>
        </div>

        {errors.img && (
          <p className="fs_12 col_red" style={{ marginTop: "10px" }}>
            {errors.img.message}
          </p>
        )}

        <div className="tit_wrap mt_25">
          <h3 className="tit02">
            URL <i className="col_red">*</i>
          </h3>
        </div>
        <div className="dis_flex mt_10">
          <input
            className="w_767"
            type="text"
            placeholder="URL 입력"
            {...register("url", {
              required: "URL을 입력해주세요.",
            })}
          />
        </div>

        <div className="mt_48">
          <div className="checkbox">
            <input
              id="chk01"
              type="checkbox"
              {...register("show")}
              defaultChecked={false}
            />
            <label htmlFor="chk01">노출 안함</label>
          </div>
        </div>

        <div className="dis_flex justify_between mt_64">
          <div className="btn_wrap"></div>
          <div className="btn_wrap gap23">
            <button className="btn blue" onClick={() => navigate(-1)}>
              취소
            </button>
            <button
              className="btn blue"
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetailForm;
