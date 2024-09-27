import React from "react";
import topLeftCloud from "../../../assets/imgs/homePage/cloudtop01.webp";
import bgSmoke from "../../../assets/imgs/homePage/BgCloud04.webp";
import bottomCloud from "../../../assets/imgs/homePage/cloudbutton03.webp";
import leftCloud from "../../../assets/imgs/homePage/cloudSvgleft05.webp";
import rightCloud from "../../../assets/imgs/homePage/cloudSvgRight02.webp";
import BigBannerRed from "../../../assets/imgs/homePage/BigBannerRedString.webp";

export default function HomeBanner() {
  return (
    <div className="pt-20 pb-[12%]  max-md:pt-[25%]">
      <img
        src={topLeftCloud}
        className="absolute left-0 top-1/4 w-1/2 max-lg:w-2/3"
        alt="RedStringcloud"
      />
      <img
        src={bgSmoke}
        className="absolute left-0 top-1/2 w-full animate-fadeIn"
        alt="RedStringcloud"
      />
      <img
        src={bottomCloud}
        className="absolute left-0 -bottom-[45%] w-full max-lg:-bottom-[8%] max-md:bottom-[15%] max-sm:bottom-[15%]"
        alt="RedStringcloud"
      />
      <div>
        <img
          data-aos="fade"
          src={BigBannerRed}
          className="w-1/2 items-center mx-auto  duration-1500 animate-GettingSmall max-lg:w-2/3 max-md:w-[85%] "
          alt="RedStringcloud"
        />
        <div>
          <img
            src={rightCloud}
            className="absolute right-16 top-72 w-[28%] animate-MoveHorizontal1 hover:blur-[1px] max-lg:top-64 max-md:top-[33%]"
            alt="RedStringcloud"
          />
        </div>
        <div>
          <img
            src={leftCloud}
            className="absolute left-0 top-[600px] w-[25%]  animate-MoveHorizontal2 hover:blur-[1px] max-lg:top-[450px] max-md:top-[65%]"
            alt="RedStringcloud"
          />
        </div>
      </div>
      <div data-aos="fade-up" className="pt-24 max-lg:pt-20 max-xs:pt-10">
        <h1 className="MediumTitle text-white text-center ">
          赤弦獎｜第貳十肆屆紅樓琴緣民歌比賽
        </h1>
      </div>
    </div>
  );
}
