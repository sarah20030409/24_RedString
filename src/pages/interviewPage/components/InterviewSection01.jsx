import React, { useState, useRef } from "react";
import InterviewImg01 from "../../../assets/imgs/interview/interviewImg01.webp";
import InterviewImg02 from "../../../assets/imgs/interview/interviewImg02.webp";
import InterviewImg03 from "../../../assets/imgs/interview/interviewImg03.webp";
import InterviewImg04 from "../../../assets/imgs/interview/interviewImg04.webp";
import InterviewImg05 from "../../../assets/imgs/interview/interviewImg05.webp";
import InterviewImg06 from "../../../assets/imgs/interview/interviewImg06.webp";
import InterviewImg07 from "../../../assets/imgs/interview/interviewImg07.webp";
import InterviewImg08 from "../../../assets/imgs/interview/interviewImg08.webp";
import SingleArticle from "./SingleArticle";

export default function InterviewSection01() {
  const [selectedArticle, setSlectedArticle] = useState();
  const outterStyle = ["px-[12%] flex justify-around flex-wrap max-md:px-[5%]"];

  const targetRef = useRef();
  const handleClick = (name) => {
    setSlectedArticle(name);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <p className="JobText text-center mb-[5%] animate-fadeIn">
        ↓ 點擊任一圖卡查看資訊 ↓
      </p>
      <div className={outterStyle}>
        <InterviewCard
          interviewImg={InterviewImg01}
          onSelect={() => handleClick("ARTICLE01")}
          name={"陳宥豪"}
        />
        <InterviewCard
          interviewImg={InterviewImg02}
          onSelect={() => handleClick("ARTICLE02")}
          name={"莊耿碩&林莉樺"}
        />
      </div>
      <p className="SectionTitle tracking-[5px] text-center pt-[10%] pb-[5%]">
        評審講評
      </p>
      <div className={outterStyle}>
        <InterviewCard
          interviewImg={InterviewImg03}
          onSelect={() => handleClick("ARTICLE03")}
          name={"⼤專個⼈組"}
        />
        <InterviewCard
          interviewImg={InterviewImg04}
          onSelect={() => handleClick("ARTICLE04")}
          name={"⼤專團體組"}
        />
      </div>
      <div className={outterStyle}>
        <InterviewCard
          interviewImg={InterviewImg05}
          onSelect={() => handleClick("ARTICLE05")}
          name={"⼤專創作組"}
        />
        <InterviewCard
          interviewImg={InterviewImg06}
          onSelect={() => handleClick("ARTICLE06")}
          name={"⼤專演奏組"}
        />
      </div>
      <div className={outterStyle}>
        <InterviewCard
          interviewImg={InterviewImg07}
          onSelect={() => handleClick("ARTICLE07")}
          name={"⾼中演唱組"}
        />
        <InterviewCard
          interviewImg={InterviewImg08}
          onSelect={() => handleClick("ARTICLE08")}
          name={"⾼中演奏組"}
        />
      </div>
      <div className="pt-[15%] pb-[10%]" data-aos="fade-up" ref={targetRef}>
        <SingleArticle ClickedArticle={selectedArticle} />
      </div>
    </div>
  );
}

export function InterviewCard({ name, interviewImg, onSelect }) {
  return (
    <div
      className=" w-[35%] pb-8 my-6 rounded-tr-[50px] rounded-tl-[50px] border-solid border border-RSgoldDeep flex flex-col items-center justify-center cursor-pointer hover:scale-[1.03] hover:shadow-RSgoldDeep
      max-m_md:w-[45%]  max-md:pb-4 max-md:rounded-tr-[30px] max-md:rounded-tl-[30px]"
      onClick={onSelect}
    >
      <h1 className="MediumTitle text-white py-8 max-md:py-5">{name}</h1>
      <img src={interviewImg} alt="醉聲" />
    </div>
  );
}
