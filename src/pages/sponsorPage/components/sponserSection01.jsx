import React from "react";
import SponserSingle from "./sponserSingle";
import bgImg01 from "../../../assets/imgs/about/memberBgCloud01.png";
import bgImg02 from "../../../assets/imgs/banner/sponsorBgImg.webp";

export default function SponserSection01() {
  return (
    <div
      className="bg-contain bg-no-repeat bg-top "
      style={{ backgroundImage: `url(${bgImg01})` }}
    >
      <div
        className="bg-contain bg-no-repeat bg-bottom pb-32 px-[10%] max-lg:px-[3%] max-md:px-[1%]"
        style={{ backgroundImage: `url(${bgImg02})` }}
      >
        <h1 className="SectionTitle text-center tracking-[5px] pb-20 max-lg:pb-8 max-md:pb-12">
          贊助廠商
        </h1>
        <div data-aos="fade-up" className="flex justify-center flex-wrap">
          <SponserSingle sponderNum={0} />
          <SponserSingle sponderNum={1} />
          <SponserSingle sponderNum={2} />
          <SponserSingle sponderNum={3} />
          <SponserSingle sponderNum={4} />
          <SponserSingle sponderNum={5} />
          <SponserSingle sponderNum={6} />
          <SponserSingle sponderNum={7} />
          <SponserSingle sponderNum={8} />
          <SponserSingle sponderNum={9} />
          <SponserSingle sponderNum={10} />
        </div>
        <div className="h-1 border-b-[0.5px] border-solid border-RSgoldDeep mx-[10%] mt-[5%] max-lg:mx-[7%] "></div>
        <h1 className="SectionTitle text-center tracking-[5px] pt-24 max-md:pb-7 max-md:pt-20">
          協辦單位
        </h1>
        <div data-aos="fade-up" className="flex justify-center flex-wrap">
          <SponserSingle sponderNum={11} />
          <SponserSingle sponderNum={12} />
          <SponserSingle sponderNum={13} />
        </div>
      </div>
    </div>
  );
}
