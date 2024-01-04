import H1 from "@/components/H1";
import EventsList from "@/components/events-list";
import { EventoEvent } from "@/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=austin`
  );

  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-28">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
