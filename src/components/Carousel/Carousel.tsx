"use client";

import { useState, useEffect, useRef } from "react";

const images = [
  "/carousel/1-min.png",
  "/carousel/2-min.png",
  "/carousel/4-min.png",
  "/carousel/5-min.png",
  "/carousel/6-min.png",
  "/carousel/7-min.png",
  "/carousel/8-min.png",
  "/carousel/9-min.png",
  "/carousel/10-min.png",
  "/carousel/11-min.png",
  "/carousel/12-min.png",
  "/carousel/13-min.png",
  "/carousel/14-min.png",
  "/carousel/15-min.png",
  "/carousel/16-min.png",
  "/carousel/17-min.png",
  "/carousel/18-min.png",
];

const extendedImages = [images[images.length - 1], ...images, images[0]];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToNextSlide();
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    startAutoSlide();
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    startAutoSlide();
  };

  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 500);
    }
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
    startAutoSlide();
  };

  return (
    <div className="relative w-svw max-w-[2048px] mx-auto overflow-hidden aspect-[16/9]">
      <div
        className={`flex transition-transform duration-700 ease-in-out ${
          !isTransitioning ? "transition-none" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-3xl pt-0"
        onClick={goToPrevSlide}
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-3xl pt-0"
        onClick={goToNextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
