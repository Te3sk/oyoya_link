import React from "react";

export default function Footer() {
  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-black transition-all duration-300 h-16 border-t-2 border-white`}
    >
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-white">
        <p>&copy; 2024 Oyoya</p>
      </div>
    </footer>
  );
}
