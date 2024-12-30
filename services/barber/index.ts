"use server"

import { sanity } from "@/sanity/lib/client"
import { Barber } from "@/types/barber"
import { currentUser } from "@clerk/nextjs/server"
import { prepareBarber } from "./client"

export async function getAllBarbers() {
    const q = `*[_type=='barber']`
    const res = await sanity.fetch(q) as Barber[] 
    return res.map(b => prepareBarber(b))
}

export async function getBarber(barberId: string | undefined) {
    if(!barberId) return
    const q = `*[_type=='barber' && _id=='${barberId}'][0]`
    const res = await sanity.fetch(q) as Barber | undefined
    return prepareBarber(res)
}



export async function isBarber(email?: string) {
    if(!email) {
        const clerkUser = await currentUser()
        email = clerkUser?.emailAddresses[0].emailAddress
    }
    const q = `count(*[_type=='barber' && email=='${email}']) > 0` 
    const res = await sanity.fetch(q)
    return Boolean(res) as boolean
}