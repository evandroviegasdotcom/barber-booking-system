import { defineType, defineField } from "sanity";

export const barber = defineType({
    title: "Barber",
    name: "barber",
    type: "document",
    fields: [
        defineField({
            title: "Name",
            name: "name",
            type: "string"
        }),
        defineField({
            title: "Email",
            name: "email",
            type: "email"
        }),
        defineField({
            title: "Description",
            name: "description",
            type: "text"
        }),
        defineField({
            title: "Image",
            name: "image",
            type: "image"
        }),
    ]
})