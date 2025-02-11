import React from "react";
import contentJson from "./content.json";
import InterviewImg01 from "../../../assets/imgs/interview/interviewImg01.webp";
import InterviewImg02 from "../../../assets/imgs/interview/interviewImg02.webp";
import InterviewImg03 from "../../../assets/imgs/interview/interviewImg03.webp";
import InterviewImg04 from "../../../assets/imgs/interview/interviewImg04.webp";
import InterviewImg05 from "../../../assets/imgs/interview/interviewImg05.webp";
import InterviewImg06 from "../../../assets/imgs/interview/interviewImg06.webp";
import InterviewImg07 from "../../../assets/imgs/interview/interviewImg07.webp";
import InterviewImg08 from "../../../assets/imgs/interview/interviewImg08.webp";

export default function SingleArticle({ ClickedArticle }) {
  let articleContent;
  switch (ClickedArticle) {
    case "ARTICLE01":
      articleContent = <ArticleContent Number={"01"} ImgSrc={InterviewImg01} />;
      break;

    case "ARTICLE02":
      articleContent = <ArticleContent Number={"02"} ImgSrc={InterviewImg02} />;
      break;

    case "ARTICLE03":
      articleContent = <ArticleContent Number={"03"} ImgSrc={InterviewImg03} />;
      break;

    case "ARTICLE04":
      articleContent = <ArticleContent Number={"04"} ImgSrc={InterviewImg04} />;
      break;

    case "ARTICLE05":
      articleContent = <ArticleContent Number={"05"} ImgSrc={InterviewImg05} />;
      break;

    case "ARTICLE06":
      articleContent = <ArticleContent Number={"06"} ImgSrc={InterviewImg06} />;
      break;

    case "ARTICLE07":
      articleContent = <ArticleContent Number={"07"} ImgSrc={InterviewImg07} />;
      break;

    case "ARTICLE08":
      articleContent = <ArticleContent Number={"08"} ImgSrc={InterviewImg08} />;
      break;

    default:
      articleContent = null;
  }

  return (
    <div className="px-[10%]">
      <div>{articleContent}</div>
    </div>
  );
}

export function ArticleContent({ Number, ImgSrc }) {
  const article = contentJson["ARTICLE" + Number];
  const { SpecialTitle, SpecialParagraph, title, paragraph } = article;

  return (
    <div>
      <div className="flex justify-center items-end max-m_md:block">
        <div className="w-[40%] max-m_md:w-4/5 max-m_md:mx-auto">
          <img
            className="w-[100%]"
            src={ImgSrc}
            alt="赤弦獎｜第24屆紅樓琴緣民歌比賽，參賽者感想，評審講評"
          />
        </div>
        <div className="w-[60%] pl-[5%] max-m_md:w-full max-m_md:pl-0">
          <h2 className="InterviewTitle pb-4 pt-14">{SpecialTitle}</h2>
          <p className="InterviewParagraph">{SpecialParagraph}</p>
        </div>
      </div>

      <div className="border-b-[0.3px] border-solid border-white mt-[5%] mb-[3%] "></div>
      <div>
        {title.map((item, index) => {
          return (
            <div data-aos="fade-up" key={index}>
              <h3 className="InterviewTitle pb-4 pt-14">{item}</h3>
              <p className="InterviewParagraph">{paragraph[index]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export function Article03() {
//   return <div>article03</div>;
// }

// export function Article04() {
//   return <div>article04</div>;
// }

// export function Article05() {
//   return <div>article05</div>;
// }

// export function Article06() {
//   return <div>article06</div>;
// }

// export function Article07() {
//   return <div>article07</div>;
// }

// export function Article08() {
//   return <div>article08</div>;
// }

export function ParagraphFormat({ title, paragraph }) {}
