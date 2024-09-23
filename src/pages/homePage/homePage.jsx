import React from "react";
import HomeBanner from "./components/homeBanner";
import HomeSection1 from "./components/homeSection1";
import HomeSection2 from "./components/homeSection2";

export default function HomePage() {
  return (
    <div>
    <div className="px-[7%]">
      <HomeBanner  />
    </div>
    <div className="pt-[10%] px-[5%]">
      <HomeSection1 />
    </div>
    <div>
      <HomeSection2 />
    </div>
    </div>
  );
}
