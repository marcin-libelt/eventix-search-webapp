import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";

type EventoListProps = {
  city: string;
};

export default async function EventsList({ city }: EventoListProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
