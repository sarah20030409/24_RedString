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

const imageToPreload = ["../../assets/imgs/homepage/BigBannerRedString.webp"];

export default function App() {
  const [loding, setloding] = useState(true);
  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setloding(false);
  //   }, 6000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const preloadImage = async () => {
      const imagePromise = imageToPreload.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      try {
        await Promise.all(imagePromise);
        const timer = setTimeout(() => {
          setloding(false);
        }, 6000);
        return () => clearTimeout(timer);
      } catch (err) {
        console.log("Error loading images", err);
        const timer = setTimeout(() => {
          setloding(false);
        }, 6000);
        return () => clearTimeout(timer);
      }
    };

    preloadImage();
  }, []);

  if (loding) {
    return <LodingPage />;
  }

  return (
    <BrowserRouter>
      <div className="bg-black  min-h-screen">
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
