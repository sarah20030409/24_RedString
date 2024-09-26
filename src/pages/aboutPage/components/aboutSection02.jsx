import {useState,useRef,React} from "react";
import About02Info from "./about02Info";
import goldBall01 from "../../../assets/imgs/about/Porpose.webp"
import goldBall02 from "../../../assets/imgs/about/Goal.webp"
import goldBall03 from "../../../assets/imgs/about/AboutTsaiYin.webp"

export default function AboutSection02() {
    const [selectedNumber,setSelectedNumber] = useState(3);

    const targetRef = useRef();
    const handleOpen = (number) => {
        if(number !== selectedNumber) {
            setSelectedNumber(number)
            targetRef.current.scrollIntoView({behavior:'smooth'});
        }
        else{
            setSelectedNumber(3)
        }
    }

    return(
        <div className="pt-56 pb-48 max-lg:pt-38 max-lg:pb-40 max-md:pt-32 max-md:pb-24">
            <div data-aos="fade-up" className="flex justify-around px-[15%]  max-lg:px-[10%] ">
                <div className="w-52 hover:cursor-pointer hover:scale-105 max-lg:w-[24%] " onClick={() => {handleOpen(0)}} ><img src={goldBall01} alt="red string"/></div>
                <div className="w-52 hover:cursor-pointer hover:scale-105 max-lg:w-[24%] " onClick={() => {handleOpen(1)}}><img src={goldBall02} alt="red string"/></div>
                <div className="w-52 hover:cursor-pointer hover:scale-105 max-lg:w-[24%] " onClick={() => {handleOpen(2)}}><img src={goldBall03} alt="red string"/></div>
            </div>
            <div className="pt-40 max-lg:pt-24" ref={targetRef}>
                <About02Info number={selectedNumber} />
            </div>
        </div>
    )
}