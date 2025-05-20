//create a voicenote section
"use client";
import React, { useState } from "react";
import { X } from 'lucide-react';
import SourceFile from "./components/SourceFile";

export default function Create({ setStory, setLoadingScreen }) {
    const [topic, setTopic] = useState("");
    const [files, setFiles] = useState([]);
    const [parsedFiles, setParsedFiles] = useState([]);
    const [config, setConfig] = useState({
        gradeLevel: "",
        storyType: "Creative",
        genre: "",
        narration: "First Person"
    });

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
                    setParsedFiles((prev) => [
                        ...prev,
                        {
                            filename: file.name,
                            filepreview: data.content.slice(0, 500),
                            fullText: data.content,
                        },
                    ]);
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
        const fileTexts = parsedFiles.map((file) => file.fullText);

        try {
            const response = await fetch("/api/generateStory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ topic, fileTexts, ...config }),
            });

            const data = await response.json();
            if (data.story) {
                alert("Story generated!");
                setStory(data.story);
            } else {
                alert(data.error || "An error occurred.");
            }
        } catch (error) {
            alert("Failed to generate story.");
        }

        setLoadingScreen(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...droppedFiles]);
        handleFileUpload(droppedFiles);
    };

    return (
        <div>
            <section id="upload" className="scroll-mt-10"></section>
            <div className="md:mt-40 mt-24 bg-white flex flex-col items-center p-6">
                <h1 className="text-4xl font-bold mb-8">Create a VoiceNote</h1>
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
                    {/* Left Panel - Sources */}
                    <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">Sources</h2>
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter a topic"
                            className="px-6 py-2 border rounded-md focus:outline-none text-center my-2 mt-0 border-gray-300 hover:border-gray-500 w-full"
                        />
                        <input
                            id="fileInput"
                            type="file"
                            accept=".pdf"
                            multiple
                            hidden
                            onChange={(e) => {
                                const selectedFiles = Array.from(e.target.files);
                                setFiles((prev) => [...prev, ...selectedFiles]);
                                handleFileUpload(selectedFiles);
                            }}
                        />

                        <div
                            className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-gray-500 mb-4"
                            onClick={() => document.getElementById("fileInput").click()}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            Drag & drop files here or click to upload
                        </div>

                        {/* Show uploaded file previews */}
                        <div className="space-y-2">
                            {parsedFiles.map((file, idx) => (
                                <div key={idx} className="relative">
                                    <SourceFile filename={file.filename} filepreview={file.filepreview} />
                                    <button
                                        onClick={() => {
                                            setParsedFiles(parsedFiles.filter((_, i) => i !== idx));
                                            setFiles(files.filter((_, i) => i !== idx));
                                        }}
                                        className="absolute top-2 right-2 text-red-500"
                                    >
                                        <X />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel - Configuration */}
                    <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-6 space-y-4">
                        <h2 className="text-lg font-semibold mb-4 text-center border-b border-white-300 w-full my-4 pb-3">Story Options</h2>

                        <select
                            value={config.gradeLevel}
                            onChange={(e) => setConfig({ ...config, gradeLevel: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md"
                        >
                            <option value="">Select Grade Level</option>
                            <option value="elementary">Elementary</option>
                            <option value="middle">Middle</option>
                            <option value="high">High</option>
                            <option value="college">College</option>
                        </select>

                        <select
                            value={config.storyType}
                            onChange={(e) => setConfig({ ...config, storyType: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md"
                        >
                            <option value="Creative">Creative</option>
                            <option value="Informative">Informative</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Genre (optional)"
                            value={config.genre}
                            onChange={(e) => setConfig({ ...config, genre: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md"
                        />

                        <select
                            value={config.narration}
                            onChange={(e) => setConfig({ ...config, narration: e.target.value })}
                            className="w-full px-4 py-2 border rounded-md"
                        >
                            <option value="First Person">First Person</option>
                            <option value="Third Person">Third Person</option>
                        </select>

                        <button
                            onClick={handleGenerate}
                            className="w-full py-3 bg-black text-white font-bold rounded-lg mt-4 hover:bg-gray-900 active:scale-95"
                        >
                            Generate Story
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
