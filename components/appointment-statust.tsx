"use client";
import { cn } from "@/lib/utils";
import type { Appointment, AppointmentStatus } from "@/types/appointment";
import { APPOINTMENT_STATUS } from "@/constants";

const statusClassNameMap = new Map<Appointment["status"], string>([
  ["confirmed", "bg-green-500"],
  ["to_confirm", "bg-gray-500 "],
  ["rejected", "bg-red-500"],
]);
export default function AppointmentStatus({
  appointment,
}: {
  appointment: Appointment;
}) {
  const { status: statusValue } = appointment;
  const status = APPOINTMENT_STATUS.find((s) => s.value === statusValue);
  if (!status) return null;
  return (
    <div
      className={cn(
        "text-white text-xs w-full flex gap-2 items-center",
       
      )}
    >
      <div className={cn(
        "w-2.5 h-2.5 rounded-full",
        statusClassNameMap.get(status.value)
      )} />
      {status.title}
    </div>
  );
}
