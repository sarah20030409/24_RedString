import React from "react";
import member01 from "../../../assets/imgs/about/teamMembers/member01.webp"
import member02 from "../../../assets/imgs/about/teamMembers/member02.webp"
import member03 from "../../../assets/imgs/about/teamMembers/member03.webp"
import member04 from "../../../assets/imgs/about/teamMembers/member04.webp"
import member05 from "../../../assets/imgs/about/teamMembers/member05.webp"
import member06 from "../../../assets/imgs/about/teamMembers/member06.webp"
import member07 from "../../../assets/imgs/about/teamMembers/member07.webp"
import member08 from "../../../assets/imgs/about/teamMembers/member08.webp"
import member09 from "../../../assets/imgs/about/teamMembers/member09.webp"
import member10 from "../../../assets/imgs/about/teamMembers/member10.webp"
import member11 from "../../../assets/imgs/about/teamMembers/member11.webp"
import member12 from "../../../assets/imgs/about/teamMembers/member12.webp"
import member13 from "../../../assets/imgs/about/teamMembers/member13.webp"

export default function About03Info({memberNum}) {
    const membersImg = [member01,member02,member03,member04,member05,member06,member07,member08,member09,member10,member11,member12,member13]
    const memberJob = ["總召","副召","公關","公關","活動","活動","報名","報名","報名","宣傳","宣傳","美宣","美宣"]
    const memberName = ["顏冠穎","楊詠絮","彭康齊","陳瑋傑","陳威朋","李彥勲","林靖軒","沈旻可","陳柏臻","何侑庭","邱柏荏","林宥丞","范文萁"]

    return(
            <div>
            <img className="w-60 items-center mx-auto max-lg:w-48 max-md:w-[140px]" src={membersImg[memberNum]} alt="red string" />
            <p className="JobText text-center mt-4">{memberJob[memberNum]}</p>
            <p className="MemberText text-center">{memberName[memberNum]}</p>
            </div>
    )
}