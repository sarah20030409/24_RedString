import React from "react";
import TopBanner from "../banner/TopBanner";
import SponsorSection01 from "./components/sponserSection01";

export default function ParticipatePage() {
    return (
        <div>
            <TopBanner title={"贊助廠商"}/>
            <div>
                <SponsorSection01/>
            </div>
        </div>
    );
}