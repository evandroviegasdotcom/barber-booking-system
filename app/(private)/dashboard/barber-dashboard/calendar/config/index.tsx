"use client";
import React, { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SelectedBarbers from "./selected-barbers";
import { Barber } from "@/types/barber";
import SelectedMonth from "./selected-month";
import { SEARCHPARAMS } from "../constants";

export default function Config() {
  const [selectedBarbers, setSelectedBarbers] = useState<Barber[]>([]);
  const [onlyShowConfirmedAppointments, setOnlyShowConfirmedAppointments] =
    useState(false);

  const currDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(currDate.getMonth());

  const router = useRouter();

  const handleFilter = () => {

    const params = new URLSearchParams();
    selectedBarbers.forEach((barber) => {
      params.append(SEARCHPARAMS.BARBER_EMAILS, barber.email);
    });

    params.set(
      SEARCHPARAMS.SHOW_CONFIRMED,
      String(onlyShowConfirmedAppointments)
    );

    params.set(SEARCHPARAMS.MONTH, String(selectedMonth));

    router.push(`?${params.toString()}`);

  };
  return (
    <div className="flex flex-col gap-2 p-12 bg-secondary/10 my-8">
      <span className="font-semibold">Configuration: </span>
      <div className="flex items-center gap-12">
        
      <div className="flex items-center gap-3">
          <span>Selected Month: </span>
       
        <SelectedMonth setMonth={setSelectedMonth} month={selectedMonth} />
        </div>

        <div className="flex items-center gap-3">
          <span>Selected Barbers: </span>
          <SelectedBarbers
            setSelectedBarbers={setSelectedBarbers}
            selectedBarbers={selectedBarbers}
          />
        </div>

        <div className="flex items-center gap-3">
          <Checkbox
            onCheckedChange={(e) =>
              setOnlyShowConfirmedAppointments(Boolean(e))
            }
            checked={onlyShowConfirmedAppointments}
          />
          <span>Only show confirmed appointments</span>
        </div>
        <Button size="sm" variant="secondary" onClick={handleFilter}>
          Apply
        </Button>
      </div>
    </div>
  );
}
