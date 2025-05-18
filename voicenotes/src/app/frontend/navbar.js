//Navbar

import React from "react";

export default function NavBar() {
  return (
    <nav className="text-white bg-black fixed top-0 w-full flex justify-between items-center px-10 py-8 z-10">
      {/* voicenotes */}
      <div className="text-2xl font-medium">VoiceNotes</div>

      {/* links */}
      <div className="space-x-6 text-lg px-8">
        <a href="#about" className="hover:underline hover:text-blue-400 transition-colors duration-300 hover:shadow-lg">About</a>
        <a href="#upload" className="hover:underline hover:text-red-400 transition-colors duration-300 hover:shadow-lg">Upload</a>
      </div>
    </nav>
  );
}