//create a voicenote section
"use client"
import React, {useState} from "react";
import { X } from 'lucide-react';

export default function Create() {
    
    const [gradeLevel, setGradeLevel] = useState("");
    const [genre, setGenre] = useState("");

    const [storyType, setStoryType] = useState("Educational");

    const [narrationStyle, setNarrationStyle] = useState("First Person")

    return (

    <div className="mt-40 bg-white flex flex-col items-center p-6 ">       
      
        <section id="upload" className="scroll-mt-55"> </section>
        <h1 className="text-4xl font-bold mb-8">Create a VoiceNote</h1>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
            
            <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6 ">

            <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">
            Sources
            </h2>
            

            <div className=" mx-auto flex mb-4 w-60 rounded-md overflow-hidden">
            <input type="text" placeholder="Enter a topic" className="w-1/2 px-2 py-1 border border-r-0 rounded-l-md focus:outline-none"/>
            <button className="w-1/2 bg-gray-800 text-white px-2 py-1 rounded-r-md hover:bg-gray-900 duration-500 active:opacity-80 cursor-pointer">
                Upload Files
            </button>
            </div>

            <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold">Mitosis.pdf</h3>
                <p className="text-sm text-gray-500">Parsed Text:<br />Supporting line text lorem ipsum dolor sit amet, consectetur...</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold">Bio_Lecture.pdf</h3>
                <p className="text-sm text-gray-500">Parsed Text:<br />Supporting line text lorem ipsum dolor sit amet, consectetur...</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold">Notes.pdf</h3>
                <p className="text-sm text-gray-500">Parsed Text:<br />Supporting line text lorem ipsum dolor sit amet, consectetur...</p>
                </div>
            </div>

            </div>

            {/*config box*/}
            <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">Configuration</h2>

            {/* grade Level input */}
            <div className="mb-4 relative">
                <label className="block text-m font-medium mb-1 text-center">Grade Level</label>
                <input
                type="text"
                placeholder="ex. College Sophomore"
                value={gradeLevel}
                onChange={(l) => setGradeLevel(l.target.value)}
                className="px-3 py-2 border rounded-md mx-auto flex"
                />

                {gradeLevel && (
                <button
                    onClick={() => setGradeLevel("")}
                    className="absolute inset-y-0 right-7 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                    <X className="text-lg mt-7 mr-5" />
                </button>

                )}
            </div>

            <div className="flex flex-col mb-4 items-center">
            <label className="block text-m font-medium mb-1 text-center">Type of Story</label>
            <div className="flex gap-2">
                <button
                onClick={() => setStoryType("Educational")}
                className={`px-3 py-1 rounded-md cursor-pointer ${
                    storyType === "Educational" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
                }`}>

                Educational

                </button>
                <button
                onClick={() => setStoryType("Creative")}
                className={`px-3 py-1 rounded-md cursor-pointer ${
                    storyType === "Creative" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
                }`}>

                Creative
                
                </button>
            </div>
            </div>
            
            {/* genre input */}
            <div className="mb-4 relative"> 
                <label className="block text-m font-medium mb-1 text-center">Genre</label>
                <input
                type="text"
                placeholder="ex. Mystery"
                value={genre}
                onChange={(g) => setGenre(g.target.value)}
                className="px-3 py-2 border rounded-md mx-auto flex"
                />
                {genre && (
                <button
                    onClick={() => setGenre("")}
                    className="absolute inset-y-0 right-7 flex items-center cursor-pointer text-gray-500 hover:text-gray-700" >
                    <X className="text-lg mt-7 mr-5" />
                </button>
                )}
            </div>
            
            {/*narration style*/}
            <div className="flex flex-col mb-4 items-center ">
            <label className="block text-m font-medium mb-1 text-center">Narration Style</label>
            <div className="flex gap-2">
                <button
                onClick={() => setNarrationStyle("First Person")}
                className={`px-3 py-1 rounded-md cursor-pointer ${
                    narrationStyle === "First Person" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
                }`}>

                First Person

                </button>
                <button
                onClick={() => setNarrationStyle("Third Person")}
                className={`px-3 py-1 rounded-md cursor-pointer ${
                    narrationStyle === "Third Person" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
                }`}>

                Third Person
                </button>
            </div>
            </div>
            
            {/*generate button*/}
            <button className="w-full bg-gray-200 active:bg-gray-800 active:text-white mt-4 bg-white border border-gray-300 text-black py-2 rounded-md hover:bg-gray-200 focus:ring-1 focus: ring-gray-100 cursor-pointer
             active:bg-black-300 duration-300 "> 
                Generate
            </button>
            </div>
        </div>
    </div>
    )
}