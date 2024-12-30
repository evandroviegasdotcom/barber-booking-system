import { getServices } from "@/services/services";
import { Service } from "@/types/service";
import Image from "next/image";
import React, { useState } from "react";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useBookingContext } from "../../booking-context/provider";
import StepContainer from "../StepContainer";

export default function Services() {
  const { data: services, isLoading } = useSWR("/api/services", getServices);
  const {
    bookingState: { services: contextServices },
    updateBookingState,
  } = useBookingContext();

  const [selectedServices, setSelectedServices] = useState(contextServices);

  if (isLoading) return "Loading...";
  if (!services) return "No Services";

  const onServiceSelection = (service: Service) => {
    const isSelected = selectedServices?.find((s) => s._id === service._id);
    if (isSelected) {
      const nServices =
        selectedServices?.filter((s) => s._id !== service._id) || [];
      setSelectedServices(nServices);
      return;
    }
    const nServices = [...(selectedServices || []), service];

    setSelectedServices(nServices);
  };
  const handleNext = () => {
    updateBookingState("services", selectedServices);
  };

  return (
    <StepContainer
      title="Wich services do you need"
      subtitle="Let us take care of your needs"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              className={cn(
                `space-y-4 w-full px-4 py-2 rounded`,
                selectedServices?.includes(service) ? "bg-zinc-900" : ""
              )}
              key={service._id}
              onClick={() => onServiceSelection(service)}
            >
              <div className="relative w-full h-44">
                <Image src={service.image} fill alt="Service image" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-semibold">{service.title}</h4>
                <p className="text-zinc-600">
                  {service.description}blablalbbbb
                </p>
                <p>{service.price}$</p>
              </div>
            </div>
          ))}
        </div>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </StepContainer>
  );
}
