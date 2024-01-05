import { EventoEvent } from "@/lib/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date);
  const day = date.toLocaleDateString(undefined, { day: "2-digit" });
  const month = date.toLocaleDateString(undefined, { month: "short" });

  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
    >
      <section className="relative flex flex-col w-full h-full bg-white/[3%] rounded-xl overflow-hidden transition hover:scale-105 active:scale-[1.02]">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width="500"
          height="280"
          className="h-[60%] object-fit"
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <div className="absolute flex flex-col justify-center items-center left-3 top-3 h-11 w-11 bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-1.5">{day}</p>
          <p className="text-xs uppercase text-accent">{month}</p>
        </div>
      </section>
    </Link>
  );
}
