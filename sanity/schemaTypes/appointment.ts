import { defineField, defineType } from "sanity";

export const appointment = defineType({
  title: "Appointments",
  name: "appointment",
  type: "document",
  fields: [
    defineField({
      name: "barber",
      title: "Barber",
      type: "reference",
      to: [{ type: "barber" }],
    }),
    defineField({
      name: "date",
      title: "Appointment Date",
      type: "datetime",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({ name: "services", title: "Services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] }),
    defineField({ name: "note", title: "Note", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
    }),
  ],
});
