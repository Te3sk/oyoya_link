import React from "react";
import db from "./dbLinks.json";
import style from "./styles.json";
import EventDescr from "./EventDescr";

export default function HomeView() {
  // parse styles from json file
  const [styles, setStyles] = React.useState({});
  React.useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(style));
    setStyles(parsed);
  }, []);

  const [view, setView] = React.useState("home");

  const changeView = (s) => {
    setView(s);
  }

  const links = db.Links;
  const events = db.Events;

  const ChooseEvent = (n) => {
    const today = new Date();
    // limit date (n days from today)
    var limit = new Date(today);
    limit.setDate(limit.getDate() + n.n);

    // filter events that will occour in the next n days
    const upcomingEvents = Object.keys(events).filter((e) => {
      const eventDate = new Date(events[e].date);
      return eventDate >= today && eventDate <= limit;
    });

    var renderDate = (d) => {
      const date = new Date(d);
      return date.toLocaleDateString("it-IT", {
        year: "2-digit",
        month: "short",
        day: "2-digit",
      });
    };

    if (upcomingEvents.length === 0) return <></>;

    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        {upcomingEvents.map((ev) => {
          const event = events[ev];
          const block_img =
            event.img === "" ? "logo_white on black.png" : event.img;
          return (
            <button
              key={ev}
              onClick={() => changeView(ev)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-5/6 mx-auto my-8 p-4 bg-slate-900 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center">
                {/* immagine (problema immagini) */}
                <img
                  src={require("./../assets/" + block_img)}
                  alt={ev}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                {/* testo evento */}
                <div className="ml-4 text-white text-left">
                  <h2 className="text-xl font-bold">{ev.replace("_", " ")}</h2>
                  <p className="text-sm">{renderDate(event.date)}</p>
                  <p className="text-sm">{event.place}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  const Link = () => {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold"> Links </h1>
        {Object.keys(links).map((l) => {
          return (
            <a
              key={l}
              href={links[l].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-2/3 mx-auto my-5 p-4 bg-slate-900 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center">
                <img
                  src={links[l].img}
                  alt={l + " link"}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold ml-4">{l}</h2>
              </div>
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <main className="min-h-lvh pt-32 pb-16 bg-black text-white">
        {view === "home" ? <div>
        <ChooseEvent n={10} />
        <Link />
        </div>
        :
        <div className="flex flex-col text-white">
          <div className="h-30 flex flex-row justify-between items-center mx-5">
            <h1 className="text-4xl font-bold">{view}</h1>
            <button onClick={() => changeView("home")}>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/?size=100&id=AqDEb8mCIrk9&format=png&color=FFFFFF"
                alt="delete-sign"
              />
            </button>
          </div>
          <EventDescr event={view} />
        </div>
      }
      </main>
    </div>
  );
}
