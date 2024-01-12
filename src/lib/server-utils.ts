import "server-only";
import { notFound } from "next/navigation";
import { EventoEvent, PrismaClient } from "@prisma/client";
import { capitalize } from "./utils";
import { unstable_cache } from "next/cache";

const prisma = new PrismaClient();
const PAGE_SIZE = 6;

export const getEvents = unstable_cache(
  async (city: string, page: number = 1) => {
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "asc",
      },
      take: PAGE_SIZE,
      skip: (page - 1) * PAGE_SIZE,
    });

    let totalCount;
    if (city === "all") {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: {
          city: capitalize(city),
        },
      });
    }

    return {
      events,
      totalCount,
    };
  }
);

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });
  if (!event) return notFound();
  return event;
});
