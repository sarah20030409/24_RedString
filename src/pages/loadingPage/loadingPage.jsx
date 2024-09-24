import React from "react";
import OpenTitle from "../../assets/imgs/homePage/OpenTitle.svg"

export default function LoadingPage(){
    return(
        <div className="bg-black h-screen flex justify-center items-center ">
            <div className="animate-fadeInOut max-lg:-mt-[140px] max-md:-mt-[100px]">
            <img src={OpenTitle} alt="醉聲" className="scale-75 max-md:scale-[70%]"/>
            <h1 className="SmallTitle tracking-[5px] font-light text-RSredDeep text-center" data-aos="fade-up">24rd Red String</h1>
        </div>
        </div>
    )
}