"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import GetStartedSection from "./GetStartedSection";
import ImageSection from "./ImageSection";
import ProductDetails from "./ProductDetails";
import OptionsMenu from "./OptionsMenu";
import BandCarousel from "./BandsCarousel";
import CaseCarousel from "./CaseCarousel";

const Main = () => {
  const [isSideView, setIsSideView] = useState(false);
  const [isStartingPage, setIsStartingPage] = useState(true);
  const [selectedOption, setIsSelectedOption] = useState(
    "Apple Watch Series 10"
  );
  const [showImage, setShowImage] = useState(true);
  const [showBand, setShowBand] = useState(false);
  const [showCase, setShowCase] = useState(false);

  const handleGetStarted = () => {
    setIsStartingPage(false);
  };

  const toggleImage = () => setIsSideView(!isSideView);

  const handleOptionSelect = (option) => {
    console.log("Selected Option:", option);
    setIsSelectedOption(option);
  };

  useEffect(() => {
    localStorage.setItem("centerFaceImageIndex", 0);
    localStorage.setItem("centerStrapImageIndex", 0);
  });
  function handleBandClick() {
    setShowBand(true);
    console.log("hola");
  }
  return (
    <>
      <Header
        isStartingPage={isStartingPage}
        onOptionSelect={handleOptionSelect}
        showBand={setShowBand}
      />
      <div className="flex justify-center items-center">
        <div className="font-sans flex flex-col items-center text-[#1d1d1f] px-4">
          {isStartingPage && (
            <GetStartedSection onGetStarted={handleGetStarted} />
          )}
          {showImage && (
            <ImageSection
              isStartingPage={isStartingPage}
              isSideView={isSideView}
              selectedOption={selectedOption}
            />
          )}

          {showBand ? <BandCarousel selectedOption={selectedOption} /> : null}
          {showCase ? <CaseCarousel selectedOption={selectedOption} /> : null}
        </div>
      </div>
      {!isStartingPage && (
        <>
          <div
            className="text-center mt-5 text-blue-700 text-xs underline cursor-pointer"
            onClick={toggleImage}
          >
            {isSideView ? "Front View" : "Side View"}
          </div>
          <ProductDetails selectedOption={selectedOption} />
          <OptionsMenu
            showBand={showBand}
            showCase={showCase}
            setShowBand={setShowBand}
            setShowCase={setShowCase}
            setShowImage={setShowImage}
          />
        </>
      )}
    </>
  );
};

export default Main;
