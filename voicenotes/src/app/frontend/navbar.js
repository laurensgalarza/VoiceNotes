//Navbar

import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-6 bg-white z-10">
      {/* voicenotes */}
      <div className="text-2xl font-medium">VoiceNotes</div>

      {/* links */}
      <div className="space-x-6 text-lg px-8">
        <a href="/about" className="hover:underline">About</a>
        <a href="/upload" className="hover:underline">Upload</a>
      </div>
    </nav>
  );
}