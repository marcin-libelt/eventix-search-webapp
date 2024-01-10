import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/server-utils";

type EventoListProps = {
  city: string;
  page: number;
};

export default async function EventsList({ city, page }: EventoListProps) {
  const events = await getEvents(city, page);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
