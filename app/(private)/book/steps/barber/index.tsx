import React from "react";
import BarbersList from "./BarbersList";
import StepContainer from "../StepContainer";

export default function Barber() {
  return (
    <StepContainer
      title="Choose a barber"
      subtitle="Wich barber are going to choose?"
    >
      <BarbersList />
    </StepContainer>
  );
}
