import { SubBannerWrap } from "@/app/pageStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

interface RibbonBannerProps {
  bannerImgs: { img: string; url: string }[];
}

const RibbonBanner = ({ bannerImgs }: RibbonBannerProps) => {
  const goToLink = (link: string) => {
    window.open(link);
  };
  return (
    <SubBannerWrap>
      <Swiper
        slidesPerView={1}
        allowTouchMove={true}
        pagination={true}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="ribbon_swiper"
      >
        {bannerImgs &&
          bannerImgs.map((data, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => goToLink(data.url)}
                style={{ cursor: data.url ? "pointer" : "default" }}
              >
                <figure>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${data.img}`}
                    alt={`리본배너_${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      aspectRatio: "1920/360",
                    }}
                  />
                </figure>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </SubBannerWrap>
  );
};

export default RibbonBanner;
