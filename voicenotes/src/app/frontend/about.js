//about section
import React from "react";

export default function Landing() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-lg text-center">
          <p className="text-xl font-medium">
            An AI-driven web app that transforms study materials into engaging audio
            content. Users can upload a PDF, notes, or even just a topic, and the
            system will use AI to generate an accurate and creative podcast-style
            story.
          </p>
        </div>
        <button className="mt-8 bg-gray-800 text-white px-10 py-4 rounded-lg text-lg hover:bg-gray-950 focus:outline-none focus:ring-1
                    focus:ring-gray-400 focus:ring-opacity-70 transition-colors duration-200 cursor-pointer">
          Start generating
        </button>
      </div>
      <div className="mt-70 font-mono text-4xl text-center">  
        Tailor studying to fit your needs
      </div>
    </div>
  );
}
