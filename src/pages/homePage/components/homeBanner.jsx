import React from "react";
import topLeftCloud from "../../../assets/imgs/homePage/cloudtop01.webp"
import bgSmoke from "../../../assets/imgs/homePage/BgCloud04.webp"
import bottomCloud from "../../../assets/imgs/homePage/cloudbutton03.webp"
import leftCloud from "../../../assets/imgs/homePage/cloudSvgleft05.webp"
import rightCloud from "../../../assets/imgs/homePage/cloudSvgRight02.webp"
import BigBannerRed from "../../../assets/imgs/homePage/BigBannerRedString.webp"

export default function HomeBanner() {
    return(
        <div className="pt-20 pb-[12%] max-md:pt-[30%]">
        <img src={topLeftCloud} className="absolute left-0 top-1/4 w-1/2 max-lg:w-2/3" alt="RedStringcloud"/>
        <img src={bgSmoke} className="absolute left-0 top-1/2 w-full animate-fadeIn" alt="RedStringcloud"/>
        <img src={bottomCloud} className="absolute left-0 -bottom-[45%] w-full max-lg:-bottom-[8%]" alt="RedStringcloud"/>
        <div>
        <img src={BigBannerRed} className="w-1/2 items-center mx-auto  duration-1500 animate-GettingSmall max-lg:w-2/3 max-md:w-4/5 " alt="RedStringcloud" />
        <div>
        <img src={rightCloud} className="absolute right-16 top-1/3 w-[28%] animate-MoveHorizontal1 hover:blur-[1px] max-lg:w-[35%] max-lg:top-1/4 max-md:w-1/3 max-md:top-[30%]" alt="RedStringcloud"/>
        </div>
        <div>
        <img src={leftCloud} className="absolute left-0 top-2/3 w-[25%]  animate-MoveHorizontal2 hover:blur-[1px] max-lg:w-[33%] max-lg:top-[80%] max-md:top-[70%]" alt="RedStringcloud"/>
        </div>
        </div>
        <div className="pt-24 max-lg:pt-20 " data-aos="fade-up">
            <h1 className="MediumTitle text-white text-center">赤弦獎｜第貳十肆屆紅樓琴緣民歌比賽</h1>
        </div>
        </div>
    )
}