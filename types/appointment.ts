import { APPOINTMENT_STATUS } from "@/constants"
import { Barber } from "./barber"
import { User } from "./user"
import { Service } from "./service"

export type Appointment = {
    _id: string
    barber: Barber
    date: string,
    client: User,
    status: AppointmentStatusValue,
    services: Service[]
    note: string | undefined
}


export type AppointmentStatusValue = typeof APPOINTMENT_STATUS[number]["value"]
export type AppointmentStatus = typeof APPOINTMENT_STATUS[number]