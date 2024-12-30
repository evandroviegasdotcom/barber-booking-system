import { sanity } from "@/sanity/lib/client"

export async function getWorkingDays() {
    const q = `*[_type=='config'][0]{
        working_days
    }.working_days`
    const res = await sanity.fetch(q)
    return res as string[]
}

export async function getOperationalTimes() {
    const q = `*[_type=='config'][0]{
    starting_time,
    ending_time
    }`

    const res = await sanity.fetch(q) as { starting_time: string, ending_time: string }
    return res  
}