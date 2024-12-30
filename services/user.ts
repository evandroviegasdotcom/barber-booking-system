"use server"
import { sanity } from "@/sanity/lib/client";
import { User } from "@/types/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type CreateUser = {
    email: string
    id: string
    image: string
    fullname: string
}

type CompleteUserLogin = {
    userId: string, 
    fullname: string
}

export async function getUser(userId: string) {
    const q = `*[_type=="user" && _id=="${userId}"][0]`
    const res = await sanity.fetch(q)
    return res as User | null
}


export async function createUser(data: CreateUser) {
    try {
        const userDoc = {
            _type: "user",
            _id: data.id,
            email: data.email,
            image: data.image,
            login_completed: false,
            fullname: data.fullname
        }
        await sanity.create(userDoc) 
        redirect("/book")
    } catch (error) {
        console.log(error)
    }
   
}


export async function completeUserLogin({ userId, fullname }: CompleteUserLogin) {
     await sanity.patch(userId).set({ login_completed: true, fullname }).commit()
     revalidatePath("/", "layout")
}

export async function isUserLoginCompleted(id: string | undefined) {
    if(!id) return 
    const q = `*[_type=='user' && _id=='${id}'][0]{
    "login_completed": coalesce(login_completed, false)
    }.login_completed`
    const res = await sanity.fetch(q)
    return res
}