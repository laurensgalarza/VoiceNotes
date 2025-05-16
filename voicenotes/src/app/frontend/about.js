//about section
import React from "react";
import { ArrowRight} from 'lucide-react'; 
import { ArrowUpFromLine } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Volume2 } from 'lucide-react';

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
          <button className="mt-10 bg-gray-800 text-white px-10 py-4 rounded-lg text-lg hover:bg-gray-950 focus:outline-none focus:ring-1
                      focus:ring-gray-400 focus:ring-opacity-70 transition-colors duration-200 cursor-pointer
                      hover:text-green-400 transition-colors duration-200 hover:shadow-lg">
            Start generating
          </button>
        </div>
        <div className="mt-100 mb-10 font-bold text-4xl text-center ">  
          Tailor studying to fit your needs
        </div>

      <div className="py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">

        {/* Step 1 upload */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col w-48 h-35 bg-gray-300 rounded-3xl flex items-center justify-center ring-1">
            <ArrowUpFromLine className="mb-4 w-10 h-10 text-black-900" />
            <p className=" max-w-[150px] text-center">
              Upload your notes to get started
            </p>
          </div>
        </div>
        
        <ArrowRight className="w-11 h-11 text-gray-400" />

        {/* Step 2 story*/}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col w-48 h-35 bg-gray-300 rounded-3xl flex items-center justify-center ring-1">
            <Settings className="mb-4 w-10 h-10 text-black-900" />
            <p className="max-w-[150px] text-center">
              Choose the type of story you want            
            </p>
          </div>
        </div>

        <ArrowRight className="w-11 h-11 text-gray-400" />

        {/* Step 3 Download */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col w-48 h-35 bg-gray-300 rounded-3xl flex items-center justify-center ring-1">
            <Volume2 className="mb-4 w-10 h-10 text-black-900" />
            <p className=" max-w-[150px] text-center">
            Download and start learning
          </p>
          </div>
        </div>
      </div>

      {/* bottom*/}
      <div className="flex justify-center gap-10 mt-12 ">
        <p className="flex flex-col w-50 h-35 bg-gray-100 rounded-3xl flex items-center justify-center max-w-[280px] text-center ring-1">
          ChatGPT generates a podcast based on your preferences
        </p>
        
        <ArrowRight className="mt-12 w-11 h-11 text-gray-400" />

        <p className="px-1 flex flex-col w-50 h-35 bg-gray-100 rounded-3xl flex items-center justify-center max-w-[280px] text-center ring-1">
          Text-to-Speech transforms this into a downloadable audio
        </p>

      </div>
    </div>
    </div>

  );
}
