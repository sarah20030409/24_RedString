import React from "react";
import Header from "./pages/globalComp/header/HeaderComp";
import HomePage from "./pages/homePage/homePage";
import AboutPage from "./pages/aboutPage/aboutPage";
import ParticipatePage from "./pages/participatePage/ParticipatePage";
import SponsorPage from "./pages/sponsorPage/SponsorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black h-screen">
        <header>
          <Header />
        </header>
        <div>
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
