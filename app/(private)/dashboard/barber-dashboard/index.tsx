import React from "react";
import Calendar from "./calendar";
import Requests from "./requests";
import { currentUser } from "@clerk/nextjs/server";
import { getAppointments } from "@/services/appointment";
import type { BarberDashboard } from "../page";

export default async function BarberDashboard({
  searchParams,
}: {
  searchParams: BarberDashboard;
}) {

  const barberEmails = searchParams?.barberEmails || []
  const spSelectedBarbersEmail = Array.isArray(barberEmails) 
  ? barberEmails 
  : [barberEmails];
  const spOnlyShowConfirmed = searchParams?.onlyShowConfirmed
  const appointments = await getAppointments({
    emails: spSelectedBarbersEmail,
    confirmed: spOnlyShowConfirmed === "true",
  });

  const authedUser = await currentUser();
  const authedUserEmail = authedUser?.emailAddresses[0].emailAddress;

  const requests = appointments.filter(
    (appointment) =>
      appointment.status === "to_confirm" &&
      appointment.barber.email === authedUserEmail
  );
  return (
    <div className="space-y-24">
      <Requests requests={requests} />
      <Calendar appointments={appointments} />
    </div>
  );
}
