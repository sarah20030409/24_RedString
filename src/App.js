import { React, useState, useEffect } from "react";
import Header from "./pages/globalComp/header/HeaderComp";
import HomePage from "./pages/homePage/homePage";
import AboutPage from "./pages/aboutPage/aboutPage";
import ParticipatePage from "./pages/participatePage/ParticipatePage";
import SponsorPage from "./pages/sponsorPage/SponsorPage";
import LodingPage from "./pages/loadingPage/loadingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// AOSanim
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [loding, setloding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloding(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (loding) {
    return <LodingPage />;
  }

  return (
    <BrowserRouter>
      <div className="bg-black  h-[2000px]">
        <header>
          <Header />
        </header>
        <div className="pt-24 lg:px-[10%] md:px-10 sm:px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/info" element={<ParticipatePage />} />
            <Route path="/sponsor" element={<SponsorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
