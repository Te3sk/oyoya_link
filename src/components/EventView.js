import React from "react";
import db from "./dbLinks.json";
import EventDescr from "./EventDescr";
import style from "./styles.json";

export default function EventView() {
  // parse styles from json file
  const [styles, setStyles] = React.useState({});
  React.useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(style));
    setStyles(parsed);
  }, []);

  const [view, setView] = React.useState("list");

  const changeView = (s) => {
    setView(s);
  };

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
        <div className={styles.container}>
          <h1 className={styles.title_big}>Eventi</h1>
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
                  onClick={() => {
                    changeView(e);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.block_block}
                >
                  <div className="flex items-center">
                    <img
                      src={require("./../assets/" + event_img)}
                      alt={"./../assets/" + event.img}
                      className={styles.block_img}
                    />
                    {/* Testo dell'evento */}
                    <div className="ml-4 text-white text-left">
                      <h2 className={styles.block_title}>
                        {e.replace("_", " ")}
                      </h2>
                      <p className={styles.block_info}>
                        {renderDate(event.date)}
                      </p>
                      <p className={styles.block_info}>{event.place}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
    );
  };

  return (
    <main className={styles.main}>
      {view === "list" ? (
        <EventList />
      ) : (
        <div className="flex flex-col text-white">
          <div className="h-30 flex flex-row justify-between items-center mx-5">
            <h1 className={styles.title_big}>{view}</h1>
            <button onClick={() => changeView("list")}>
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
      )}
    </main>
  );
}
