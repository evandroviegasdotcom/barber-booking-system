import React from 'react'
import { Check, ChevronsUpDown } from "lucide-react";
import { Barber } from "@/types/barber";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import useSWR from 'swr';
import { getAllBarbers } from '@/services/barber';

export default function SelectedBarbers({
    selectedBarbers,
    setSelectedBarbers
}: {
    selectedBarbers: Barber[]
    setSelectedBarbers: (b: Barber[]) => void
    
}) {
  const [open, setOpen] = React.useState(false);
  const onBarberSelect = (barber: Barber) => {
    const alreadyExists = selectedBarbers.some((b) => b._id === barber._id);
    if (alreadyExists) {
      const nBarbers = selectedBarbers.filter((b) => b._id !== barber._id);
      setSelectedBarbers(nBarbers);
    } else {
      const nBarbers = [...selectedBarbers, barber];
      setSelectedBarbers(nBarbers);
    }
    setOpen(false);
  };

  const { data: barbers, isLoading } = useSWR("/api/barbers", getAllBarbers);
  const areAllBarbersSelected =
    selectedBarbers.length === barbers?.length || selectedBarbers.length === 0;
    if (isLoading || !barbers) return null;

    
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between p-3"
        >
          {areAllBarbersSelected ? (
            "Selected All"
          ) : (
            <div className="flex items-center w-full h-full">
              {selectedBarbers.slice(0, 3).map((barber, idx) => (
                <div
                  key={barber._id}
                  className="relative h-[25px] aspect-square "
                >
                  <Image
                    src={barber.image}
                    fill
                    className={"rounded-full aspect-square object-cover"}
                    style={{
                      transform: `translateX(-${idx * 50}%)`,
                    }}
                    alt="Barber image"
                  />
                </div>
              ))}
            </div>
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {barbers.map((barber) => (
                <CommandItem
                  key={barber._id}
                  value={barber._id}
                  onSelect={() => onBarberSelect(barber)}
                >
                  {barber.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedBarbers.some((b) => b._id === barber._id)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
