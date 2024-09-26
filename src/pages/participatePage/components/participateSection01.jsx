import React from "react";
import blurBtn from "../../../assets/imgs/BTNbgBlur.webp"

export default function ParticipateSection01() {
    return(
        <div>
            <div>
                <div><h1></h1></div>
                <div><button data-aos="fade-up" className="ButtonStyle" style={{ backgroundImage: `url(${blurBtn})` }}><p className="ButtonTextStyle">比賽須知</p></button></div>
            </div>
        </div>
    )
}