"use client";
import { Calendar } from "@/components/ui/calendar";
import { getWorkingDays } from "@/services/config";
import React from "react";
import useSWR from "swr";
import { useBookingContext } from "../../booking-context/provider";
import StepContainer from "../StepContainer";

const workingDaysMap = new Map<number, string>([
  [0, "sunday"],
  [1, "monday"],
  [2, "tuesday"],
  [3, "wednesday"],
  [4, "thursday"],
  [5, "friday"],
  [6, "saturday"],
]);

export default function DateSelector() {
  const { data: workingDays, isLoading } = useSWR(
    "/api/working_days",
    getWorkingDays
  );
  const {
    bookingState: { date },
    updateBookingState,
  } = useBookingContext();

  if (isLoading) return "Loading...";
  if (!workingDays) return "No Working Days Available";

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 9); // Add 9 days to the current date

  return (
    <StepContainer
      title="Choose a date"
      subtitle="Wich date is more convenient to you?"
    >
      <Calendar
        mode="single"
        selected={date}
        onSelect={(newDate) => updateBookingState("date", newDate)}
        disabled={(date) => {
          const dayOfTheWeek = workingDaysMap.get(date.getDay());
          if (!dayOfTheWeek) return false;
          return (
            date < today ||
            date > maxDate ||
            !workingDays.includes(dayOfTheWeek)
          );
        }}
        className="rounded-md border shadow"
      />
    </StepContainer>
  );
}
