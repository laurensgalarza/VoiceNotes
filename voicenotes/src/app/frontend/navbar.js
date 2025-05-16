//Navbar

import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-between px-10 py-6 bg-white">
      {/* voicenotes */}
      <div className="text-xl font-medium">VoiceNotes</div>

      {/* links */}
      <div className="space-x-6 text-base">
        <a href="/about" className="hover:underline">About</a>
        <a href="/upload" className="hover:underline">Upload</a>
      </div>
    </nav>
  );
}