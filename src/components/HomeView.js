import React from "react";
import db from "./dbLinks.json";
import style from "./styles.json";

export default function HomeView() {
  // parse styles from json file
  const [styles, setStyles] = React.useState({});
  React.useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(style));
    setStyles(parsed);
  }, []);

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
      <div className={styles.container}>
        <h1 className={styles.title_big}>Upcoming Events</h1>
        {upcomingEvents.map((e) => {
          const event = events[e];
          const block_img =
            event.img === "" ? "logo_white on black.png" : event.img;
          return (
            <a
              key={e}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.block_block}
            >
              <div className="flex items-center">
                {/* immagine (problema immagini) */}
                <img
                  src={require("./../assets/" + block_img)}
                  alt={e}
                  className={styles.block_img}
                />
                {/* testo evento */}
                <div className="ml-4 text-white">
                  <h2 className={styles.block_title}>{e.replace("_", " ")}</h2>
                  <p className={styles.block_info}>{renderDate(event.date)}</p>
                  <p className={styles.block_info}>{event.place}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  };

  const Link = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title_big}> Links </h1>
        {Object.keys(links).map((l) => {
          return (
            <a
              key={l}
              href={links[l].link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link_block}
            >
              <div className="flex items-center">
                <img
                  src={links[l].img}
                  alt={l + " link"}
                  className={styles.link_img}
                />
                <h2 className={styles.link_title}>{l}</h2>
              </div>
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <main className={styles.main}>
        <ChooseEvent n={10} />
        <Link />
      </main>
    </div>
  );
}
