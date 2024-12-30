"use client";

import React, {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { BookingContextType, BookingState, BookingSteps, initialBookingState } from "./typesAndData";


export const BookingContext = createContext({} as BookingContextType);
export function useBookingContext() {
  return useContext(BookingContext)
}

const optionalSteps: BookingSteps[] = ["note"];

export function BookingContextProvider({ children }: PropsWithChildren) {
  const [bookingState, setBookingState] =
    useState<BookingState>(initialBookingState);
  const [currentStep, setCurrentStep] = useState<BookingSteps>("barber");

  const stepsOrder: BookingSteps[] = [
    "barber",
    "date",
    "timeSlot",
    "services",
    "note",
  ];
  
  const isValid = (step: BookingSteps) => {
    const value = bookingState[step];
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "string") return value.trim() !== "";
    if (value instanceof Date) return !isNaN(value.getTime());
    return value != null; 
  };

  const updateCurrentStep = () => {
    for (const step of stepsOrder) {
      if (!isValid(step)) {
        setCurrentStep(step);
        return;
      }
    }
    setCurrentStep("note"); 
  };

  useEffect(() => {
    updateCurrentStep();
  }, [bookingState]);

  const updateBookingState = <K extends keyof BookingState>(
    key: K,
    value: BookingState[K]
  ) => {
    setBookingState((prev) => ({ ...prev, [key]: value }));
  };

  const isBookingCompleted = stepsOrder
  .filter((step) => !optionalSteps.includes(step)) 
  .every((step) => isValid(step));
  return (
    <BookingContext.Provider
      value={{
        bookingState,
        updateBookingState,
        currentStep,
        isBookingCompleted,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
