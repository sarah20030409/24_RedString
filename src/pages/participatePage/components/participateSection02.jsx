import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import blurBtn from "../../../assets/imgs/BTNbgBlur.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../assets/swiper.css";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import PImg01 from "../../../assets/imgs/participate/participateImg01.webp";
import PImg02 from "../../../assets/imgs/participate/participateImg02.webp";
import PImg03 from "../../../assets/imgs/participate/participateImg03.webp";
import PImg04 from "../../../assets/imgs/participate/participateImg04.webp";
import PImg05 from "../../../assets/imgs/participate/participateImg05.webp";
import PImg06 from "../../../assets/imgs/participate/participateImg06.webp";

export default function ParticipateSection02() {
  return (
    <div className="px-[10%] pt-52 max-md:pt-40">
      <div>
        <h1
          data-aos="fade-up"
          className="SectionTitle text-center tracking-[5px] -mb-[50px]"
        >
          報名流程
        </h1>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper select-none"
      >
        <SwiperSlide>
          <ImgList imgNum={0} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum={1} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum={2} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum={3} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum={4} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgList imgNum={5} />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-14">
        <a
          href="https://line.me/R/ti/p/11FZvoRuwx"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="ButtonStyle"
            style={{ backgroundImage: `url(${blurBtn})` }}
          >
            <p className="ButtonTextStyle">我要報名</p>
          </button>
        </a>
      </div>
    </div>
  );
}

function ImgList({ imgNum }) {
  const participateImgList = [PImg01, PImg02, PImg03, PImg04, PImg05, PImg06];

  return (
    <div className="swiper-zoom-container swiperStyle">
      <img src={participateImgList[imgNum]} alt="赤弦獎" />
    </div>
  );
}
