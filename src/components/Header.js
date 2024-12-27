"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = ({ isStartingPage, onOptionSelect, setShowBand }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    if (onOptionSelect) {
      onOptionSelect(option);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-6 px-10">
        <Link href="/" className="h-auto cursor-pointer">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo_FMT_WHH?wid=160&hei=36&fmt=jpeg&qlt=90&.v=1566850016755"
            width={90}
            alt="A descriptive alt text"
          />
        </Link>
        {!isStartingPage && (
          <>
            <div
              className="flex justify-center items-center gap-2 relative"
              ref={dropdownRef}
            >
              <div
                onClick={toggleDropdown}
                className="flex items-center justify-center cursor-pointer relative z-10"
              >
                Collections
                <ChevronDown width={15} color="black" />
              </div>

              {isDropdownOpen && (
                <div className="absolute text-[#1D1D1F] top-8 text-center w-[20rem] text-[17px] bg-white shadow-lg rounded-2xl z-50">
                  <ul className="py-2 px-4">
                    <li
                      className={`py-4 px-4 ${
                        selectedOption === "Apple Watch Series 10"
                          ? "text-[#86868b]"
                          : "hover:text-blue-500"
                      } cursor-pointer`}
                      onClick={() => handleOptionClick("Apple Watch Series 10")}
                    >
                      Apple Watch Series 10
                    </li>
                    <hr />
                    <li
                      className={`py-4 px-4 ${
                        selectedOption === "Apple Watch Hermes Series 10"
                          ? "text-[#86868b]"
                          : "hover:text-blue-500"
                      } cursor-pointer`}
                      onClick={() =>
                        handleOptionClick("Apple Watch Hermes Series 10")
                      }
                    >
                      Apple Watch Hermes Series 10
                    </li>
                    <hr />
                    <li
                      className={`py-4 px-4 ${
                        selectedOption === "Apple Watch SE"
                          ? "text-[#86868b]"
                          : "hover:text-blue-500"
                      } cursor-pointer`}
                      onClick={() => handleOptionClick("Apple Watch SE")}
                    >
                      Apple Watch SE
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button className="text-white px-4 py-2 bg-[#0071e3] rounded-3xl">
              Save
            </button>
          </>
        )}
      </div>

      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      )}
    </div>
  );
};

export default Header;
