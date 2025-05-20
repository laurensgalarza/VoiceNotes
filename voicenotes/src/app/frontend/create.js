//create a voicenote section
"use client"
import React, { useState } from "react";
import { X } from 'lucide-react';
import SourceFile from "./components/SourceFile";

export default function Create({ setStory, setLoadingScreen }) {
    const [topic, setTopic] = useState("")
    const [files, setFiles] = useState([])
    const [config, setConfig] = useState({
        gradeLevel: "College Sophomore",
        storyType: "Creative",
        genre: "Mystery",
        narration: "first person"
    })

    const handleGenerate = async () => {
        setLoadingScreen(true)

        const fileTexts = []
        for (const file of files) {
            const text = await file.text()
            fileTexts.push(text)
        }

        const response = await fetch("/api/generateStory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ topic, fileTexts, ...config })
        })

        const data = await response.json()

        if (data.story) {
            alert("story generated")
            setStory(data.story)
        } else {
            alert(data.error || "An error occurred.")
        }

        setLoadingScreen(false)
    }

    return (
        <div className="mt-40 bg-white flex flex-col items-center p-6 ">
            <section id="upload" className="scroll-mt-55"></section>
            <h1 className="text-4xl font-bold mb-8">Create a VoiceNote</h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">

                {/* 🟢 LEFT PANEL - SOURCES */}
                <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">
                        Sources
                    </h2>

                    {/* 🔄 REPLACED SECTION: File Input + Drag & Drop Upload */}
                    <input
                        id="fileInput"
                        type="file"
                        accept=".pdf"
                        multiple
                        hidden
                        onChange={(e) => {
                            const selectedFiles = Array.from(e.target.files);
                            setFiles([...files, ...selectedFiles]);
                        }}
                    />

                    <div
                        className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-gray-500 mb-4"
                        onClick={() => document.getElementById("fileInput").click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            const droppedFiles = Array.from(e.dataTransfer.files);
                            setFiles([...files, ...droppedFiles]);
                        }}
                    >
                        <p className="text-gray-500">
                            Drag & drop files or <span className="text-blue-600 underline">Browse</span>
                        </p>
                    </div>

                    <div className="space-y-4">
                        {files.map((file, index) => (
                            <SourceFile key={index} file={file} />
                        ))}
                    </div>
                </div>

                {/* ⚙️ RIGHT PANEL - CONFIG */}
                <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">Configuration</h2>

                    {/* grade Level input */}
                    <div className="mb-4 relative">
                        <label className="block text-m font-medium mb-1 text-center">Grade Level</label>
                        <input
                            type="text"
                            value={config.gradeLevel}
                            onChange={(e) => { setConfig({ ...config, gradeLevel: e.target.value }) }}
                            placeholder="ex. College Sophomore"
                            className="px-3 py-2 border rounded-md mx-auto flex"
                        />

                        {config.gradeLevel && (
                            <button
                                onClick={() => setConfig({ ...config, gradeLevel: "" })}
                                className="absolute inset-y-0 right-7 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                                <X className="text-lg mt-7 mr-5" />
                            </button>
                        )}
                    </div>

                    {/* story type buttons */}
                    <div className="flex flex-col mb-4 items-center">
                        <label className="block text-m font-medium mb-1 text-center">Type of Story</label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setConfig({ ...config, storyType: "Educational" }) }}
                                className={`${config.storyType === "Educational" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} px-3 py-1 rounded-md cursor-pointer`}>
                                Educational
                            </button>

                            <button
                                onClick={() => { setConfig({ ...config, storyType: "Creative" }) }}
                                className={`${config.storyType === "Creative" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} px-3 py-1 rounded-md cursor-pointer`}>
                                Creative
                            </button>
                        </div>
                    </div>

                    {/* genre input */}
                    <div className="mb-4 relative">
                        <label className="block text-m font-medium mb-1 text-center">Genre</label>
                        <input
                            type="text"
                            value={config.genre}
                            onChange={(e) => { setConfig({ ...config, genre: e.target.value }) }}
                            placeholder="ex. Mystery"
                            className="w/2 px-3 py-2 border rounded-md mx-auto flex"
                        />

                        {config.genre && (
                            <button
                                onClick={() => setConfig({ ...config, genre: "" })}
                                className="absolute inset-y-0 right-7 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                                <X className="text-lg mt-7 mr-11" />
                            </button>
                        )}
                    </div>

                    {/* narration style */}
                    <div className="flex flex-col mb-4 items-center ">
                        <label className="block text-m font-medium mb-1 text-center">Narration Style</label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => { setConfig({ ...config, narration: "first person" }) }}
                                className={`${config.narration === "first person" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} px-3 py-1 rounded-md cursor-pointer`}>
                                First Person
                            </button>

                            <button
                                onClick={() => { setConfig({ ...config, narration: "third person" }) }}
                                className={`${config.narration === "third person" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} px-3 py-1 rounded-md cursor-pointer`}>
                                Third Person
                            </button>
                        </div>
                    </div>

                    {/* generate button */}
                    <button
                        onClick={() => handleGenerate()}
                        className="w-full bg-gray-200 active:bg-gray-800 active:text-white mt-4 bg-white border border-gray-300 text-black py-2 rounded-md hover:bg-gray-200 focus:ring-1 focus:ring-gray-100 cursor-pointer duration-300">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    )
}

