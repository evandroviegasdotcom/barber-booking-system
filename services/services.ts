import { sanity } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Service } from "@/types/service"

export async function getServices() {
    const q = `*[_type=="service"]`
    const services = await sanity.fetch(q)  as Service[]
    return services.map(s => prepareService(s))   
}



function prepareService(service: Service | undefined) {
    return { ...service, image: service?.image ? urlFor(service.image).url() : "" } as Service
}