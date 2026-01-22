import React from "react";
import Marquee from "react-fast-marquee";
import {
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiExpress } from "react-icons/si";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-bg-color flex items-center justify-center pt-32 px-4">
      <section className="w-full max-w-3xl md:max-w-4xl xl:max-w-6xl bg-white rounded-2xl shadow-md relative flex flex-col items-center gap-6 overflow-hidden px-4 py-10 md:py-16">
        {/* Arc backgrounds can be styled with absolute positioning or SVG */}
        {/* Example text / hero */}
        <span className="font-montserrat font-semibold text-theme-green text-xs bg-white rounded-md px-3 py-1 mb-4 hidden md:block">
          Design x Logic x Fun
        </span>
        <h1 className="font-dm-serif text-theme-green text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium text-center leading-tight tracking-tight">
          Hi. I'm Aayush.
          <br />
          <span className="text-theme-green">A software developer.</span>
        </h1>
        <p className="font-montserrat text-base sm:text-lg md:text-xl text-center mt-3">
          who loves mixing logic and creativity to craft clean, impactful
          applications.
        </p>
        {/* Marquee Icons */}
        <div className="w-full max-w-xs mx-auto mt-10">
          <Marquee gradient={false} speed={45}>
            <span className="mx-6 flex items-center">
              <RiReactjsFill
                size={28}
                className="text-[#58C4DC]"
                title="React"
              />
            </span>
            <span className="mx-6 flex items-center">
              <RiNextjsFill
                size={28}
                className="text-[#080808]"
                title="Next.js"
              />
            </span>
            <span className="mx-6 flex items-center">
              <RiJavascriptFill
                size={28}
                className="text-[#F7E024]"
                title="JavaScript"
              />
            </span>
            <span className="mx-6 flex items-center">
              <SiExpress size={28} className="text-gray-800" title="Express" />
            </span>
            <span className="mx-6 flex items-center">
              <RiTailwindCssFill
                size={28}
                className="text-[#37B8F2]"
                title="TailwindCSS"
              />
            </span>
            <span className="mx-6 flex items-center">
              <RiNodejsFill
                size={28}
                className="text-[#59A149]"
                title="Node.js"
              />
            </span>
          </Marquee>
        </div>
        {/* Explore Projects Button */}
        <div className="mt-10">
          <button className="border border-theme-green font-montserrat bg-[#222222] text-white px-6 py-2 rounded-full hover:bg-[#4C6763] transition-colors font-semibold text-sm">
            Explore Projects
          </button>
        </div>
      </section>
    </main>
  );
}
