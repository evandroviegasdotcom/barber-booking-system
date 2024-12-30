"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookingInfo from "./booking-info";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useBookingContext } from "../booking-context/provider";
import { PiSpinnerLight } from "react-icons/pi"
import { createAppointment } from "@/services/appointment";
export default function ConfirmationDialog() {
  const {
    bookingState: { timeSlot, date, barber, note, services },
  } = useBookingContext();
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const handleCreateAppointment = async () => {
    if (!date || !services || !barber?._id || !timeSlot) return;
    setIsLoading(true)
    await createAppointment({
      date,
      note,
      services,
      barberId: barber?._id,
      timeSlot,
    });
    toast({ title: "Appointment Created Successfully!" });
    router.push("/dashboard");
    setIsLoading(false)
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg" variant="secondary">
          Confirm
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm the information</DialogTitle>
          <DialogDescription>
            After clicking Confirm a new request is going to be submitted to the
            selected barber
          </DialogDescription>
        </DialogHeader>
        <BookingInfo />
        <DialogFooter className="sm:justify-start">
          <Button className="flex items-center gap-2" onClick={handleCreateAppointment}>
            {isLoading && <PiSpinnerLight className="animate-spin" />}
            <span>Confirm</span>
            </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
