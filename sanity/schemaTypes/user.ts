import { defineField, defineType } from "sanity";

export const user = defineType({
    title: "User",
    name: "user",
    type: "document",
    fields: [
        defineField({
            title: "Fullname",
            name: "fullname",
            type: "text",
        }),
        defineField({
            title: "Email",
            name: "email",
            type: "text"
        }),
        defineField({
            title: "Image",
            name: "image",
            type: "text",
        }),
        defineField({
            title: "Completed",
            name: "login_completed",
            type: "boolean",
        }),
    ]
})