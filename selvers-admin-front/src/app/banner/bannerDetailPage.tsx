import { Link, useNavigate, useParams } from "react-router-dom";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import {
  useGetBannerDetail,
  useUpdateBannerMutation,
} from "@/api/banner/banner.query";
import { useForm } from "react-hook-form";
import { CreateBannerForm } from "@/types";
import BannerDetailForm from "@components/banner/bannerDetailForm";
import { useEffect } from "react";
import { AxiosError } from "axios";
import useQueryParams from "@/hook/useSearchParams";

const Page = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  const type = queryParams.get("type");
  const { id } = useParams();
  const { data } = useGetBannerDetail(Number(id));
  const form = useForm<CreateBannerForm>({
    mode: "all",
  });

  const { mutate: updateBanner } = useUpdateBannerMutation(Number(id));

  const onSubmit = (data: CreateBannerForm) => {
    const formData = new FormData();

    if (data.img instanceof FileList) {
      formData.append("img", data.img[0]);
    }

    formData.append("title", data.title);
    formData.append("start_date", data.start_date);
    formData.append("end_date", data.end_date);
    formData.append("url", data.url);
    formData.append("show", (!data.show).toString());

    updateBanner(formData, {
      onSuccess: () => {
        alert("배너 수정이 완료되었습니다.");
        navigate("/banner/main");
      },
      onError: (error: AxiosError<{ message: string }>) => {
        if (error?.response?.data.message === "Not available image size") {
          alert("이미지의 크기가 올바르지 않습니다.");
        } else {
          alert("배너 수정에 실패하였습니다.");
        }
      },
    });
  };

  useEffect(() => {
    if (data) {
      form.reset({
        title: data.data.title,
        start_date: data.data.start_date,
        end_date: data.data.end_date,
        url: data.data.url,
        show: !data.data.show,
        img: data.data.img,
      });
    }
  }, [form, data]);

  return (
    <div className="container">
      <div className="history_tit">
        <Link className="item" to={`/banner?type=${type}`}>
          배너관리
        </Link>
        <Link className="item" to={`/banner?type=${type}`}>
          {type === "0" ? "메인배너" : "띠배너"}
        </Link>
        <p className="item">수정</p>
      </div>
      <SideMenu />
      <BannerDetailForm type="update" form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default Page;
