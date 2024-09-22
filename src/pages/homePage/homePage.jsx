import React from "react";
import HomeBanner from "./components/homeBanner";
import HomeSection1 from "./components/homeSection1";

export default function HomePage() {
  return (
    <div>
    <div>
      <HomeBanner />
    </div>
    <div className="pt-[10%]">
      <HomeSection1 />
    </div>
    </div>
  );
}
