"use client";
import React from "react";
import TimeSlot from "./time-slot";
import Barber from "./barber";
import Date from "./date";
import ConfirmationDialog from "./confirmation-dialog";
import BookingInfo from "./booking-info";
import Services from "./services";
import Note from "./note";
import { useBookingContext } from "../booking-context/provider";
export default function Steps() {
  const { currentStep, isBookingCompleted } = useBookingContext();
  console.log(currentStep)
  return (
    <div className="grid grid-cols-3 gap-12 h-full">
      <div className="col-span-2 center p-12">

        {currentStep === "barber" && <Barber />}
        {currentStep === "date" && <Date />}
        {currentStep === "timeSlot" && <TimeSlot />}
        {currentStep === "services" && <Services />}
        {currentStep === "note" && <Note />}
      </div>
      <div className="bg-zinc-900 space-y-4 p-8 flex flex-col justify-between">

        <BookingInfo />
        {isBookingCompleted ? <ConfirmationDialog /> : null}
      </div>
    </div>
  );
}
