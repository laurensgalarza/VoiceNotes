//create a voicenote section
"use client"
import React, { useState } from "react";
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import SourceFile from "./components/SourceFile";

export default function Create({ setStory, setLoadingScreen }) {
    const [topicList, setTopic] = useState([]);
    const [topicInput, setTopicInput] = useState("");
    const [files, setFiles] = useState([]); // raw File objects
    const [parsedFiles, setParsedFiles] = useState([]); // parsed text previews
    const [config, setConfig] = useState({
        gradeLevel: "",
        storyType: "Creative",
        genre: "",
        narration: "First Person"
    });

    const addTopic = () => {
        if(topicInput != ""){
            topicList.push(topicInput);
            setTopicInput("")            
        }

    };

    const removeTopic = index => {

       // let index = topicList.indexOf(topic);

       const temp = [...topicList]

        //if found, remove
        if (index != -1){
            temp.splice(index, 1)

            setTopic(temp)
        }
    };

    const handleFileUpload = async (newFiles) => {
        for (const file of newFiles) {
            const formData = new FormData();
            formData.append("pdfFile", file);

            try {
                const response = await fetch("/upload", {
                    method: "POST",
                    body: formData,
                });

                const data = await response.json();
                if (response.ok) {
                    setParsedFiles((prev) => [...prev, {
                        filename: file.name,
                        filepreview: data.content.slice(0, 500), // preview
                        fullText: data.content
                    }]);
                } else {
                    alert(data.message || "Failed to parse file.");
                }
            } catch (err) {
                console.error("Upload error:", err);
            }
        }
    };


    const handleGenerate = async () => {
        setLoadingScreen(true);

        const fileTexts = parsedFiles.map(file => file.fullText);

        const topics = topicList.join(", ")

        const response = await fetch("/api/generateStory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ topics, fileTexts, ...config })
        });

        const data = await response.json();
        if (data.story) {
            alert("Story generated!");
            setStory(data.story);
        } else {
            alert(data.error || "An error occurred.");
        }

        setLoadingScreen(false);
    };

    return (
        <div>
            <section id="upload" className="scroll-mt-10"> </section>
        <div className="md:mt-40 mt-24 bg-white flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold mb-8">Create a VoiceNote</h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">

                {/* Left Panel - Sources */}
                <div  className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">Sources</h2>
                    <div className="relative">
                    <input type="text" value={topicInput} onChange={(e) => setTopicInput(e.target.value)} placeholder="Enter a topic" className="px-6 py-2 border rounded-md  text-center my-2 mt-0 border-gray-500 w-full"/>
                    
                    {<button
                        onClick={() => addTopic()}
                        className="absolute right-0 bottom-4 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                        <Plus className="hidden md:flex text-lg mt-7 mr-5" />
                        <Plus className="md:hidden text-lg mt-7 mr-10" />
                            </button>
                            }
                    </div>

                    <div className="space-y-1 flex flex-wrap max-w-100">
                        {topicList.map((topic, index) => (
                            <div key={index} className=" px-3 py-1 border rounded-md  bg-gray-500 text-white flex w-fit h-fit hover:bg-red-800/60 cursor-pointer transition" onClick={() => removeTopic(index)}>
                            <p className="text-sm">{topic}</p>
                            </div>
                        ))}

                    </div>

                    <input
                        id="fileInput"
                        type="file"
                        accept=".pdf"
                        multiple
                        hidden
                        onChange={(e) => {
                            const selected = Array.from(e.target.files);
                            setFiles([...files, ...selected]);
                            handleFileUpload(selected);
                        }}
                    />

                    <div
                        className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-gray-500 mb-4"
                        onClick={() => document.getElementById("fileInput").click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault();
                            const dropped = Array.from(e.dataTransfer.files);
                            setFiles([...files, ...dropped]);
                            handleFileUpload(dropped);
                        }}
                    >
                        <p className="text-gray-500">Drag & drop PDFs or <span className="text-blue-600 underline">Browse</span></p>
                    </div>

                    <div className="space-y-4">
                        {parsedFiles.map((file, index) => (
                            <SourceFile key={index} {...file} />
                        ))}

                    </div>
                </div>

                {/* Right Panel - Config */}
                <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">Configuration</h2>

                    {/* Grade Level Input */}
                    <div className="mb-4 relative">
                        <label className="block text-m font-medium mb-1 text-center">Grade Level</label>
                        <input
                            type="text"
                            value={config.gradeLevel}
                            onChange={(e) => setConfig({ ...config, gradeLevel: e.target.value })}
                            placeholder="ex. College Sophomore"
                            className="px-3 py-2 border rounded-md mx-auto flex"
                        />
                        {config.gradeLevel && (
                            <button
                                onClick={() => setConfig({ ...config, gradeLevel: "" })}
                                className="absolute inset-y-0 right-0 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                                <X className="hidden md:flex text-lg mt-7 mr-5" />
                                <X className="md:hidden text-lg mt-7 mr-10" />
                            </button>
                        )}
                    </div>

                    {/* Story Type */}
                    <div className="flex flex-col mb-4 items-center">
                        <label className="block text-m font-medium mb-1 text-center">Type of Story</label>
                        <div className="flex gap-2">
                            {["Educational", "Creative"].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setConfig({ ...config, storyType: type })}
                                    className={`${config.storyType === type ? "bg-gray-800 text-white hover:text-green-400 transition-colors" : "bg-gray-200 text-gray-800 hover:text-green-700 transition-colors"} px-3 py-1 rounded-md cursor-pointer`}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Genre */}
                    <div className="mb-4 relative">
                        <label className="block text-m font-medium mb-1 text-center">Genre</label>
                        <input
                            type="text"
                            value={config.genre}
                            onChange={(e) => setConfig({ ...config, genre: e.target.value })}
                            placeholder="ex. Mystery"
                            className="px-3 py-2 border rounded-md mx-auto flex"
                        />
                        {config.genre && (
                            <button
                                onClick={() => setConfig({ ...config, genre: "" })}
                                className="absolute inset-y-0 right-0 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                                <X className="hidden md:flex text-lg mt-7 mr-5" />
                                <X className="md:hidden text-lg mt-7 mr-10" />
                            </button>
                        )}
                    </div>

                    {/* Narration Style */}
                    <div className="flex flex-col mb-4 items-center">
                        <label className="block text-m font-medium mb-1 text-center">Narration Style</label>
                        <div className="flex gap-2">
                            {["First Person", "Third Person"].map(style => (
                                <button
                                    key={style}
                                    onClick={() => setConfig({ ...config, narration: style })}
                                    className={`${config.narration === style ? "bg-gray-800 text-white hover:text-green-400 transition-colors" : "bg-gray-200 text-gray-800 hover:text-green-700 transition-colors"} px-3 py-1 rounded-md cursor-pointer`}>
                                    {style.replace(" person", " Person")}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Generate Button */}
                    <button
                        onClick={handleGenerate}
                        className="w-full bg-white border border-gray-300 text-black py-2 rounded-md hover:bg-gray-200 active:bg-gray-800 active:text-white transition cursor-pointer">
                        Generate
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}
