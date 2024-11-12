import { Link, useNavigate } from "react-router-dom";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import useQueryParams from "@/hook/useSearchParams";
import { useForm } from "react-hook-form";
import { BannerType, type CreateBannerForm } from "@/types";
import { useCreateBannerMutation } from "@/api/banner/banner.query";
import BannerDetailForm from "@components/banner/bannerDetailForm";

const AddBannerPage = () => {
  const queryParams = useQueryParams();
  const type = Number(queryParams.get("type")) || 0;
  const navigate = useNavigate();

  const form = useForm<CreateBannerForm>({
    mode: "all",
    defaultValues: {
      type: Number(type) as BannerType,
    },
  });

  const { mutate: createBanner } = useCreateBannerMutation(type as BannerType);

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
      <BannerDetailForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default AddBannerPage;
