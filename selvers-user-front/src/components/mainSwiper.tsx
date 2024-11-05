import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MainSwiperWrap } from "./mainSwiperStyle";

type ImgsProps = {
  bannerImgs?: { img: string; url: string }[];
  ImageArr?: string[];
};

const MainSwiper = ({ bannerImgs }: ImgsProps) => {
  const goToLink = (link) => {
    window.open(link);
  };
  return (
    <MainSwiperWrap>
      <Swiper
        slidesPerView={1.05}
        centeredSlides={true}
        spaceBetween={5}
        navigation={true}
        pagination={true}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            spaceBetween: 24,
          },
        }}
        className="main_swiper"
      >
        {bannerImgs &&
          bannerImgs.map((data, index) => {
            return (
              <SwiperSlide key={index} onClick={() => goToLink(data.url)}>
                <figure>
                  <img
                    // src={`https://api-test.micemate.io/storage/${data.img}`}
                    src={data.img}
                    alt={`메인배너_${index}`}
                  />
                </figure>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </MainSwiperWrap>
  );
};

export default MainSwiper;
