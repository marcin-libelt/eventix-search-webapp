import { EventoEvent } from "@/types";
import React from "react";
import EventCard from "./event-card";

type EventoListProps = {
  events: EventoEvent[];
};

export default function EventsList({ events }: EventoListProps) {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
