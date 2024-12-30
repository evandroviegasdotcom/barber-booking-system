import AnimateElement from "@/components/AnimateElement";
import SectionContainer from "@/components/SectionContainer";
import barber from "@/data";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { MdOutlinePerson4 } from "react-icons/md";
export default function Reviews() {
  return (
    <SectionContainer id="reviews" className="space-y-4 bg-foreground">
      <AnimateElement className="flex flex-col gap-4 text-center">
        <span className="font-bold text-neutral-400 ">EXPLORE OUR REVIEWS</span>
        <span className="font-bold text-white text-5xl">WHAT CLIENTS SAY.</span>
      </AnimateElement>
      <AnimateElement className="flex md:flex-row flex-col items-center justify-between gap-12">
        <AnimateElement className="flex flex-col gap-1.5 text-2xl text-center">
          <span className="font-bold">EXCELLENT</span>
          <div className="flex items-center gap-0.5">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <span className="text-sm text-neutral-400 font-red">
            BASED ON {barber.clients_number} REVIEWS
          </span>
        </AnimateElement>
        <div className="md:grid md:grid-cols-3 flex flex-col  gap-3">
          {barber.reviews.map((r, idx) => (
            <AnimateElement
              key={r.name}
              className="border border-white/10 p-7 flex flex-col gap-2 md:items-start items-center"
              animate={{opacity: [0, 1], y: [idx % 2 === 0 ? 20 : -20, 0], transition: { duration: 1, delay: 0.1 } }}
            >
              <div className="flex  items-center gap-6">
                <div>
                  {r.photo ? (
                    <img
                      src={r.photo}
                      className="w-12 h-12 rounded-full object-cover object-center"
                    />
                  ) : (
                    <MdOutlinePerson4 className="text-[48px]" />
                  )}
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold">{r.name}</span>
                  <span className="text-sm text-neutral-400">{r.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-lg">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="font-red text-center md:text-start text-neutral-300">
                {r.description}
              </p>
            </AnimateElement>
          ))}
        </div>
      </AnimateElement>
    </SectionContainer>
  );
}
