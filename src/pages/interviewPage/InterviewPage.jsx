import React from "react";
import TopBanner from "../banner/TopBanner";
import InterviewSection01 from "./components/InterviewSection01";

export default function InterviewPage() {
  return (
    <div>
      <div>
        <TopBanner title={"赤弦專訪"} />
      </div>
      <div>
        <InterviewSection01 />
      </div>
    </div>
  );
}
