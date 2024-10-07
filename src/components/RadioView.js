import React from "react";
import db from "./dbLinks.json";
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
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title_big}>Episodi Radio</h1>
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
                className={styles.block_block}
              >
                <div className="flex items-center">
                  <img
                    src={require("./../assets/" + radio_img)} 
                    alt={r + " radio"}
                    className={styles.block_img}
                  />
                  <div className="ml-4 text-white">
                    <h2 className={styles.block_title}>{r}</h2>
                    <p className={styles.block_info}>
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
