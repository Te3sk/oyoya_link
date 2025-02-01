import React from "react";
import db from "../dbLinks.json";
import style from "./styles.json";

export default function RadioView() {
  // parse styles from json file
  const [styles, setStyles] = React.useState({});
  React.useEffect(() => {
    const parsed = JSON.parse(JSON.stringify(style));
    setStyles(parsed);
  }, []);

  const radios = db.Radios;
  const radiosKeys = Object.keys(radios);

  var renderDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString("it-IT", {
      year: "2-digit",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <main className="min-h-lvh pt-32 pb-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Episodi Radio</h1>
        <div className="flex flex-col items-center">
          {radiosKeys.map((r) => {
            const radio = radios[r];
            const radio_img =
                radio.img === "" ? "logo_white on black.png" : radio.img;
            return (
              <a
                key={r}
                href={radio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-5/6 mx-auto my-8 p-4 bg-slate-900 rounded-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center">
                  <img
                    src={require("./../assets/" + radio_img)} 
                    alt={r + " radio"}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="ml-4 text-white">
                    <h2 className="text-xl font-bold">{r}</h2>
                    <p className="text-sm">
                      {renderDate(radio.data)}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
