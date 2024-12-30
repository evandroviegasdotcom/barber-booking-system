import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export default function SubTitle({
  children,
  className,
  ...rest
}: PropsWithChildren & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn("text-2xl uppercase font-semibold text-zinc-500", className)} {...rest}>
      {children}
    </h4>
  );
}
