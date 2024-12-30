"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useSWR from 'swr'
import { getAllBarbers } from "@/services/barber";
import { useBookingContext } from "../../booking-context/provider";

export default function BarbersList() {
  const { updateBookingState, bookingState: { barber: selectedBarber } } = useBookingContext();
  const { data: barbers, isLoading } = useSWR('/api/barbers', getAllBarbers)
  if(isLoading) return "Loading..."
  if(!barbers) return "No barbers"
  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      {barbers.map((barber) => (
        <div
          className={cn(
            "space-y-2 w-full p-2 transition-all duration-200",
            selectedBarber?._id === barber._id ? "bg-zinc-900" : "bg-transparent"
          )}
          key={barber._id}
          onClick={() => updateBookingState("barber", barber)}
        >
          <div className="relative h-[300px] ">
            <Image
              src={barber.image}
              fill
              alt="Barber Image"
              className="object-cover rounded"
            />
          </div>
          <div>
            <span>{barber.name}</span>
            <p className="truncate text-zinc-600">{barber.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
