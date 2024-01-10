import { notFound } from "next/navigation";
import { EventoEvent, PrismaClient } from "@prisma/client";
import { capitalize } from "./utils";

const prisma = new PrismaClient();

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });

  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });
  if (!event) return notFound();
  return event;
}
