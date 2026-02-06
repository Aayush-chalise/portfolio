import React from "react";
import { mypic } from "../assets/images";

const AboutMe = () => {
  return (
    <section className="outer-container pt-24  xl:pt-28" id="aboutme">
      <div className="inner-container  large-grid-bg p-2 ">
        <h3 className="font-dm-serif  text-4xl md:text-5xl lg:text-6xl text-theme-green text-center pb-3 ">
          About
        </h3>
        <div className="w-full flex xl:flex-row flex-col mt-4 lg:mt-8  p-1">
          <div className="   w-full xl:w-1/2  p-2 ">
            <h1 className="  text-4xl md:text-5xl lg:text-6xl  font-dm-serif text-theme-green ">
              Being a developer was a dream I had to fight for
            </h1>
            <p className="max-lg:leading-loose  mt-10 text-[1.1rem] sm:text-[1.2rem]  md:text-[1.3rem]    text-description   font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim nec augue. Nullam eget
              felis eget nunc mattis vulputate. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed non risus. Suspendisse lectus
              tortor, dignissim nec augue. Nullam eget felis eget nunc mattis
              vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed non risus. Suspendisse lectus tortor, dignissim nec
              augue. Nullam eget felis eget nunc mattis vulputate.
            </p>
          </div>
          <div className="flex items-center justify-center  w-full xl:w-1/2 p-2">
            <img
              src={mypic}
              alt="mypic"
              className="rounded-2xl w-full h-auto   "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
