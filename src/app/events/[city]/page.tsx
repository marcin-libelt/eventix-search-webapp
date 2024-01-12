import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { type Metadata } from "next";
import { z } from "zod";
type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: `Evento - Events in ${capitalize(city)}`,
    description: "Browse more than 10,000 events worldwide",
  };
}

export async function generateStaticParams() {
  return [
    {
      city: "austin",
    },
    {
      city: "seattle",
    },
  ];
}

export default function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Ivalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-28">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
