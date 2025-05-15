import Image from "next/image";
import NavBar from "./frontend/navbar";
import Landing from "./frontend/landing";
import About from "./frontend/about";
import Create from "./frontend/create";
import Result from "./frontend/result";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav>
        <NavBar/>
      </nav>
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Landing/>
        <About/>
        <Create/>
        <Result/>

      </main>
        



\
    </div>
  );
}
