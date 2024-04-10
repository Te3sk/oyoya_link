import React from "react";

function handleClick () {

}

function Box({ title, link, img }) {
  return (
      <div className="border-2 border-red-400 h-20 w-11/12 m-3 flex flex-row items-center">
        <div className="w-16 h-16 ml-2 bg-lime-400">
          {/* <img src={} alt="playlist image"/> */}
        </div>
        <div className="m-5 text-lg font-bold text-white">{title}</div>
      </div>
  );
}

export default function MainBody() {
  return (
    <div className="bg-black border-t-2 border-white">
      <div className="h-dvh  flex flex-col items-center border-2 overflow-scroll max-h-svh border-amber-500">
        <Box title="Oyoya Party: Flipper & Friends" />
        <Box title="Oyoya x Exploit: End Fossil" />
      </div>
    </div>
  );
}
