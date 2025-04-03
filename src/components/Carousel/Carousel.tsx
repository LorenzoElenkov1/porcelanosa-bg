"use client";

import { useState, useEffect, useRef } from "react";

const images = [
  "/carousel/1.png",
  "/carousel/2.png",
  "/carousel/4.png",
  "/carousel/5.png",
  "/carousel/6.png",
  "/carousel/7.png",
  "/carousel/8.png",
  "/carousel/9.png",
  "/carousel/10.png",
  "/carousel/11.png",
  "/carousel/12.png",
  "/carousel/13.png",
  "/carousel/14.png",
  "/carousel/15.png",
  "/carousel/16.png",
  "/carousel/17.png",
  "/carousel/18.png",
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
