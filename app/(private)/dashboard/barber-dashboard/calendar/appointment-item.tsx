import AppointmentStatus from "@/components/appointment-statust";
import { Appointment } from "@/types/appointment";
import Image from "next/image";
import React from "react";

export default function AppointmentItem({
  appointment,
}: {
  appointment: Appointment;
}) {

  console.log(appointment)
  return (
    <div className="w-full space-y-2 bg-zinc-800 px-4 py-1.5">
      <div className="w-full flex justify-between items-center">
        <Image
          src={appointment.client.image}
          width={30}
          height={30}
          className="rounded-full object-cover"
          alt="Appointment Client Profile"
        />
        <span className="font-semibold text-sm">{appointment.client.fullname}</span>
      </div>
      <AppointmentStatus appointment={appointment} />
      <div className="flex items-center gap-4 py-2 border-t border-t-white/20">
    <div className="flex items-center gap-1.5">
    <Image src={appointment.barber.image} width={20} height={20} className="rounded-full object-cover" alt="Barber profile" />
    <span className="font-semibold text-xs">{appointment.barber.name}</span>
    </div>
      </div>
    </div>
  );
}
