// resulting podcast section
"use client";
import React, { useState, useEffect } from "react";
import { Volume2 } from "lucide-react";

export default function Result({ story }) {
  const [audioUrl, setAudioUrl] = useState(null); // for preview

  const handleConvertToAudio = async () => {
    if (!story) {
      alert("No story to convert.");
      return;
    }

    try {
      const response = await fetch("https://ae5b205d-3690-4f5d-944e-43d9dfe29142-00-1gjkschdsxlzt.picard.replit.dev/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: story }),
      });

      if (!response.ok) {
        alert("Audio conversion failed.");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setAudioUrl(url);
      console.log("AUDIO URL:", url);

      // Optional autoplay
      const audio = new Audio(url);
      audio.play();
    } catch (error) {
      console.error("Error converting to audio:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="mt-50 w-[75%] md:w-full container mx-auto max-w-2xl">
      {/* text transcription container */}
      <h1 className="mb-5 text-4xl md:text-5xl text-center font-semibold text-gray-800">
        Your Study Podcast
      </h1>

      <div className="bg-gray-200 px-6 md:px-18 pt-6 md:pt-10 pb-5 rounded-2xl md:rounded-4xl mb-8 text-gray-700 leading-relaxed text-left">
        {story ? (
          <p className="mb-4">{story}</p>
        ) : (
          <div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus metus et
              laoreet venenatis. Curabitur pretium consectetur dolor vel scelerisque. Quisque at
              sodales dolor.
            </p>
            <p className="mb-4">
              Morbi lacus dolor, rutrum id sem a, placerat dapibus tortor. Nunc ac molestie
              lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ut
              eleifend lacus. Suspendisse potenti.
            </p>
            <p className="mb-4">
              Morbi lacus dolor, rutrum id sem a, placerat dapibus tortor. Nunc ac molestie
              lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ut
              eleifend lacus. Suspendisse potenti.
            </p>
          </div>
        )}

        {/* speaker icon */}
        <div className="flex justify-end">
          <button className="cursor-pointer hover:scale-105 active:text-black-900">
            <Volume2 className="text-6xl text-gray-700 mt-4 " />
          </button>
        </div>
      </div>

      {/* audio preview */}
      {audioUrl && (
        <div className="text-center mt-4">
          <audio controls src={audioUrl}></audio>
          <p className="text-sm text-gray-600 mt-2">Audio preview of your story</p>
        </div>
      )}

      <div className="text-center m-10 text-3xl">
        Start Listening to Your Cool Story!
      </div>

      {/* convert + upload buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={handleConvertToAudio}
          className="bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-xl text-base font-medium shadow-md cursor-pointer active:opacity-70 duration-300"
        >
          Convert to Audio!
        </button>
      </div>
      <p className="text-4xl text-gray-700 md:m-30 mt-30 font-semibold text-center">
        Thanks for using VoiceNotes!
      </p>

    </div>
  );
}