"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";
import { useBookingContext } from "../../booking-context/provider";
import StepContainer from "../StepContainer";

export default function Note() {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  const { updateBookingState } = useBookingContext();
  const handleNext = () => {
    updateBookingState("note", textareaRef.current?.value);
  };
  return (
    <StepContainer title="Add an additional note" subtitle="(optional)">
      <div className="w-full space-y-4">
        <Textarea className="w-full" ref={textareaRef} />
        <Button onClick={handleNext}>Next</Button>
      </div>
    </StepContainer>
  );
}
