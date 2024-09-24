import React from "react";
import smokeCloud from "../../assets/imgs/homePage/BgCloud04.webp"
import bannerCloud from "../../assets/imgs/banner/bannerCloud.png"
import redCircle from "../../assets/imgs/banner/RedCircle.png"

export default function TopBanner({title}) {
    return(
        <div className="bg-cover bg-no-repeat bg-center py-[5%]" style={{backgroundImage: `url(${smokeCloud})`}}>
            <div className="bg-contain bg-no-repeat bg-center " style={{backgroundImage: `url(${bannerCloud})`}}>
            <div data-aos="fade-up" className="flex justify-center bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${redCircle})`}}>
        <h1 className="BannerTitle py-36 pl-4">{title}</h1>                
            </div>
            </div>
        </div>
    )
}