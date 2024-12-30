"use client";
import React, { useEffect, useState } from "react";
import links from "./links";
import barber from "@/data";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "../logo";
import { IoMdArrowUp } from "react-icons/io";
import AnimateElement from "../animated-element";
import BookButton from "../contact-us-button";
import { useHeroIntersectionContext } from "@/app/(public)/components/sections/hero/heroIntersection-context";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { inView } = useHeroIntersectionContext();
  useEffect(() => {
    if (open) {
      window.document.body.classList.remove("show-scrollbar");
      window.document.body.classList.add("hide-scrollbar");
    } else {
      window.document.body.classList.add("show-scrollbar");
      window.document.body.classList.remove("hide-scrollbar");
    }
  }, [open]);

  return (
    <>
      <AnimateElement
        className={`transition-all border-b ${
          inView
            ? "bg-transparent border-b-white/0"
            : "bg-black border-b-white/20"
        } text-white fixed top-0 inset-x-0 p-8 nav-z max-screen-w mx-auto `}
      >
        <nav className="flex full md:justify-between justify-around items-center">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden inline text-2xl"
          >
            <GiHamburgerMenu />
          </button>
          <Logo />
          <ul className="hidden md:flex font-semibold gap-8">
            {links.map((l, idx) => (
              <a href={l.href} key={l.href}>
                <li>
                  {idx + 1}. {l.name}
                </li>
              </a>
            ))}
          </ul>
          <div className="flex items-center gap-12 ">
            <div className="font-bold flex items-center gap-2 text-2xl">
              <FaPhoneVolume />
              <span className="hidden md:inline">{barber.number}</span>
            </div>
            <BookButton  />
          </div>
        </nav>

        <div
          className={`md:hidden  inset-0  ${open ? "bg-foreground/40" : ""} ${
            open ? "fixed nav-z " : "absolute z-[-100]"
          }`}
        >
          <div
            className={`relative h-full bg-foreground  w-[400px] max-w-[80vw] transition-all  ${
              open ? "translate-x-0 nav-z " : "-translate-x-full"
            } `}
          >
            <button
              onClick={() => setOpen(false)}
              className={`absolute nav-z right-0  text-4xl bg-foreground p-1.5 transition-all ${
                open ? "translate-x-full" : "-translate-x-full"
              }`}
            >
              <IoMdClose />
            </button>
            <ul className="pl-12 pt-24 font-semibold  flex flex-col gap-6">
              {links.map((l, idx) => (
                <a href={l.href} key={l.href}>
                  <li className="">
                    {idx + 1}. {l.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </AnimateElement>
      <>
        <a
          href="#hero"
          className={`transition-all z-[4] ${
            inView ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          } fixed right-6 bottom-6 p-5 bg-white text-black`}
        >
          <IoMdArrowUp />
        </a>
      </>
    </>
  );
}
