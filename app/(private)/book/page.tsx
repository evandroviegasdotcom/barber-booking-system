import React from "react";
import { BookingContextProvider } from "./booking-context/provider";
import Steps from "./steps";

export default function Page() {
  return (
    <BookingContextProvider>
      <div className="h-screen ">
        <Steps />
      </div>
    </BookingContextProvider>
  );
}
