import React from "react";
import Logo from "../../../assets/imgs/header/Logo.svg";
import NavLine from "../../../assets/imgs/header/NavLine.svg";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header(){
    const [open,setOpen] = useState(false);

    const handleNavBar = () => {
        console.log(open);
        setOpen(!open);
    }
    const navItems=[
        {to:"/about",text:"關於赤弦"},
        {to:"/info",text:"比賽須知"},
        {to:"/sponsor",text:"贊助廠商"},
    ]
    return(
        <div className="fixed top-0 w-full h-20 bg-white z-50 lg:px-[10%] py-1 md:px-10 sm:px-6">
            <div className="flex justify-between items-center">
                <div className="flex ">
                    <Link to="/" onClick={handleNavBar=>setOpen(false)}><img className="scale-90 " src={Logo} alt="赤弦獎" /></Link>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex justify-between items-center">
                        {navItems.map((item,index) => (
                            <li className="mx-5" key={index}><Link className="NavText" to={item.to}>{item.text}</Link></li>
                        ))}
                    </ul>
                </nav>
                <nav className="md:hidden">
                    <button  onClick={handleNavBar}>
                    <img src={NavLine} alt="NavLine" />
                    </button>
                </nav>
            </div>
            <div className={open ? "NavBarStyle" : "hidden" }>
                <ul>
                {navItems.map((item,index) => (
                            <li className="mx-5 py-3 text-center" onClick={handleNavBar} key={index}><Link className="NavText" to={item.to}>{item.text}</Link></li>
                        ))}
                </ul>
            </div>
        </div>
    )
}