import { isBarber } from "@/services/barber";
import React from "react";
import BarberDashboard from "./barber-dashboard";
import UserDashboard from "./user-dashboard";

export type BarberDashboard = { barberEmails: string[]; onlyShowConfirmed: string } | undefined

export default async function Page(props: {
  searchParams?: Promise<BarberDashboard>;
}) {
  const searchParams = await props.searchParams
  const isUserBarber = await isBarber();
  return (
    <div className="p-12">
      {isUserBarber ? (
        <BarberDashboard searchParams={searchParams} />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
}
