import React from "react";
import db from "./dbLinks.json";
import EventDescr from "./EventDescr";

export default function EventView() {
  const [view, setView] = React.useState("list");

  const changeView = (s) => {
    setView(s);
  }

  const EventList = () => {
    const [events, setEvents] = React.useState([]);
    // parse the JSON file and set the events state
    React.useEffect(() => {
      const parsed = JSON.parse(JSON.stringify(db.Events));
      setEvents(parsed);
      // sort events by date
    }, []);

    var eventKeys = Object.keys(events)
      .filter((key) => key !== "template")
      .sort((a, b) => {
        const dateA = new Date(events[a].date);
        const dateB = new Date(events[b].date);
        return dateB - dateA;
      });

    var renderDate = (d) => {
      const date = new Date(d);
      return date.toLocaleDateString("it-IT", {
        year: "2-digit",
        month: "short",
        day: "2-digit",
      });
    };

    return (
      <main className="h-full pt-32 pb-16 bg-black text-white">
        <div className="container mx-auto px-4 z-0">
          <h1 className="text-4xl font-bold px-3">Eventi</h1>
          <div className="flex flex-col items-center">
            {eventKeys.map((e) => {
              const event = events[e];
              const event_img =
                event.img === "" ? "logo_white on black.png" : event.img;
              // skip the empty try title
              if (event.title === "title") return null;
              return (
                <button
                  key={e}
                  // href={event.link}
                  onClick={() => {changeView(e)}}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-5/6 mx-auto my-8 p-4 bg-slate-900 rounded-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center">
                    <img
                      src={require("./../assets/" + event_img)}
                      alt={"./../assets/" + event.img}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    {/* Testo dell'evento */}
                    <div className="ml-4 text-white">
                      <h2 className="text-xl font-bold">
                        {e.replace("_", " ")}
                      </h2>
                      <p className="text-sm px-4 py-1">
                        {renderDate(event.date)}
                      </p>
                      <p className="text-sm">{event.place}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    );
  };

  return (
    <div>
      {view === "list" ? <EventList /> : <EventDescr event={view} />}
    </div>
  );
}
