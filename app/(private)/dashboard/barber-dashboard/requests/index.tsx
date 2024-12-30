import { Appointment } from "@/types/appointment";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import RequestActions from "./request-actions";

type Props = {
  requests: Appointment[];
};
export default function Requests(props: Props) {
  const { requests } = props;
  
  if (!requests || requests.length <= 0) return "No requests to show!";
  return (
    <div className="grid grid-cols-4 gap-6">
      {requests.map((request) => (
        <Card key={request._id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Image
                src={request.client.image}
                width={25}
                height={25}
                className="rounded-full"
                alt="Profile pic"
              />
              <span>Request from {request.client.fullname}</span>
            </CardTitle>
            <CardDescription>Additional note: {request.note}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-zinc-300">
            <div className="flex items-center gap-1">
              <span>Date: </span>
              <span>{request.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Services: </span>
              <span>
                {request.services.map((service) => service.title).join(", ")}
              </span>
            </div>
          </CardContent>
          <CardFooter >
            <RequestActions request={request} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
