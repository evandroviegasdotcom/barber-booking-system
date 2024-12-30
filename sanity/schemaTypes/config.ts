import { defineField, defineType } from "sanity";

// Time slot options
const timeSlots = [
  "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
  "22:00", "22:30", "23:00"
];

export const config = defineType({
  title: "Config",
  name: "config",
  type: "document",
  fields: [
    defineField({
      title: "Working Days",
      name: "working_days",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Monday", value: "monday" },
              { title: "Tuesday", value: "tuesday" },
              { title: "Wednesday", value: "wednesday" },
              { title: "Thursday", value: "thursday" },
              { title: "Friday", value: "friday" },
              { title: "Saturday", value: "saturday" },
              { title: "Sunday", value: "sunday" },
            ],
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((days) => {
          if (!days) return true; // No days means no duplicates
          const uniqueDays = new Set(days);
          return uniqueDays.size === days.length
            ? true
            : "Working days must be unique.";
        }),
    }),
    defineField({
      title: "Starting Time",
      name: "starting_time",
      type: "string",
      options: {
        list: timeSlots,
      },
    }),
    defineField({
      title: "Ending Time",
      name: "ending_time",
      type: "string",
      options: {
        list: timeSlots,
      },
    }),
  ],
  preview: {
    select: {
      workingDays: "working_days",
      startingTime: "starting_time",
      endingTime: "ending_time",
    },
    prepare({ workingDays, startingTime, endingTime }) {
      const daysList = workingDays?.join(", ") || "No days selected";
      const start = startingTime || "No start time";
      const end = endingTime || "No end time";

      return {
        title: `Working Days: [${daysList}]`,
        subtitle: `Time: ${start} - ${end}`,
      };
    },
  },
});
