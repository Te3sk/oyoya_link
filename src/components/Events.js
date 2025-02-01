import React from "react";
// components
import Card from "./Card";
// db
import db from "./dbLinks.json";

export default function Events() {
  const events = Object.entries(db.Events).sort((a, b) => {
    if (a[1].date < b[1].date) return 1;
    else return -1;
  });

  return (
    <div className="min-h-lvh p-[10px] flex flex-col items-center my-[50px]">
      {events.map(([title, event], index) => {
        if (title === "template") return null;
        else
          return (
            <Card
              key={index}
              type="event"
              img_src={event.img}
              title={title}
              description={event.description}
              date={event.date}
              place={event.place}
            />
          );
      })}
    </div>
  );
}
