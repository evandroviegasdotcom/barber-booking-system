import React from "react";
import SectionContainer from "../section-container";
import Logo from "../logo";
import barber from "@/data";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import AnimateElement from "../animated-element";

export default function Footer() {
  return (
    <SectionContainer id="footer" className="space-y-10 pb-4">
      <AnimateElement className="flex flex-col md:flex-row md:items-start  justify-between gap-12">
        <Logo />
        <div className="space-y-4">
          <Title>WORKING HOURS</Title>
          <div className="space-y-2">
            {barber.working_hours.map((h) => (
              <div key={h.name} className="flex items-center gap-3">
                <span className="text-neutral-400">{h.name}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Title>LOCATION</Title>
          <div>
            <p>{barber.location[0]}</p>
            <p>{barber.location[1]}</p>
          </div>
          <div>
            <p>{barber.email}</p>
            <p>{barber.number}</p>
          </div>
        </div>

        <div className="space-y-4">
          <Title>Our Social Medias</Title>
          <ul className="flex items-center gap-2.5">
            {barber.socials.map((s) => (
              <li
                key={s.name}
                className="p-2 text-sm rounded-full bg-neutral-800 flex items-center justify-center"
              >
                <a href={s.url}>
                  {s.name === "facebook" && <FaFacebookF />}
                  {s.name === "instagram" && <FaInstagram />}
                  {s.name === "email" && <MdOutlineMailOutline />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </AnimateElement>

      <AnimateElement className="flex flex-col md:flex-row items-center justify-between p-4 border-t text-neutral-400 border-t-neutral-600 my-auto">
            <span>Copyright © 2023 {barber.name}.</span>
            <a className="underline" href="https://www.instagram.com/evandroviegas.dev/">Made by Evandro Viegas</a>
      </AnimateElement>
    </SectionContainer>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <span className="block font-bold text-2xl">{children}</span>;
}
