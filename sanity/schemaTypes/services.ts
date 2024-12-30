import { defineField, defineType } from "sanity";

export const services = defineType({
  title: "Service",
  name: "service",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
      }),
      defineField({
        name: "description",
        title: "Description",
        type: "text",
      }),
      defineField({
        name: "price",
        title: "Price",
        type: "number",
      }),
      defineField({
        name: "image",
        title: "Image",
        type: "image",
      }),
  ],
});
