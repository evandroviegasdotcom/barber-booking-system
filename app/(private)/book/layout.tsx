import UserAvatar from "@/components/user-avatar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="fixed top-6 right-6">
        <UserAvatar />
      </div>
      {children}
    </div>
  );
}
