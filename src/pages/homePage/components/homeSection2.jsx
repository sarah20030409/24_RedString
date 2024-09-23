import React from "react";

export default function HomeSection2() {
    return(
        <div className="flex justify-center w-full h-600px pt-44">
            {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/BKJsoaxAt8E?si=wwuQ1ke05R_GgopR" title="YouTube video player" allowfullscreen="allowfullscreen" autoplay> </iframe> */}
            <iframe className="w-full h-600px" height={700} src="https://www.youtube.com/embed/BKJsoaxAt8E?si=wwuQ1ke05R_GgopR&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    ) 
}