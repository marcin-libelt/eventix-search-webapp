import H1 from "@/components/H1";
import EventsList from "@/components/events-list";
import { EventoEvent } from "@/lib/types";
import { Suspense } from "react";
import Loading from "./loading";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-28">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
