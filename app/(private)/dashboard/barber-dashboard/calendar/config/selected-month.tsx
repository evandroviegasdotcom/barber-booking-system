"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MdKeyboardArrowDown } from "react-icons/md";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type SelectedMonthProps = {
  month: number;
  setMonth: (m: number) => void;
};
export default function SelectedMonth({ month, setMonth }: SelectedMonthProps) {
  const currentMonth = (new Date()).getMonth()
  const [open, setOpen] = useState(false)
  const onMonthSelect = (m: number) => {
    setMonth(m)
    setOpen(false)
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild onClick={() => setOpen(true)}>
        <div className="flex items-center gap-4 underline">
        {months[month]}
        <MdKeyboardArrowDown />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto  p-0" align="start">
        {months.map((m, idx) => (
          <div
            key={m}
            className={cn(
              "hover:bg-secondary/40 transition-all px-4 py-2 flex items-center gap-4",
              month === idx ? 'bg-secondary' : ''
            )}
            onClick={() => onMonthSelect(idx)}
          >
            {m}

            {idx === currentMonth && (
              <div className="w-2 h-2 rounded-full bg-red-400" />
            )}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
