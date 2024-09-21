import React from "react";
import Logo from "../../../assets/imgs/header/Logo.svg";
import { Link } from "react-router-dom";

export default function Header(){
    const navItems=[
        {to:"/about",text:"關於赤弦"},
        {to:"/info",text:"比賽須知"},
        {to:"/sponsor",text:"贊助廠商"},
    ]
    return(
        <div className="h-20 bg-white px-40 py-1">
            <div className="flex justify-between items-center">
                <div className="flex ">
                    <Link to="/"><img src={Logo} alt="赤弦獎" /></Link>
                </div>
                <nav>
                    <ul className="flex justify-between items-center">
                        {navItems.map((item,index) => (
                            <li className="mx-5" key={index}><Link className="NavText" to={item.to}>{item.text}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}