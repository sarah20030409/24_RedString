import React from "react";
import bgCloud from "../../../assets/imgs/about/AboutBgCloud.webp";
import redLeft from "../../../assets/imgs/about/redStringleft.webp";
import redRight from "../../../assets/imgs/about/redStringRight.webp";
import titleFrame from "../../../assets/imgs/homePage/sction01/section01TextFrame.svg";

export default function AboutSection1() {
  return (
    <div
      className="bg-contain bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${bgCloud})` }}
    >
      <div className="flex justify-center mb-12 max-md:mb-8">
        <div
          data-aos="fade"
          className="bg-contain bg-no-repeat bg-center flex justify-center w-[280px] h-full"
          style={{ backgroundImage: `url(${titleFrame})` }}
        >
          <h1 className="SectionTitle p-[1.5px] m-[2px]">醉 聲</h1>
        </div>
      </div>
      <div>
        <div className="absolute left-0 w-[28%] max-md:w-[50%] max-md:hidden">
          <img src={redLeft} alt="red string" />
        </div>
        <div data-aos="fade">
          <h2 className="PoetryText text-center text-RSgoldDeep leading-10">
            潮汐之間，長退相偎。你我，沈醉於聲。
          </h2>
          <p className="PoetryText text-center leading-10 max-md:leading-8 max-md:px-[5%] ">
            夜晚是夢境的載體，承載著人們心中的嚮往與希望。
            <br />
            我們在月光中細數往事，在星空下編織夢想。
            <br />
            夜幕低垂，思緒如同星光般閃爍，將日間的繁忙與喧囂拋諸腦後，徜徉在屬於自己的夢境之中。
            <br />
            魂牽夢縈；日夜交錯。
            <br />
            在這片黑暗與光明交織的時空中，舉杯，沈睡。
            <br />
            靜謐中，旋律輕柔地流淌，化作夢的呢喃。
            <br />
            映射我們內心深處的渴望與追求，是追尋未來的夢想，是回味過去的美好。
            <br />
            我們在這片寧靜的夜空下，試著觸碰夢的邊緣。隨音樂共舞，與夢相伴，尋找內心深處的光芒。
            <br />
            潮汐之間，長退相偎。
            <br />
            你我，沈醉於聲。
          </p>
        </div>
        <div className="absolute right-0 w-[28%] -bottom-[70%] max-lg:-bottom-[40%] max-lg:opacity-60 max-lg:w-[35%] max-md:hidden">
          <img src={redRight} alt="red string" />
        </div>
      </div>
    </div>
  );
}
