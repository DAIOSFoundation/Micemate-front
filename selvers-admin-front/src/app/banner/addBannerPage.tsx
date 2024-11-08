import { Link, useNavigate } from "react-router-dom";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import useQueryParams from "@/hook/useSearchParams";
import { useForm } from "react-hook-form";
import { BannerType, type CreateBannerForm } from "@/types";
import { useCreateBannerMutation } from "@/api/banner/banner.query";

const AddBannerPage = () => {
  const queryParams = useQueryParams();
  const type = Number(queryParams.get("type")) || 0;
  const navigate = useNavigate();

  const { register, watch, handleSubmit } = useForm<CreateBannerForm>({
    mode: "all",
    defaultValues: {
      type: Number(type) as BannerType,
    },
  });
  const { mutate: createBanner } = useCreateBannerMutation(type as BannerType);

  const startDate = watch("start_date");
  const endDate = watch("end_date");

  const onSubmit = (data: CreateBannerForm) => {
    if (!data.img) {
      alert("배너 이미지를 등록해주세요.");
      return;
    }
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("start_date", data.start_date);
    formData.append("end_date", data.end_date);
    formData.append("img", data.img[0]);
    formData.append("url", data.url);
    formData.append("show", data.show.toString());

    createBanner(formData, {
      onSuccess: () => {
        alert("배너 등록이 완료되었습니다.");
        navigate(`/banner?type=${type}`);
      },
      onError: () => {
        alert("배너 등록에 실패하였습니다.");
      },
    });
  };

  return (
    <div className="container">
      <div className="history_tit">
        <Link className="item" to="/banner/main">
          배너관리
        </Link>
        <Link className="item" to="/banner/main">
          {type === 0 ? "메인배너" : "띠배너"}
        </Link>
        <p className="item">추가</p>
      </div>
      <SideMenu />

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
          <div className="dis_flex mt_10">
            <div>
              <input
                type="file"
                id="fileInp01"
                className="hide"
                accept="image/*"
                {...register("img", {
                  required: "배너 이미지를 등록해주세요.",
                })}
              />
              <label htmlFor="fileInp01" className="file_inp">
                {watch("img") ? "1" : "0"} / 1
              </label>
            </div>
          </div>

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
              <input id="chk01" type="checkbox" {...register("show")} />
              <label htmlFor="chk01">노출 안함</label>
            </div>
          </div>

          <div className="dis_flex justify_between mt_64">
            <div className="btn_wrap"></div>
            <div className="btn_wrap gap23">
              <button className="btn blue">취소</button>
              <button className="btn blue" onClick={handleSubmit(onSubmit)}>
                추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBannerPage;
