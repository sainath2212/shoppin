import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import appleWatchSEData from "../../data/appleWatchSE/appleWatchSE_midnightAlum.json";
import appleWatchHSData from "../../data/appleWatchHermesSeries10/appleWatchHS10.json";
import appleWatchSeries10Data from "../../data/appleWatchSeries10/appleWatch10_silverAlumi";

const BandCarousel = ({ selectedOption }) => {
  const [centerFaceImageIndex, setCenterFaceImageIndex] = useState(0);
  const [selectedCollection, setSelectedCollection] =
    useState(appleWatchSEData);
  const [imageDynamic, setImageDynamic] = useState(0);
  const [isSideView, setIsSideView] = useState(false);
  const carouselRef = useRef(null);
  const imageWidth = 400;
  const imageSpacing = -5 * 16;
  const totalImageWidth = imageWidth + imageSpacing;

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newScrollPosition =
        carouselRef.current.scrollLeft - totalImageWidth;
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const newScrollPosition =
        carouselRef.current.scrollLeft + totalImageWidth;
      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const val = localStorage.getItem("centerStrapImageIndex");
    setImageDynamic(val);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const index = Math.round(scrollLeft / totalImageWidth);
        setCenterFaceImageIndex(index);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, [totalImageWidth]);

  useEffect(() => {
    if (selectedOption === "Apple Watch Series 10") {
      setSelectedCollection(appleWatchSeries10Data);
    } else if (selectedOption === "Apple Watch Hermes Series 10") {
      setSelectedCollection(appleWatchHSData);
    } else if (selectedOption === "Apple Watch SE") {
      setSelectedCollection(appleWatchSEData);
    }
    console.log(selectedOption);
  }, [selectedOption]);
  console.log(selectedCollection);
  return (
    <div className="pt-10">
      <div className="flex flex-col items-center">
        <div className="absolute z-10">
          {selectedCollection[0] && (
            <img
              src={selectedCollection[0].watchcaseUrl}
              alt="watch-strap"
              width={400}
              height={400}
            />
          )}
        </div>

        <div>
          <button
            onClick={scrollLeft}
            className="absolute left-[1rem] top-[20rem] z-30 bg-gray-200 text-gray-500 p-[6px] rounded-full"
          >
            <ChevronLeft height={27} width={27} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-[1rem] top-[20rem] z-30 bg-gray-200 text-gray-500 p-[6px] rounded-full"
          >
            <ChevronRight height={27} width={27} />
          </button>
        </div>

        <div
          ref={carouselRef}
          className={`absolute flex ${
            isSideView ? "overflow-hidden" : "overflow-x-auto"
          } space-x-[-5rem] snap-x snap-mandatory scrollbar-hidden px-[40%]`}
        >
          {selectedCollection.map((image, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              <img
                src={image.watchbandUrl}
                alt={`apple-watch-${index}`}
                width={400}
                height={400}
                className="transition-all duration-[1000ms] object-contain relative"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-[28rem]"></div>
    </div>
  );
};

export default BandCarousel;
