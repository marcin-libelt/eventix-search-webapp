import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Finfd events around you</h1>
      <p>Browse more than 10,000 events around you</p>

      <form>
        <input
          type="text"
          spellCheck={false}
          placeholder="Search events in any city..."
        />
      </form>

      <section>
        <div>
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seatle">Seatle</Link>
        </div>
      </section>
    </main>
  );
}
