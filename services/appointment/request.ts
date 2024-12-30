"use server";

import { CONFIRMED_APPOINTMENT_STATUS, REJECTED_APPOINTMENT_STATUS } from "@/constants";
import { sanity } from "@/sanity/lib/client";
import { revalidatePath } from "next/cache";

export async function acceptAppointmentRequest(appointmentId: string) {
  await sanity
    .patch(appointmentId)
    .setIfMissing({ status: CONFIRMED_APPOINTMENT_STATUS })
    .set({ status: CONFIRMED_APPOINTMENT_STATUS.value })
    .commit()
    revalidatePath("/dashboard", "page")
}

export async function rejectAppointmentRequest(appointmentId: string) {
    await sanity
      .patch(appointmentId)
      .setIfMissing({ status: REJECTED_APPOINTMENT_STATUS })
      .set({ status: REJECTED_APPOINTMENT_STATUS.value })
      .commit()
      revalidatePath("/dashboard", "page")
  }
  
