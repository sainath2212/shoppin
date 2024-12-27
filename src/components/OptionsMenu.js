"use client";
import { useState } from "react";
import bandIcon from "../assets/Icons/band.svg";
import caseIcon from "../assets/Icons/case.svg";
import sizeIcon from "../assets/Icons/size.svg";

const OptionsMenu = ({
  showBand,
  setShowBand,
  setShowCase,
  showCase,
  setShowImage,
}) => {
  const handleBandClick = () => {
    setShowBand(true);
    setShowImage(false);
    setShowCase(false);
  };
  const handleCaseClick = () => {
    setShowBand(false);
    setShowImage(false);
    setShowCase(true);
  };
  return (
    <div className="flex justify-center mt-[3rem] gap-4 text-lg mb-10">
      <button className="flex items-center gap-2 bg-[#e8e8ed] rounded-3xl px-4 py-2 cursor-pointer">
        <img src={sizeIcon.src} alt="size-icon" />
        Size
      </button>
      <button
        className="flex items-center gap-2 bg-[#e8e8ed] rounded-3xl px-4 py-2 cursor-pointer"
        onClick={handleCaseClick}
      >
        <img src={caseIcon.src} alt="case-icon" />
        Case
      </button>
      <button
        className="flex items-center gap-2 bg-[#e8e8ed] rounded-3xl px-4 py-2 cursor-pointer"
        onClick={handleBandClick}
      >
        <img src={bandIcon.src} alt="band-icon" />
        Band
      </button>
    </div>
  );
};

export default OptionsMenu;
