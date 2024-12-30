import { urlFor } from "@/sanity/lib/image";
import { Barber } from "@/types/barber";

export function prepareBarber(barber: Barber | undefined) {
    return { ...barber, image: barber?.image ? urlFor(barber.image).url() : "" } as Barber
}