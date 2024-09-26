import React from "react";
import bgCloud from "../../../assets/imgs/about/memberBgCloud01.png"
import blurBtn from "../../../assets/imgs/BTNbgBlur.webp"
import titleFrame from "../../../assets/imgs/participate/textFrame.svg"
import pdf01 from "../../../assets/pdf/pdf01.pdf"
import pdf02 from "../../../assets/pdf/pdf02.pdf"


export default function ParticipateSection01() {
    return(
        <div>
            <div className="bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgCloud})` }}>
                <div className="flex justify-center pb-14 max-md:pb-8">
                <div data-aos="fade" className="bg-contain bg-no-repeat bg-center flex justify-center w-[390px] p-1 m-1" style={{ backgroundImage: `url(${titleFrame})` }}>
                <h1 className="SectionTitle tracking-[5px]">24屆赤弦獎參賽簡章</h1>
                </div>
                </div>
                <div className="flex justify-center">
                <a href={pdf01} download="參賽簡章.pdf"><button className="ButtonStyle" style={{ backgroundImage: `url(${blurBtn})` }} ><p className="ButtonTextStyle">點擊下載</p></button></a>
                </div>

                <div className="flex justify-center pb-14 mt-32 max-md:pb-8 max-md:mt-24">
                <div data-aos="fade" className="bg-contain bg-no-repeat bg-center flex justify-center w-[410px] p-1 m-1" style={{ backgroundImage: `url(${titleFrame})` }}>
                <h1 className="SectionTitle tracking-[3px]">24屆赤弦獎初賽報名須知</h1>
                </div>
                </div>
                <div className="flex justify-center">
                <a href={pdf02} download="報名須知.pdf"><button  className="ButtonStyle" style={{ backgroundImage: `url(${blurBtn})` }} ><p className="ButtonTextStyle">點擊下載</p></button></a>
                </div>
            </div>
        </div>
    )
}