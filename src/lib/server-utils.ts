import { notFound } from "next/navigation";
import { EventoEvent } from "./types";

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const event: EventoEvent = await response.json();

  if (!event) {
    notFound();
  }

  return event;
}

export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();
  return events;
}
