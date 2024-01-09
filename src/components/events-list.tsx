import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/server-utils";

type EventoListProps = {
  city: string;
};

export default async function EventsList({ city }: EventoListProps) {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
