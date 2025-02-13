import React from "react";
// components
import Card from "./Card";
// db
import db from "./dbLinks.json";
// utils
import dateUtils from "./utils/dateUtils.js";

export default function Home({setPage}) {
  // Funzione che restituisce gli eventi prossimi
  const upcomingEvent = () => {
    const upcomingEvents = Object.entries(db.Events).filter(
      ([title, event]) =>
        title !== "template" && dateUtils.isWithinNext14Days(event.date)
    );

    // Se non ci sono eventi, restituisce null
    if (upcomingEvents.length === 0) return null;

    return upcomingEvents.map(([title, event], index) => (
      <Card
        key={index}
        type="event"
        img_src={event.img}
        title={title}
        description={event.description}
        date={event.date}
        place={event.place}
      />
    ));
  };

  var ue = upcomingEvent();

  return (
    <div className="h-[calc(100%-300px)]">
      {/* Se ci sono eventi prossimi mostra una card */}
      {ue ? (
        <div className="flex flex-col items-center my-[50px]">
          <h1 className="text-2xl font-maru font-extrabold text-oyoya-purple">
            Upcoming Events
          </h1>
          {ue}
        </div>
      ) : (
        <></>
      )}
      {/* Links section */}
      <div className="flex flex-col items-center my-[40px]">
        {/* header */}
        <h1 className="text-2xl font-maru font-extrabold text-oyoya-purple">
          Unisciti alla Community
        </h1>
        {/* links boxes container */}
        <div>
          {/* ig box */}
          <div
            onClick={() =>
              window.open(
                "https://www.instagram.com/oyoya.music?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              )
            }
            className="flex flex-row justify-center items-center h-[60px] w-[250px] mt-[20px] rounded-lg bg-oyoya-purple/40"
          >
            <div className="w-[25%] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#553dd9"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M8,3c-2.74952,0 -5,2.25048 -5,5v8c0,2.74952 2.25048,5 5,5h8c2.74952,0 5,-2.25048 5,-5v-8c0,-2.74952 -2.25048,-5 -5,-5zM8,5h8c1.66848,0 3,1.33152 3,3v8c0,1.66848 -1.33152,3 -3,3h-8c-1.66848,0 -3,-1.33152 -3,-3v-8c0,-1.66848 1.33152,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-1.58333,0 -2.89811,0.62976 -3.74805,1.58594c-0.84994,0.95618 -1.25195,2.19184 -1.25195,3.41406c0,1.22222 0.40201,2.45788 1.25195,3.41406c0.84994,0.95618 2.16471,1.58594 3.74805,1.58594c1.58333,0 2.89811,-0.62976 3.74805,-1.58594c0.84994,-0.95618 1.25195,-2.19184 1.25195,-3.41406c0,-1.22222 -0.40201,-2.45788 -1.25195,-3.41406c-0.84994,-0.95618 -2.16471,-1.58594 -3.74805,-1.58594zM12,9c1.08333,0 1.76856,0.37024 2.25195,0.91406c0.48339,0.54382 0.74805,1.30816 0.74805,2.08594c0,0.77778 -0.26465,1.54212 -0.74805,2.08594c-0.48339,0.54382 -1.16862,0.91406 -2.25195,0.91406c-1.08333,0 -1.76856,-0.37024 -2.25195,-0.91406c-0.48339,-0.54382 -0.74805,-1.30816 -0.74805,-2.08594c0,-0.77778 0.26465,-1.54212 0.74805,-2.08594c0.48339,-0.54382 1.16862,-0.91406 2.25195,-0.91406z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-[75%] text-oyoya-purple font-maru font-semibold text-lg  flex justify-center">
              <h1>Instagram</h1>
            </div>
          </div>
          {/* yt box */}
          <div
            onClick={() => window.open("https://www.youtube.com/@oyoyamusic")}
            className="flex flex-row justify-center items-center h-[60px] w-[250px] mt-[20px] rounded-lg bg-oyoya-purple/40"
          >
            <div className="w-[25%] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#553dd9"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M12,3c-2.94917,0 -5.1632,0.21711 -6.67187,0.44336c-1.89812,0.2845 -3.32812,1.9303 -3.32812,3.85547v9.40234c0,1.92517 1.43001,3.57097 3.32813,3.85547c1.50868,0.22625 3.7227,0.44336 6.67188,0.44336c2.94917,0 5.1632,-0.21711 6.67188,-0.44336c1.89812,-0.2845 3.32813,-1.9303 3.32813,-3.85547v-9.40234c0,-1.92517 -1.43001,-3.57097 -3.32812,-3.85547c-1.50868,-0.22625 -3.7227,-0.44336 -6.67187,-0.44336zM12,5.5c2.82683,0 4.91546,0.20826 6.30078,0.41602c0.70388,0.1055 1.19922,0.67598 1.19922,1.38281v9.40234c0,0.70683 -0.49534,1.27731 -1.19922,1.38281c-1.38533,0.20775 -3.47395,0.41602 -6.30078,0.41602c-2.82683,0 -4.91546,-0.20827 -6.30078,-0.41602c-0.70388,-0.1055 -1.19922,-0.67598 -1.19922,-1.38281v-9.40234c0,-0.70683 0.49534,-1.27731 1.19922,-1.38281c1.38532,-0.20775 3.47395,-0.41602 6.30078,-0.41602zM10.91797,8.8125c-0.47897,0.00445 -0.91797,0.38878 -0.91797,0.92578v4.52539c0,0.716 0.77853,1.15992 1.39453,0.79492l3.82031,-2.26172c0.604,-0.359 0.604,-1.2338 0,-1.5918l-3.82031,-2.26172c-0.154,-0.09125 -0.31691,-0.13234 -0.47656,-0.13086z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-[75%] text-oyoya-purple font-maru font-semibold text-lg  flex justify-center">
              <h1>Youtube</h1>
            </div>
          </div>
          {/* tg box */}
          <div
            onClick={() => window.open("https://t.me/+cyVEBMHRvpg1NWQ0")}
            className="flex flex-row justify-center items-center h-[60px] w-[250px] mt-[20px] rounded-lg bg-oyoya-purple/40"
          >
            <div className="w-[25%] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#553dd9"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M20.73242,2.01758c-0.42764,-0.04833 -0.87436,0.01509 -1.30078,0.21875l-17.04297,8.14258c-0.00065,0 -0.0013,0 -0.00195,0c-0.98295,0.47 -1.46481,1.50735 -1.37109,2.43945c0.09371,0.93211 0.77306,1.85489 1.83008,2.11914l2.82031,0.70508c1.1085,0.27713 2.28332,0.07349 3.23438,-0.56055c0.00392,-0.00258 0.00783,-0.00518 0.01172,-0.00781l0.5332,-0.36524c-0.45561,1.15772 -0.09828,2.55729 1.02148,3.26953c0.02226,0.01391 0.04507,0.02694 0.06836,0.03906l6.88477,3.66406c1.68108,0.89472 3.80418,-0.23339 4.00391,-2.12695l1.56641,-14.81836c0.00002,-0.00326 0.00002,-0.00651 0,-0.00977c0.13527,-1.41114 -0.97488,-2.56399 -2.25781,-2.70898zM20.57617,3.97852c0.2628,0.01118 0.45397,0.23185 0.42383,0.55664v0.00195l-1.56445,14.80664c-0.05827,0.55243 -0.58525,0.83355 -1.07617,0.57227l-6.82227,-3.63086c-0.38782,-0.25199 -0.44364,-0.74386 -0.11523,-1.07226c0.0046,-0.00451 0.00916,-0.00907 0.01367,-0.01367l5.28711,-5.50586c0.35565,-0.36983 0.37373,-0.9488 0.04185,-1.3401c-0.33188,-0.3913 -0.90603,-0.46798 -1.32896,-0.17747l-7.64453,5.24219c-0.48294,0.32196 -1.07713,0.42408 -1.64062,0.2832l-2.81836,-0.70508c-0.24699,-0.06175 -0.30763,-0.19256 -0.32617,-0.37695c-0.01854,-0.18439 0.01409,-0.32555 0.24414,-0.43555l17.04492,-8.14258c0.09791,-0.04676 0.19365,-0.06623 0.28125,-0.0625z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-[75%] text-oyoya-purple font-maru font-semibold text-lg  flex justify-center">
              <h1>Telegram</h1>
            </div>
          </div>
          {/* spotify box */}
          <div
            onClick={() => {setPage("wip")}}
            className="flex flex-row justify-center items-center h-[60px] w-[250px] mt-[20px] rounded-lg bg-oyoya-purple/40"
          >
            <div className="w-[25%] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#553dd9"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10zM12,4c4.411,0 8,3.589 8,8c0,4.411 -3.589,8 -8,8c-4.411,0 -8,-3.589 -8,-8c0,-4.411 3.589,-8 8,-8zM10.26367,7.00195c-0.86471,-0.00719 -1.7073,0.07289 -2.48828,0.25195c-0.35684,0.07123 -0.64683,0.33065 -0.75721,0.67739c-0.11038,0.34673 -0.02372,0.72606 0.22628,0.99046c0.25,0.26441 0.62388,0.37216 0.97625,0.28137c2.32807,-0.53376 6.29095,0.27923 8.2168,1.62305c0.45305,0.31605 1.07652,0.205 1.39258,-0.24805c0.31605,-0.45305 0.205,-1.07652 -0.24805,-1.39258c-1.93061,-1.34714 -4.72423,-2.16203 -7.31836,-2.18359zM10.05859,9.98438c-0.79044,-0.00561 -1.56568,0.07656 -2.29102,0.25c-0.53718,0.1289 -0.86816,0.66887 -0.73926,1.20605c0.1289,0.53718 0.66887,0.86816 1.20605,0.73926c2.10867,-0.50423 5.53299,0.2483 7.13086,1.5918c0.27123,0.24585 0.6551,0.32388 1.00078,0.20341c0.34568,-0.12047 0.59792,-0.42017 0.65761,-0.78134c0.05968,-0.36117 -0.08273,-0.72609 -0.37128,-0.95136c-1.7131,-1.44038 -4.22243,-2.24097 -6.59375,-2.25781zM9.83008,12.98242c-0.72443,0.01618 -1.43665,0.12339 -2.10547,0.31641c-0.35006,0.09295 -0.62251,0.3679 -0.71225,0.7188c-0.08974,0.35089 0.01724,0.72289 0.27969,0.97249c0.26245,0.2496 0.63934,0.33781 0.98529,0.23058c1.89873,-0.54795 4.72159,0.04265 5.99023,1.45313c0.23674,0.2741 0.60318,0.39879 0.95797,0.32596c0.35479,-0.07283 0.64248,-0.33179 0.7521,-0.67699c0.10962,-0.3452 0.02403,-0.72269 -0.22374,-0.98686c-1.47702,-1.64215 -3.75053,-2.40205 -5.92383,-2.35352z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-[75%] text-oyoya-purple font-maru font-semibold text-lg  flex justify-center">
              <h1>Spotify</h1>
            </div>
          </div>
          {/* wha box */}
          <div
            onClick={() => {setPage("wip")}}
            className="flex flex-row justify-center items-center h-[60px] w-[250px] mt-[20px] rounded-lg bg-oyoya-purple/40"
          >
            {/* icon container */}
            <div className="w-[25%] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#553dd9"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M12,2c-0.547,0 -1.10492,0.04377 -1.66992,0.13477c-3.998,0.646 -7.27147,3.76747 -8.10547,7.73047c-0.569,2.7 -0.02353,5.24455 1.23047,7.31055l-0.4375,3.6543c-0.109,0.632 0.38747,1.16992 0.98047,1.16992c0.1,0 0.20459,-0.01583 0.30859,-0.04883l3.21289,-1.02148c1.349,0.679 2.86747,1.07031 4.48047,1.07031c0.629,0 1.27278,-0.05955 1.92578,-0.18555c4.078,-0.781 7.32213,-4.12352 7.95313,-8.22851c0.956,-6.224 -3.83591,-11.58594 -9.87891,-11.58594zM12,4c2.337,0 4.55122,1.01892 6.07422,2.79492c1.544,1.8 2.19217,4.10233 1.82617,6.48633c-0.499,3.247 -3.10861,5.94931 -6.34961,6.57031c-0.516,0.099 -1.03878,0.14844 -1.55078,0.14844c-1.247,0 -2.45203,-0.28747 -3.58203,-0.85547c-0.281,-0.141 -0.59039,-0.21289 -0.90039,-0.21289c-0.204,0 -0.40747,0.03075 -0.60547,0.09375l-1.73047,0.54883l0.25977,-2.16016c0.053,-0.445 -0.04534,-0.89239 -0.27734,-1.27539c-0.751,-1.237 -1.53042,-3.25833 -0.98242,-5.86133c0.668,-3.172 3.26775,-5.65097 6.46875,-6.16797c0.45,-0.073 0.90361,-0.10937 1.34961,-0.10937zM9.09766,6.99609c-0.22087,-0.00725 -0.43028,0.01102 -0.61328,0.04102c-0.442,0.072 -0.82592,0.34242 -1.04492,0.73242c-0.31692,0.56503 -0.49795,1.301 -0.41992,1.99219c0.00033,0.00207 0.00162,0.00379 0.00195,0.00586c0.0023,0.02001 -0.0008,0.04062 0.00195,0.06055c0.03916,0.28285 0.1214,0.57152 0.22266,0.86328c0.00221,0.00673 0.00558,0.01282 0.00781,0.01953c0.06496,0.18487 0.139,0.37139 0.22656,0.55859c0.7752,1.78384 2.14279,2.9965 2.18945,3.03711c0.01767,0.02052 1.17671,1.35033 2.91016,2.13867c0.53969,0.26797 1.07473,0.45798 1.58984,0.5293c0.709,0.098 1.47364,-0.09097 2.05664,-0.41797c0.391,-0.219 0.65847,-0.60097 0.73047,-1.04297c0.06,-0.366 0.08183,-0.84402 -0.07617,-1.29102c-0.046,-0.129 -0.13809,-0.24413 -0.24609,-0.32812c-0.535,-0.413 -1.16973,-0.70198 -1.55273,-0.83398c-0.261,-0.09 -0.54514,-0.02103 -0.74414,0.16797l-0.0957,0.0957l-0.66016,0.69336c0,0 -0.01625,-0.00095 -0.03125,-0.00195l-0.42187,0.42188c-1.0878,-0.61337 -2.00976,-1.50586 -2.00976,-1.50586l-0.02344,-0.02539l-0.02539,-0.02344c0,0 -0.89121,-0.92795 -1.51367,-2.01367l0.42383,-0.42383c-0.001,-0.015 0,-0.03125 0,-0.03125l0.69141,-0.66016l0.0957,-0.0957c0.189,-0.199 0.25992,-0.48509 0.16992,-0.74609c-0.132,-0.383 -0.42294,-1.01578 -0.83594,-1.55078c-0.084,-0.108 -0.19912,-0.20009 -0.32812,-0.24609c-0.2235,-0.079 -0.45491,-0.11189 -0.67578,-0.11914z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-[75%] text-oyoya-purple font-maru font-semibold text-lg flex justify-center">
              <h1>Whatsapp</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
