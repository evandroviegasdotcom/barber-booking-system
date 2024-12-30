"use client";
import React from "react";
import { HeroIntersectionContextProvider } from "./components/sections/hero/heroIntersection-context";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <HeroIntersectionContextProvider>
      <Toaster />
        {children}
      </HeroIntersectionContextProvider>
    </ClerkProvider>
  );
}
