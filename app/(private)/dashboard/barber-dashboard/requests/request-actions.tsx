"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Appointment } from "@/types/appointment";
import { PiSpinnerLight } from "react-icons/pi";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  acceptAppointmentRequest,
  rejectAppointmentRequest,
} from "@/services/appointment/request";
import { useToast } from "@/hooks/use-toast";

export default function RequestActions({ request }: { request: Appointment }) {
  const [isRejectingLoading, setIsRejectingLoading] = useState(false);
  const [isAcceptingLoading, setIsAcceptingLoading] = useState(false);
  const { toast } = useToast();

  const onRequestAccept = async () => {
    setIsAcceptingLoading(true);
    await acceptAppointmentRequest(request._id);
    toast({ title: "Request accepted successfully!" });
    setIsAcceptingLoading(false);
  };

  const onRequestReject = async () => {
    setIsRejectingLoading(true);
    await rejectAppointmentRequest(request._id);
    toast({ title: "Request rejected successfully!" });
    setIsRejectingLoading(false);
  };
  return (
    <div className="flex items-center gap-3">
      <Button
        className="flex items-center gap-2 w-full"
        variant="secondary"
        onClick={onRequestAccept}
      >
        {isAcceptingLoading && <PiSpinnerLight className="animate-spin" />}
        Accept
      </Button>
      <Dialog>
        <DialogTrigger>
          {" "}
          <Button className="flex items-center gap-2 w-full" variant="ghost">
            Reject
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              You are rejecting {request.client.fullname}&apos;s Request
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={onRequestReject}
              className="flex items-center gap-2 w-full"
            >
              {isRejectingLoading && (
                <PiSpinnerLight className="animate-spin" />
              )}
              <span>Reject anyways</span>
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
