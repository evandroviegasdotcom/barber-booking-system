"use client";


import { cn } from "@/lib/utils";
import { Appointment } from "@/types/appointment";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from "date-fns";
import AppointmentItem from "./appointment-item";
import Config from "./config";
import { useSearchParams } from "next/navigation";
import { SEARCHPARAMS } from "./constants";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


type CalendarProps = {
  appointments: Appointment[];
};

export default function Calendar({ appointments }: CalendarProps) {


  const searchParams = useSearchParams()
  const currDate = new Date()

  const month = Number(searchParams.get(SEARCHPARAMS.MONTH )) || currDate.getDate()

  const selectedDate = new Date(currDate.getFullYear(), month, currDate.getDate());
  const firstDayOfMonth = startOfMonth(selectedDate);
  const lastDayOfMonth = endOfMonth(selectedDate);
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });
  const startingDayIdx =
    getDay(firstDayOfMonth) - 1 < 0 ? 6 : getDay(firstDayOfMonth) - 1; // Adjust for Monday start
  const appointmentsGroupedByDate = appointments.reduce(
    (acc: Record<string, Appointment[]>, app) => {
      if (!acc[app.date]) acc[app.date] = [];
      acc[app.date].push(app);
      return acc;
    },
    {}
  );
  return (
    <div className="mt-12">
      
      <Config />

      <div className="grid md:grid-cols-7 grid-cols-2   gap-1">
        {weekDays.map((w) => (
          <span className="font-medium hidden md:inline" key={w}>
            {w}
          </span>
        ))}
        {Array.from({ length: startingDayIdx }).map((_, idx) => (
          <div className="bg-zinc-800/20 min-h-44" key={idx} />
        ))}
        {daysInMonth.map((date) => (
          <div
            key={date.toISOString()}
            className="bg-zinc-900  relative flex items-end p-1 min-h-44 h-full"
          >
            <div className="space-y-1 w-full">
              {(appointmentsGroupedByDate[format(date, "PPP")] || []).map(
                (appointment) => (
                  <AppointmentItem appointment={appointment} key={appointment._id} />
                )
              )}
            </div>
            <div
              className={cn(
                "absolute top-4 right-4 w-6 h-6 text-xs flex justify-center items-center rounded p-2 shadow font-black",
                isToday(date)
                  ? "bg-red-600 text-white"
                  : "bg-white text-zinc-600"
              )}
            >
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
