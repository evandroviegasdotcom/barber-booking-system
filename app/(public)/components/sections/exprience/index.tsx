import AnimateElement from "@/components/animated-element";
import ContactUsBtn from "@/components/contact-us-button";
import SectionContainer from "@/components/section-container";
import Image from "next/image";
import React from "react";
export default function Exprience() {
  return (
    <SectionContainer
      className="md:grid md:grid-cols-2 md:justify-between flex flex-col-reverse gap-6"
      id="exprience"
    >
      <div className="flex gap-6 md:h-auto md:mt-0 mt-6 h-[300px] ">
        <AnimateElement
          animate={{
            opacity: [0, 1],
            y: [-20, 0],
            transition: { duration: 1, type: "just" },
          }}
          className="relative w-full"
        >
          <Image
            className="object-center object-cover"
            src="/exprience/2.jfif"
            fill
            alt="Barber"
          />
        </AnimateElement>
        <AnimateElement
          animate={{
            opacity: [0, 1],
            y: [-20, 0],
            transition: { duration: 1.2, type: "just" },
          }}
          className="relative w-full "
        >
          <Image
            className="object-center object-cover"
            src="/exprience/1.jfif"
            fill
            alt="Barber"
          />
        </AnimateElement>
      </div>
      <AnimateElement
        animate={{
          opacity: [0, 1],
          y: [40, 0],
          transition: { duration: 1, type: "just" },
        }}
        className="flex flex-col gap-4 w-full"
      >
        <span className="font-bold text-neutral-400">
          YOUR HAIR IS IN GOOD HANDS
        </span>
        <span className="text-6xl font-extrabold">
          80+ YEARS OF GROOMING EXPERIENCE
        </span>
        <p className="text-neutral-400 leading-7">
          Village Cuts opened in 2006 and is located in the heart of Greenwich
          Village.We are proud to offer our clients over 80 years of experience.
          During your visit, you can enjoy the relaxed environment, take
          advantage of the free wi-fi while enjoying a free drink and magazines.
          Village Cuts guarantees you will have the highest quality haircut
          possible. Customizing every aspect of your experience tailored to your
          individual needs.
        </p>
        <ContactUsBtn />
      </AnimateElement>
    </SectionContainer>
  );
}
