import React from "react";
import aboutImg01 from "../../../assets/imgs/about/Aboutimg01.webp"
import aboutImg02 from "../../../assets/imgs/about/Aboutimg02.webp"
import aboutImg03 from "../../../assets/imgs/about/Aboutimg03.webp"
import aboutImg01RWD from  "../../../assets/imgs/about/Aboutimg01-RWD.webp"
import aboutImg02RWD from  "../../../assets/imgs/about/Aboutimg02-RWD.webp"
import aboutImg03RWD from  "../../../assets/imgs/about/Aboutimg03-RWD.webp"

export default function About02Info({number}) {
    const title = ["宗旨","目標","關於采音"]
    const content = ["「赤弦獎--紅樓琴緣民歌比賽」是采音吉他社最為重要且盛大的活動，自民國 90 年開始舉辦，至今即將進入第二十四屆。初期是以舉辦給北科學生參賽為主，經由多屆的比賽累積活動經驗及檢討，嘗試於第七屆擴大賽事，廣集新竹以北之各大專院校之參賽者共襄盛舉，於第八屆將賽事擴大至全國大專院校及北部高中職，第十三屆增加演奏組，第十四屆更是新增音樂節活動，邀請十三屆得獎人為我們表演，並於第十八屆將賽事更擴大至全國大專院校及全國高中職。希望透過赤弦獎這個比賽，讓參賽者能夠不僅保有赤子之心，還能實踐對音樂的熱愛，在求學生涯中能有機會展現自我，並於賽事中發掘人才，提升國內的音樂素質。",
    "赤弦獎的目標及理念，即為推廣校園音樂風氣，讓對音樂表演有興趣的學生有展現自我的機會，且藉由校際間的競賽，達到交流學習的效果。本屆目標是希望讓參賽者的音樂、作品能夠被更多人聽見，於是積極尋求與音樂平台合作，藉以鼓勵參賽者創作及比賽。",
    "采音吉他社，為臺北科技大學的音樂性社團，有來自各大專院校的學生參與，專注於音樂能力的提升和音樂表演的多樣性。涵蓋多種曲風，包括木歌和團歌，幫助社員掌握優秀的音樂技巧和表演方法。且社團也積極舉辦各類音樂活動，促進社員間的交流與合作。也協助學校籌辦赤弦獎，為音樂愛好者提供展現才華的舞台。"]
    const img = [aboutImg01,aboutImg02,aboutImg03]
    const RWDImg = [aboutImg01RWD,aboutImg02RWD,aboutImg03RWD]
    
    if(number === 3){
        return <div></div>
    }
    return(
        <div  className="flex justify-around border-y-[0.5px] border-solid border-RSgoldDeep max-lg:block">
            <div data-aos="fade-up" className="p-[5%] w-[100%]">
                <h2 className="JobText text-2xl mb-8 max-lg:mb-4">{title[number]}</h2>
                <p className="DesText leading-7">{content[number]}</p>
            </div>
            <div className="max-lg:hidden">
            <img className="w-[100%]" src={img[number]} alt="red string"/>
            </div>
            <div className="lg:hidden">
            <img className="w-[100%]" src={RWDImg[number]} alt="red string"/>
            </div>
        </div>
    )
}