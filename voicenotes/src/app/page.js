"use client"
import Image from "next/image";
import NavBar from "./frontend/navbar";
import Landing from "./frontend/landing";
import About from "./frontend/about";
import Create from "./frontend/create";
import Result from "./frontend/result";
import { useState } from "react";

export default function Home() {
  const [story,setStory] = useState("")
  const [loadingScreen, setLoadingScreen] = useState(false)

  return (
    
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] ">
      <NavBar />
      <main className="flex flex-col items-center justify-center flex-grow">

      {loadingScreen && (<div id="loading" className="fixed inset-0 min-h-screen min-w-screen bg-white/85 content-center items-center text-center z-2">

        <h1 className="text-5xl">Generating Story</h1>
        <h2 className="text-5xl font tracking-widest">...</h2>

        </div>)}

        <Landing />
        <About />
        <Create setStory={setStory} setLoadingScreen={setLoadingScreen} />
        <Result story={story}/>
      </main>
    </div>
  );
}

