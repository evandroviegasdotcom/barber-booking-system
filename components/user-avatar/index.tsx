import { getUser } from "@/services/user";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SignOutBtn from "./sign-out-button";
import { isBarber } from "@/services/barber";

export default async function UserAvatar() {
  const clerkUser = await currentUser();
  if (!clerkUser) return;
  const user = await getUser(clerkUser.id);
  if (!user) return (
    <div className="flex items-center gap-1">
      <span>An error occured</span>
      <SignOutBtn />
    </div>
  )

  const isUserAbarber = await isBarber();
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center gap-3 px-3 py-2 bg-zinc-900 ">
          {isUserAbarber && (
            <div className="text-white bg-green-800 border-2 border-dashed border-green-500  p-0.5 text-xs">
              Barber
            </div>
          )}
            <span>{user.fullname}</span>
          <Image
            alt="Profile pic"
            src={user.image}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <SignOutBtn />
      </PopoverContent>
    </Popover>
  );
}
