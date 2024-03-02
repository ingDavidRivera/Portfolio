import Image from "next/image";
import Link from "next/link";
import Contact from "./Components/Contact";
import CardProject from "./Components/CardProject"


export default function Home() {
  return (
  <main className="w-screen h-screen relative">
    <div className="flex w-full" style={{backgroundImage: "url(/bg-code.jpeg)" }}>
      <div className="flex flex-col md:pl-40 max-w-[750px]">
        <h1 className="text-white font-semibold"> 
          Testing
        </h1>
        
      </div>

    {/* <Contact /> */}

    <div>
    </div>
      {/* <Link
        href="/projects"
        className="relative"   >
          Hi Projects
      </Link> */}
    </div>

    {/* <Image 
      src="/bg-code.jpeg"
      alt="bg-code"
      width={1280}
      height={300}
      className="absolute"
    /> */}
    <CardProject/>
  </main>  

  );
}

/*
Imágenes 
https://www.pexels.com/es-es/foto/persona-que-trabaja-de-forma-remota-3987066/
*/