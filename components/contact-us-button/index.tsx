import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function BookButton() {
  return (
    <Link className="group " href={'/book'}>
      <div className=" grid grid-cols-3 font-bold border border-white w-fit group-hover:bg-neutral-800">
        <div className="w-full h-full col-span-2 border-r text-center border-white py-5 px-8">
          Book Now
        </div>
        <div className="flex items-center justify-center py-5 px-8 text-2xl">
          <IoMdArrowForward className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
