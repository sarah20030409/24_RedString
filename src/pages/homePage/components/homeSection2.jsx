import React from "react";

export default function HomeSection2() {
  return (
    <div className="flex justify-center w-full  pt-44 max-lg:pt-24 ">
      {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/BKJsoaxAt8E?si=wwuQ1ke05R_GgopR" title="YouTube video player" allowfullscreen="allowfullscreen" autoplay> </iframe> */}
      <iframe
        className="w-full max-md:hidden"
        height={700}
        src="https://www.youtube.com/embed/BKJsoaxAt8E?si=wwuQ1ke05R_GgopR&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <iframe
        className="w-full md:hidden"
        height={400}
        src="https://www.youtube.com/embed/BKJsoaxAt8E?si=wwuQ1ke05R_GgopR&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
