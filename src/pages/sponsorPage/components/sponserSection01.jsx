import React from "react";
import SponserSingle from "./sponserSingle";

export default function SponserSection01() {
    return(
        <div>
            <h1 className="SectionTitle text-center tracking-[5px] pb-20 max-md:pb-12">贊助廠商</h1>
            <div data-aos="fade-up" className="flex justify-center">
            <SponserSingle sponderNum={0} />
            <SponserSingle sponderNum={1} />
            <SponserSingle sponderNum={2} />
            <SponserSingle sponderNum={3} />
            </div>
            <div data-aos="fade-up" className="flex justify-center">
            <SponserSingle sponderNum={4} />
            <SponserSingle sponderNum={5} />
            <SponserSingle sponderNum={6} />
            <SponserSingle sponderNum={7} />
            </div>
           <div data-aos="fade-up" className="flex justify-center">
           <SponserSingle sponderNum={8} />
           <SponserSingle sponderNum={9} />
           <SponserSingle sponderNum={10} />
           </div>
           <div className="h-1 border-b-[0.5px] border-solid border-RSgoldDeep mx-[10%]"></div>
           <h1 className="SectionTitle text-center tracking-[5px] pt-24 max-md:pb-12">協辦單位</h1>
           <div data-aos="fade-up" className="flex justify-center">
           <SponserSingle sponderNum={11} />
           <SponserSingle sponderNum={12} />
           <SponserSingle sponderNum={13} />
           </div>
        </div>
    )
}