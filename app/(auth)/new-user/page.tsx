import React from "react";
import Form from "./form";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { isUserLoginCompleted } from "@/services/user";
import UserAvatar from "@/components/user-avatar";

export default async function Page() {
  const authedUser = await currentUser();
  if (!authedUser) return redirect("/sign-in");
  const isLoginCompleted = await isUserLoginCompleted(authedUser.id)
  if(isLoginCompleted) return redirect("/book")
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="absolute right-4 top-4">
      <UserAvatar />
      </div>
      <div className="space-y-8 px-4 py-12 bg-zinc-950">

        <span className="text-center w-full text-4xl mx-auto font-black">
          FINISH UP YOUR LOGIN
        </span>
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full gap-6 ">
            <Image
              src={authedUser.imageUrl}
              width={60}
              height={60}
              className="object-cover rounded-full"
              alt="Profile pic"
            />
            <span>{authedUser.emailAddresses[0].emailAddress}</span>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
