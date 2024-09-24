import React from "react";
import footerCloud from "../../../assets/imgs/footer/footerCloud.png"
import IGicon from "../../../assets/imgs/footer/IG.svg"
import FBicon from "../../../assets/imgs/footer/FB.svg"
import YTicon from "../../../assets/imgs/footer/YT.svg"

export default function Footer(){
    return(
        <div className=" bg-right bg-contain bg-no-repeat overflow-hidden" style={{backgroundImage: `url(${footerCloud})`}}>
            <div className="border-y-[0.7px] border-solid border-RSgoldLight flex justify-between items-end py-10 px-[10%] max-md:block " >
                <div data-aos="fade-right">
                    <p className="footerText py-1 ">總召 顏冠穎 0986-810-518</p>
                    <p className="footerText py-1">副召 楊詠絮 0933-216-521</p>
                    <p className="footerText pt-6">公關</p>
                    <p className="footerText py-1">陳瑋傑 0968-111-624</p>
                    <p className="footerText py-1">彭康齊 0983-703-961</p>
                    <p className="footerText pt-6">赤弦獎官方gmail : ntutredstring@gmail.com</p>
                </div>
                <div className="flex justify-center  place-items-end max-md:justify-start max-md:pt-10" data-aos="fade-left">
                    <a href="https://www.instagram.com/redstring_24th?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img className="w-10" src={IGicon} alt="Red String" /></a>
                    <a href="https://www.facebook.com/NTUT.TsaiYin.RedString?locale=zh_TW" target="_blank" rel="noreferrer"><img className="mx-5 w-10" src={FBicon} alt="Red String" /></a>
                    <a href="https://www.youtube.com/@ntut1272" target="_blank" rel="noreferrer"><img className="w-10" src={YTicon} alt="Red String" /></a>
                </div>
            </div>
            <div>
                <h2 className="footerText text-center bg-RSredDeep py-5">Copyright © 2024 采音吉他社. All rights reserved.</h2>
            </div>
        </div>
    )
}