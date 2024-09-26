import React from "react";
import TopBanner from "../banner/TopBanner";
import ParticipateSection01 from "./components/participateSection01";
import ParticipateSection02 from "./components/participateSection02";
import ParticipateSection03 from "./components/participateSection03";

export default function ParticipatePage() {
    return (
        <div>
            <div>
                <TopBanner title={"比賽須知"}/>
            </div>
            <div>
                <ParticipateSection01/>
            </div>
            <div>
                <ParticipateSection02/>
            </div>
            <div>
                <ParticipateSection03/>
            </div>
        </div>
    );
}