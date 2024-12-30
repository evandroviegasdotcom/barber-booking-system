import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export default function Title({
  children,
  className,
  ...rest
}: PropsWithChildren & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn("text-4xl uppercase font-semibold", className)} {...rest}>
      {children}
    </h4>
  );
}
