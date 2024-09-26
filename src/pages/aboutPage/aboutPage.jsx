import React from "react";
import TopBanner from "../banner/TopBanner"
import AboutSection1 from "./components/aboutSection1";
import AboutSection02 from "./components/aboutSection02";
import AboutSection03 from "./components/aboutSection03";

export default function AboutPage() {
    return (
        <div>
        <div>
            <TopBanner title={"關於赤弦"}/>
        </div>
        <div>
            <AboutSection1 />
        </div>
        <div>
            <AboutSection02 />
        </div>
        <div>
            <AboutSection03/>
        </div>
        </div>
    );
}