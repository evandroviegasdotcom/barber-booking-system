"use client";

import React from "react";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { format } from "date-fns";
import { useBookingContext } from "../booking-context/provider";

const StepDisplay = ({
  label,
  content,
  onClear,
}: {
  label: string;
  content: React.ReactNode;
  onClear: () => void;
}) => (
  <div className="flex flex-col gap-4">
    <span className="text-zinc-500">{label}:</span>
    <div className="flex items-center gap-7">
      {content}
      <button className="rotate-45" onClick={onClear}>
        <IoMdAdd />
      </button>
    </div>
  </div>
);

export default function BookingInfo() {
  const { bookingState, updateBookingState } = useBookingContext();
  const { barber, date, note, services, timeSlot } = bookingState;
  return (
    <div className="flex flex-col gap-6">
      {barber && (
        <StepDisplay
          label="Selected Barber"
          content={
            <>
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={barber.image}
                  alt="Barber Image"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span className="font-semibold text-xl text-zinc-300">
                {barber.name}
              </span>
            </>
          }
          onClear={() => updateBookingState("barber", undefined)}
        />
      )}
      {date && (
        <StepDisplay
          label="Selected Date"
          content={format(date, "PPP")}
          onClear={() => updateBookingState("date", undefined)}
        />
      )}
      {timeSlot && (
        <StepDisplay
          label="Selected Time"
          content={timeSlot}
          onClear={() => updateBookingState("timeSlot", "")}
        />
      )}
      {[services || []].length > 0 && (
        <StepDisplay
          label="Selected Services"
          content={services?.map((s) => s.title).join(", ")}
          onClear={() => updateBookingState("services", [])}
        />
      )}
      {note && (
        <StepDisplay
          label="Note"
          content={note}
          onClear={() => updateBookingState("note", "")}
        />
      )}
    </div>
  );
}
