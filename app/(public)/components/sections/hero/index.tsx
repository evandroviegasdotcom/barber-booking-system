"use client";
import SectionContainer from "@/components/section-container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import barber from "@/data";
import AnimateElement from "@/components/animated-element";
import slides from "./data";


export default function Hero() {
  const currIdx = useRef(0);
  const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [prevSlide, setPrevSlide] = useState(slides[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  const updateSlide = (s: (typeof slides)[number]) => {
    const p = new Promise((res) => {
      setIsAnimating(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        res(s);
      }, 300);
    });
    return p;
  };

  useEffect(() => {
    const id = setInterval(() => {
      let nIdx = currIdx.current + 1;
      if (nIdx > slides.length - 1) {
        nIdx = 0;
      }

      const prevIdx = currIdx.current;
      setCount(nIdx);
      setPrevSlide(slides[prevIdx]);
      updateSlide(slides[nIdx]).then(() => {
        setCurrentSlide(slides[nIdx]);
        currIdx.current = nIdx;
      });
    }, 4000); // Changed to 4000ms for a better viewing experience
    return () => {
      clearInterval(id);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <SectionContainer
      className="relative h-screen flex flex-col justify-end"
  
      id="hero"
    >
      <div className="absolute inset-0">
        <Image
          src={prevSlide?.bg_path}
          fill
          alt="Previous Slide"
          className={`absolute z-[-2] grayscale object-cover object-center transition-opacity duration-300`}
        />
        <Image
          src={currentSlide.bg_path}
          fill
          alt="Current Slide"
          className={`absolute z-[-1] grayscale object-cover object-center transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black " />
      </div>
      <div className="md:pb-20 md:relative absolute md:bottom-0 bottom-6">
        <div className="flex md:flex-row flex-col md:justify-between h-full gap-12">
          <AnimateElement className="space-y-4" animate={{ opacity: [0, 1], y: [60, 0], transition: { duration: 0.5 } }} animateOnce>
            <span className="font-semibold">{currentSlide.subtitle}</span>
            <ul className="relative flex flex-col md:gap-3 gap-5">
              <div className="flex gap-3 absolute -bottom-6 left-0">
                {slides.map((_, idx) => (
                  <div
                    className={`w-4 h-2 transition-all duration-500 ${
                      idx > count ? "bg-white/10" : "bg-white"
                    }`}
                    key={idx}
                  />
                ))}
              </div>
              {slides.map((s) => (
                <li
                  key={s.title}
                  className={`cursor-pointer md:text-7xl text-6xl font-bold transition-all duration-400 hover:opacity-100 ${
                    currentSlide.title === s.title ? "text-white" : "opacity-50"
                  }`}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          </AnimateElement>
          <AnimateElement className="flex flex-col justify-end gap-6 mb-auto h-full md:text-lg" animate={{ opacity: [0, 1], y: [60, 0],  transition: { duration: 0.5 } }} animateOnce>
            <span className="font-bold text-xl">LOCATION</span>
            <div>
              <p>{barber.location[0]}</p>
              <p>{barber.location[1]}</p>
            </div>
            <div>
              <p>{barber.email}</p>
              <p>{barber.number}</p>
            </div>
          </AnimateElement>
        </div>
      </div>
    </SectionContainer>
  );
}
