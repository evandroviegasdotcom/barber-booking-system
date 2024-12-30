"use client";

import { getOperationalTimes } from "@/services/config";
import React from "react";
import useSWR from "swr";
import { useBookingContext } from "../../booking-context/provider";
import StepContainer from "../StepContainer";

const generateTimeSlots = (
  startTime: string,
  endTime: string,
  interval: number = 30
) => {
  const timeSlots = [];

  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  while (start < end) {
    const hours = start.getHours().toString().padStart(2, "0");
    const minutes = start.getMinutes().toString().padStart(2, "0");
    timeSlots.push(`${hours}:${minutes}`);
    start.setMinutes(start.getMinutes() + interval); // increment by the interval (30 minutes)
  }

  return timeSlots;
};

export default function TimeSlot() {
  const { data: operationalTimes, isLoading } = useSWR(
    "/api/operational_times",
    getOperationalTimes
  );
  const { updateBookingState } = useBookingContext();

  if (isLoading) return "Loading...";
  if (!operationalTimes) return "No Operational Time Available";

  const { starting_time, ending_time } = operationalTimes;
  const timeSlots = generateTimeSlots(starting_time, ending_time);
  return (
    <StepContainer
    title="Wich time slot is more convenient to you?"
  >
   <div className="grid grid-cols-3 gap-3 p-2  rounded-md">
        {timeSlots.map((timeSlot, index) => (
          <div
            onClick={() => updateBookingState("timeSlot", timeSlot)}
            key={index}
            className="w-full text-center rounded border border-zinc-600 p-3 hover:brightness-150"
          >
            {timeSlot}
          </div>
        ))}
      </div>
  </StepContainer>
     
  );
}
