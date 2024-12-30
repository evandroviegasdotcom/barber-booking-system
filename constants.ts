export const APPOINTMENT_STATUS = [
  { title: "To Confirm", value: "to_confirm" },
  { title: "Confirmed", value: "confirmed" },
  { title: "Rejected", value: "rejected" },
] as const;
export const DEFAULT_APPOINTMENT_STATUS = APPOINTMENT_STATUS[0];
export const CONFIRMED_APPOINTMENT_STATUS = APPOINTMENT_STATUS[1]
export const REJECTED_APPOINTMENT_STATUS = APPOINTMENT_STATUS[2]
