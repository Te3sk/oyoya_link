import React from "react";

function Box(title, link, img) {
  return (
  <div className=" w-5/6 bg-red-400 h-24 mt-3">
    <div>
        
    </div>
  </div>
  )
}

export default function MainBody() {
  return (
    <div className="bg-black h-screen border-t-2 border-white">
      <div className="h-dvh  flex flex-col items-center border-2 border-amber-500">
        <Box />
      </div>
    </div>
  );
}
