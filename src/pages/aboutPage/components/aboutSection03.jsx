import React from "react";
import bgCloud01 from "../../../assets/imgs/about/memberBgCloud01.png"
import bgCloud02 from "../../../assets/imgs/about/memberBgCloud02.png"
import BigRed from "../../../assets/imgs/about/BigRedBgImg.webp"
import About03Info from "./about03Info";

export default function AboutSection03() {
   return(
    <div className="bg-contain bg-no-repeat bg-top mb-48 max-md:mb-40" style={{backgroundImage: `url(${bgCloud01})`}}>
        <div className="bg-contain bg-no-repeat bg-bottom" style={{backgroundImage: `url(${bgCloud02})`}}>
        <div className="pb-40 max-lg:pb-28 max-md:pb-20">
            <p className="SectionTitle tracking-[5px] text-center max-lg:pb-2">籌備團隊</p>
            <p className="TsaiYin text-center pt-1">&#123;采音吉他社&#125;</p>
        </div>
        <div className="bg-contain bg-no-repeat bg-center max-md:bg-cover" style={{backgroundImage: `url(${BigRed})`}}>
            <div data-aos="fade-up" className="MemberDisplaySetup pt-0">
            <About03Info memberNum={0}/>
            <About03Info memberNum={1}/>
            </div>
            <div data-aos="fade-up" className="MemberDisplaySetup">
            <About03Info memberNum={2}/>
            <About03Info memberNum={3}/>
            </div>
            <div data-aos="fade-up" className="MemberDisplaySetup">
            <About03Info memberNum={4}/>
            <About03Info memberNum={5}/>
            </div>
            <div data-aos="fade-up" className="MemberDisplaySetup">
            <About03Info memberNum={6}/>
            <About03Info memberNum={7}/>
            <About03Info memberNum={8}/>
            </div>
            <div data-aos="fade-up" className="MemberDisplaySetup">
            <About03Info memberNum={9}/>
            <About03Info memberNum={10}/>
            </div>
            <div data-aos="fade-up" className="MemberDisplaySetup">
            <About03Info memberNum={11}/>
            <About03Info memberNum={12}/>
            </div>
        </div>
        </div>
    </div>
   ) 
}