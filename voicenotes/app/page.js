"use client"
import Image from "next/image";
import NavBar from "./frontend/navbar";
import Landing from "./frontend/landing";
import About from "./frontend/about";
import Create from "./frontend/create";
import Result from "./frontend/result";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="flex flex-col items-center justify-center flex-grow">
        <Landing />
        <About />
        <Create />
        <Result />
      </main>
    </div>
  );
}

