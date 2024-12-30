import { Barber } from "@/types/barber";
import { Service } from "@/types/service";

export type BookingSteps = "barber" | "date" | "timeSlot" | "services" | "note";

export type BookingState = {
  barber?: Barber;
  date?: Date;
  timeSlot?: string;
  services?: Service[];
  note?: string;
};

export type BookingContextType = {
  bookingState: BookingState;
  updateBookingState: <K extends keyof BookingState>(
    key: K,
    value: BookingState[K]
  ) => void;
  currentStep: BookingSteps;
  isBookingCompleted: boolean;
};

export const initialBookingState: BookingState = {
  barber: undefined,
  date: undefined,
  timeSlot: "",
  services: [],
  note: "",
};
