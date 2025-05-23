//about section
import React from "react";
import { ArrowRight, ArrowDown} from 'lucide-react'; 
import { ArrowUpFromLine } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Volume2 } from 'lucide-react';

export default function Landing() {
  return (
    <div>
        <section id="about" className="scroll-mt-80"> </section>
        <div className="flex flex-col items-center justify-center">
          <div className="md:max-w-lg max-w-md text-center">
            <p className="md:text-xl font-medium">
              An AI-driven web app that transforms study materials into engaging audio
              content. Users can upload a PDF, notes, or even just a topic, and the
              system will use AI to generate an accurate and creative podcast-style
              story.
            </p>
          </div>
          <a href="#upload" className="mt-10 bg-gray-800 text-white px-11 py-4 rounded-lg text-xl hover:bg-gray-950 md:scale-108 focus:outline-none focus:ring-1
                      focus:ring-gray-400 focus:ring-opacity-70 transition-all duration-500 cursor-pointer 
                      hover:text-green-400 transition-colors hover:shadow-lg active:scale-105 active:opacity-80 active:text-yellow-300 ">

            Start generating
          </a>
        </div>
        <div className="flex md:mt-70 mt-50 sm:mb-10 font-bold lg:text-4xl md:text-3xl text-2xl text-center mx-auto w-fit ">  
          Tailor studying to fit your needs
        </div>


      <div className="py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">

        {/* Step 1 upload */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col sm:w-48 sm:h-35 bg-gray-300 rounded-3xl flex items-center justify-center border-2 border-gray-630 sm:p-0 p-2">
            <ArrowUpFromLine className="mb-4 w-10 sm:h-10 text-black-900" />
            <p className=" max-w-[150px] text-center">
              Upload your notes to get started
            </p>
          </div>
        </div>
        
        <ArrowRight className="hidden md:flex w-11 h-11 text-gray-400" />
        <ArrowDown className="md:hidden flex w-11 sm:h-11 text-gray-400" />

        {/* Step 2 story*/}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col sm:w-48 sm:h-35 bg-gray-300 rounded-3xl flex items-center justify-center border-2 border-gray-630 sm:p-0 p-2">
            <Settings className="mb-4 w-10 sm:h-10 text-black-900" />
            <p className="max-w-[150px] text-center">
              Choose the type of story you want            
            </p>
          </div>
        </div>

        <ArrowRight className="hidden md:flex w-11 h-11 text-gray-400" />
        <ArrowDown className="md:hidden flex w-11 sm:h-11 text-gray-400" />

        {/* Step 3 download */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col sm:w-48 sm:h-35 bg-gray-300 rounded-3xl flex items-center justify-center border-2 border-gray-630 sm:p-0 p-2">
            <Volume2 className="mb-4 w-10 sm:h-10 text-black-900" />
            <p className=" max-w-[150px] text-center">
            Download and start learning
          </p>
          </div>
        </div>
      </div>

      {/* bottom*/}
      <div className="flex sm:mt-24 mt-10 sm:mb-10 font-bold lg:text-3xl text-2xl text-center mx-auto w-fit ">  
          How It Works
        </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-12 ">
      <p className="flex flex w-50 sm:h-35 bg-gray-100 rounded-3xl flex items-center justify-center max-w-[280px] text-center border-2 border-gray-630 sm:p-0 p-2">
          ChatGPT generates a podcast based on your preferences
        </p>
        
  
        <ArrowRight className="hidden sm:flex w-11 h-11 text-gray-400" />
        <ArrowDown className="sm:hidden flex w-11 sm:h-11 text-gray-400" />

        <p className="px-1 flex flex-col w-50 sm:h-35 bg-gray-100 rounded-3xl flex items-center justify-center max-w-[280px] text-center border-2 border-gray-630 sm:p-0 p-2">
          Text-to-Speech transforms this into a downloadable audio
        </p>

      </div>
    </div>
    </div>

  );
}
