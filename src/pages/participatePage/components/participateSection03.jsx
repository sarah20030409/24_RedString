import React from "react";
import goldFrame01 from "../../../assets/imgs//participate/goldFrame01.webp";
import goldFrame02 from "../../../assets/imgs//participate/goldFrame02.webp";
import bgCloud from "../../../assets/imgs/participate/bgCloudImg.png";
import redBgImg from "../../../assets/imgs/participate/redBgDot.png"
import titleFrame from "../../../assets/imgs/homePage/sction01/section01TextFrame.svg"

export default function ParticipateSection03() {
  return (
    <div className="pt-40 max-md:pt-32">
        <h1 data-aos="fade-up" className="SectionTitle text-center tracking-[5px] pb-20 max-md:pb-12">交通方式</h1>
        <div className="flex justify-center max-md:block ">
            <img className="w-[40%] px-7 max-lg:w-[50%] max-lg:px-5 max-md:items-center max-md:mx-auto max-md:py-4 max-md:w-[80%]" src={goldFrame01} alt="赤弦獎"/>
            <img className="w-[40%] px-7 max-lg:w-[50%] max-lg:px-5 max-md:items-center max-md:mx-auto max-md:py-4 max-md:w-[80%]" src={goldFrame02} alt="赤弦獎"/>
        </div>

        <div className="bg-contain bg-no-repeat bg-center py-52 mb-14 max-md:py-32" style={{ backgroundImage: `url(${redBgImg})` }}>
            <div data-aos="fade" className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgCloud})` }}>
            <div className="flex justify-center">
            <div className="bg-contain bg-no-repeat bg-center flex justify-center w-[260px] p-1 m-1 mb-5" style={{ backgroundImage: `url(${titleFrame})` }}>
                <h1 className="SectionTitle">詳細地址</h1>
            </div>
            </div>
            <p className="MediumTitle text-center text-white">台北市大安區忠孝東路三段一號</p>

            <div className="flex justify-center pt-24">
            <div className="bg-contain bg-no-repeat bg-center flex justify-center w-[260px] p-1 m-1 mb-5" style={{ backgroundImage: `url(${titleFrame})` }}>
                <h1 className="SectionTitle">初賽地點</h1>
            </div>
            </div>
            <p className="MediumTitle text-center text-white">臺北科技大學 中正館紀念館一樓</p>
            </div>
        </div>
    </div>
  )
}

// function TrafficFrame({ listNum }) {
//   const number = ["01", "02"];
//   const title = ["忠孝門路線", "新生門路線"];
//   const step01 = ["1.捷運忠孝新生 4號出口","1.捷運忠孝新生 4號出口"];
//   const step02 = ["2.沿忠孝東路向東","2.步行約兩分鐘(130公尺)至臺北科技大學新生門口"]
//   const step03 = ["3.步行約三分鐘(250公尺)至臺北科技大學忠孝門口","3.進入校園後直行至中正館直接上樓梯，即可抵達檢錄處"]
//   const step04 = ["4.進入校園後直行至中正館右轉上階梯，即可抵達檢錄處",""]

//   return (
//     <div className="w-full">
//   <div className="bg-contain bg-no-repeat px-[5%] py-[3%] " style={{ backgroundImage: `url(${goldFrame})` }}>
//     <p className="BaseFamily font-normal tracking-[2px] text-[48px] text-RSgoldLight ">{number[listNum]}</p>
//     <p className="MemberText text-RSgoldLight text-2xl leading-10">{title[listNum]}</p>
//     <ul className="">
//       <li className="JobText text-base tracking-[1px] text-RSgoldLight leading-8">{step01[listNum]}</li>
//       <li className="JobText text-base tracking-[1px] text-RSgoldLight leading-8">{step02[listNum]}</li>
//       <li className="JobText text-base tracking-[1px] text-RSgoldLight leading-8">{step03[listNum]}</li>
//       <li className="JobText text-base tracking-[1px] text-RSgoldLight leading-8">{step04[listNum]}</li>
//     </ul>
//   </div>
//   </div>
//   )
// }
