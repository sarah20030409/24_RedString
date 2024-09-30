import React from "react";
import topCloud01 from "../../../assets/imgs/homePage/sction01/section1CloudImg01.webp";
// import topCloud02 from "../../../assets/imgs/homePage/sction01/section1CloudImg02.webp"
import titleFrame from "../../../assets/imgs/homePage/sction01/section01TextFrame.svg";
import section01Img01 from "../../../assets/imgs/homePage/sction01/section01img01.webp";
import section01Img02 from "../../../assets/imgs/homePage/sction01/section01img02.webp";
import comp01 from "../../../assets/imgs/homePage/sction01/section01GoldTitle01.svg";
import comp02 from "../../../assets/imgs/homePage/sction01/section01GoldTitle02.svg";
import fullCloud from "../../../assets/imgs/homePage/sction01/section01FullCloud.png";
import bottomCloud from "../../../assets/imgs/homePage/sction01/section01BottomImg.png";
import blurBtn from "../../../assets/imgs/BTNbgBlur.webp";
import { Link } from "react-router-dom";

export default function HomeSection1() {
  return (
    <div>
      <div
        className="bg-contain bg-top bg-no-repeat pt-15 max-lg:pt-[15%] max-md:pt-[20%]"
        style={{ backgroundImage: `url(${topCloud01})` }}
      >
        <div className="flex justify-center">
          <div
            className="bg-contain bg-no-repeat bg-center px-14 pb-1"
            style={{ backgroundImage: `url(${titleFrame})` }}
          >
            <h1 className="SectionTitle text-nowrap tracking-[5px] ">
              比賽資訊
            </h1>
          </div>
        </div>

        <div
          className="pt-5 bg-contain  bg-no-repeat bg-center max-md:pt-1"
          style={{ backgroundImage: `url(${fullCloud})` }}
        >
          <div
            data-aos="fade-up"
            className="flex justify-between items-center max-md:block "
          >
            <img
              className="w-[65%] max-md:w-full"
              src={section01Img01}
              alt="赤弦獎"
            />
            <div>
              <img
                className="items-center mx-auto mb-3 max-md:w-[28px] max-md:mb-1"
                src={comp01}
                alt="赤弦獎"
              />
              <p className="SmallTitle text-center leading-10 max-md:leading-8">
                11/9-11/10
              </p>
              <p className="SmallTitle text-center">
                ◇ 國立臺北科技大學中正館一樓 ◇
              </p>
            </div>
          </div>
          <div
            className="flex justify-between items-center mt-[10%]  max-md:flex max-md:flex-col-reverse max-md:mt-[25%]"
            data-aos="fade-up"
          >
            <div>
              <img
                className="items-center mx-auto mb-3 max-md:w-[28px] max-md:mb-1"
                src={comp02}
                alt="赤弦獎"
              />
              <p className="SmallTitle text-center leading-10  max-md:leading-8">
                12/15
              </p>
              <p className="SmallTitle text-center">
                ◇ 國立臺北科技大學中正館一樓 ◇
              </p>
            </div>
            <img
              className="w-[65%] max-md:w-full"
              src={section01Img02}
              alt="赤弦獎"
            />
          </div>
        </div>
        <div className="py-[5%]"></div>

        <div
          className="pt-[5%] bg-contain  bg-no-repeat bg-left max-lg:pt-[10%] max-md:pt-[20%]"
          style={{ backgroundImage: `url(${bottomCloud})` }}
        >
          <div className="flex justify-center pb-5">
            <Link to="/info">
              <button
                className="ButtonStyle"
                style={{ backgroundImage: `url(${blurBtn})` }}
              >
                <p className="ButtonTextStyle">比賽須知</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
