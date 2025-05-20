"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white bg-black fixed top-0 w-full flex justify-between items-center px-10 md:py-8 py-4 z-10">
      {/* title voicenotes*/}
      <div className="text-2xl font-medium">VoiceNotes</div>


      {/* menu for larger screens */}
      <div className="hidden md:flex space-x-6 text-lg px-8">
        <a href="#about" className="hover:bg-blue-500/20 text-gray-300 hover:text-blue-400 px-3 py-2 rounded-xl transition-colors duration-300 hover:shadow-lg">
          About
        </a>
        <a href="#upload" className="hover:bg-red-500/20 text-gray-300 hover:text-red-400 px-3 py-2 rounded-xl transition-colors duration-300 hover:shadow-lg">
          Upload
        </a>
      </div>

      {/* menu for mobile */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden rounded-xl active:bg-white/25 focus:outline-none p-3 transition-colors duration-250"
      >
        <Menu className="w-10 h-10 text-white cursor-pointer" />
      </button>

      {/* menu side bar for mobile */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 h-screen w-64 bg-black text-white shadow-lg transition-transform duration-300 transform z-20">

          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <div className="text-lg font-semibold">Navigation</div>
            <button onClick={() => setIsMenuOpen(false)} 
              className="text-white hover:text-gray-300">
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="p-6 flex flex-col gap-4">
            <a href="#about"  onClick={() => setIsMenuOpen(false)} className="hover:text-blue-300">
              About
            </a>
            <a href="#upload" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">
              Upload
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}
