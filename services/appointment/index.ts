"use server";

import { DEFAULT_APPOINTMENT_STATUS } from "@/constants";
import { sanity } from "@/sanity/lib/client";
import { Appointment } from "@/types/appointment";
import { Service } from "@/types/service";
import { currentUser } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { prepareBarber } from "../barber/client";

type CreateAppointment = {
  date: Date;
  barberId: string;
  timeSlot: string;
  services: Service[];
  note: string | undefined;
};

type GetAppointmentsProps = {
  emails: string[];
  confirmed: boolean;
};
export async function createAppointment({
  date,
  timeSlot,
  barberId,
  services,
  note,
}: CreateAppointment) {
  const appointmentDate = new Date(date);
  const [hours, minutes] = timeSlot.split(":").map(Number);
  appointmentDate.setHours(hours, minutes, 0, 0);

  const authedUser = await currentUser();
  const authedUserId = authedUser?.id;

  const serviceReferences = services.map((service) => ({
    _ref: service._id,
    _key: uuidv4(),
  })); // Convert services to references

  const appointmentDoc = {
    _type: "appointment",
    barber: { _ref: barberId },
    client: { _ref: authedUserId },
    date: appointmentDate,
    services: serviceReferences,
    status: DEFAULT_APPOINTMENT_STATUS.value,
    note,
  };

  await sanity.create(appointmentDoc);
}

export async function getBarberAppointments(barberEmail: string) {
  const q = `*[_type == "appointment" && barber->email == "${barberEmail}"]{
  ...,  
  barber->,
  client->,
  services[]->,
  }`;

  const appointments = (await sanity.fetch(q)) || [];
  return (appointments as Appointment[]).map((app) => (prepareAppointment(app)));
}

export async function getAppointments(filter?: GetAppointmentsProps) {
  let filterQuery = "";
  const emails = filter?.emails || [];

  if (emails.length > 0) {
    const emailList = emails.map((email) => `"${email}"`).join(", ");
    filterQuery += ` && barber->email in [${emailList}]`;
  }

  if (filter?.confirmed) {
    filterQuery += ` && status == "confirmed"`;
  }

  const q = `*[_type == "appointment"${filterQuery}]{
      ...,  
      barber->,
      client->,
      services[]->,
      status
      }`;

  const appointments = (await sanity.fetch(q)) || [];
  return (appointments as Appointment[]).map((app) => prepareAppointment(app));
}

function prepareAppointment(appointment: Appointment) {
  return {
    ...appointment,
    date: format(appointment.date, "PPP"),
    barber: prepareBarber(appointment.barber),
  };
}
