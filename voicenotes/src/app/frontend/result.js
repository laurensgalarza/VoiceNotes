//resulting podcast section

import React from "react";
import { Volume2 } from 'lucide-react';

export default function Result() {

  return (
    
    <div className="container mx-auto max-w-2xl">       {/* text transcription container*/}
      <h1 className="mb-5 text-center text-5xl font-semibold text-gray-800">
        Your Study Podcast
      </h1>
      <div className="bg-gray-200 px-18 pt-10 pb-5 rounded-4xl mb-8 text-gray-700 leading-relaxed text-left">
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

              {/* speaker button*/}
        <div className="flex justify-end">
          <button className="cursor-pointer hover:scale-105 active:text-black-900" >
            <Volume2 className="text-6xl text-gray-700 mt-4 " />
          </button>
        </div>
      </div>

      <div className="text-center m-10 text-3xl">
        Start Listening
      </div>
    
              {/* upload more files buttons */}
      <div className="flex justify-center gap-4 mb-8">

        <button className="bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-xl text-base font-medium shadow-md cursor-pointer active:opacity-70 duration-300">
          Upload more files
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-xl text-base font-medium shadow-md cursor-pointer active:opacity-70 duration-300">
          Upload more files
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-xl text-base font-medium shadow-md cursor-pointer active:opacity-70 duration-300">
          Upload more files
        </button>
      </div>
      <p className="text-3xl text-gray-700 m-20 font-semibold text-center">
        Thanks for using VoiceNotes
      </p>
    </div>
  );
}