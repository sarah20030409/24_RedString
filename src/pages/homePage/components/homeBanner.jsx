import React from "react";
import topLeftCloud from "../../../assets/imgs/homePage/cloudtop01.webp"
import bgSmoke from "../../../assets/imgs/homePage/BgCloud04.webp"
import bottomCloud from "../../../assets/imgs/homePage/cloudbutton03.webp"
import leftCloud from "../../../assets/imgs/homePage/cloudSvgleft05.webp"
import rightCloud from "../../../assets/imgs/homePage/cloudSvgRight02.webp"
import BigBannerRed from "../../../assets/imgs/homePage/BigBannerRedString.webp"

export default function HomeBanner() {
    return(
        <div className="pt-20 pb-[12%] ">
        <img src={topLeftCloud} className="absolute left-0 top-1/4 w-1/2 " alt="RedStringcloud"/>
        <img src={bgSmoke} className="absolute left-0 top-1/2 w-full animate-fadeIn" alt="RedStringcloud"/>
        <img src={bottomCloud} className="absolute left-0 -bottom-[45%] w-full" alt="RedStringcloud"/>
        <div>
        <img src={BigBannerRed} className="w-1/2 items-center mx-auto hover:translate-y-1 transition-all duration-1500 " alt="RedStringcloud" />
        <div>
        <img src={rightCloud} className="absolute right-16 top-1/3 w-[30%] animate-MoveHorizontal1 hover:blur-[1px]" alt="RedStringcloud"/>
        </div>
        <div>
        <img src={leftCloud} className="absolute left-0 top-2/3 w-[25%]  animate-MoveHorizontal2 hover:blur-[1px]" alt="RedStringcloud"/>
        </div>
        </div>
        <div className="pt-24" data-aos="fade-up">
            <h1 className="MediumTitle text-white text-center">赤弦獎｜第貳十肆屆紅樓琴緣民歌比賽</h1>
        </div>
        </div>
    )
}