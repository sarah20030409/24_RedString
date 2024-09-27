import React from "react";
import S01 from "../../../assets/imgs/sponsers/sponser01.webp";
import S02 from "../../../assets/imgs/sponsers/sponser02.webp";
import S03 from "../../../assets/imgs/sponsers/sponser03.webp";
import S04 from "../../../assets/imgs/sponsers/sponser04.webp";
import S05 from "../../../assets/imgs/sponsers/sponser05.webp";
import S06 from "../../../assets/imgs/sponsers/sponser06.webp";
import S07 from "../../../assets/imgs/sponsers/sponser07.webp";
import S08 from "../../../assets/imgs/sponsers/sponser08.webp";
import S09 from "../../../assets/imgs/sponsers/sponser09.webp";
import S10 from "../../../assets/imgs/sponsers/sponser10.webp";
import S11 from "../../../assets/imgs/sponsers/sponser11.webp";
import S12 from "../../../assets/imgs/sponsers/sponser12.webp";
import S13 from "../../../assets/imgs/sponsers/sponser13.webp";
import S14 from "../../../assets/imgs/sponsers/sponser14.webp";

export default function SponserSingle({ sponderNum }) {
  const SponsersImg = [
    S01,
    S02,
    S03,
    S04,
    S05,
    S06,
    S07,
    S08,
    S09,
    S10,
    S11,
    S12,
    S13,
    S14,
  ];
  const SponserName = [
    "海馬91譜",
    "菁華留學教育中心",
    "彥揚興業有限公司",
    "存在音樂",
    "欽山環境工程",
    "MÜST社團法人 \n 中華音樂著作權協會",
    "QUEEN SHOP\n薩摩亞商皇后國際\n有限公司台灣分公司",
    "Wuwow",
    "backbone",
    "Transcend 創見資訊",
    "財團法人華研文化基金會",
    "SENPAI\n學長映像",
    "Firebug Studio\n噴火蟲工作室",
    "憘樂音樂",
  ];

  return (
    <div className="w-56 mx-[2%] my-16 max-lg:w-48 max-lg:mx-[1%] max-lg:my-12 max-md:w-44 max-md:my-8">
      <img
        className="w-48 items-center mx-auto max-lg:w-40 max-md:w-36"
        src={SponsersImg[sponderNum]}
        alt="red string"
      />
      <p className="PoetryText text-center mt-6 max-md:mt-4">
        {SponserName[sponderNum].split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
