import React from "react";
import { mypic } from "../assets/images";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
      className="outer-container pt-24  xl:pt-28"
      id="aboutme"
    >
      <div className="inner-container  large-grid-bg p-2 ">
        {/* <h3 className="font-dm-serif  text-4xl md:text-5xl lg:text-6xl text-theme-green text-center pb-3 ">
          Know me better
        </h3> */}
        <div className="w-full flex xl:flex-row flex-col mt-4 lg:mt-8  p-1">
          <div className="   w-full xl:w-1/2  p-2 ">
            <h1 className="  text-4xl md:text-5xl lg:text-6xl  font-dm-serif text-theme-green ">
              Know me better
            </h1>
            <div className=" mt-8  xl:mt-15 font-medium font-dm-sans text-description text-[1.1rem] sm:text-[1.2rem]  md:text-[1.3rem] ">
              <span>Hey, I am Aayush </span>

              <p className="pt-4 md:pt-5 xl:pt-7   ">
                a Web developer and AI enthusiast. I work with founders and
                early-stage teams to shape clean, functional visual & web
                experiences.
              </p>

              <p className="pt-4 md:pt-5 xl:pt-7  ">
                I survive on Redbull and all-nighters, running purely on
                caffeine and stubbornness. I hate coding, but I’ll happily spend
                hours tweaking spacing until it feels “just right.”
              </p>
              <p>
                <p className="pt-4 md:pt-5 xl:pt-7  ">
                  <span className="font-bold border-l-4 pl-2">Fun fact: </span>{" "}
                  I can name every country flag in the world.
                </p>
              </p>

              <p className="pt-4  md:pt-5 xl:pt-7  ">
                {" "}
                I like to learn about geography and world history on my free
                time.
              </p>
              <p className="pt-4 md:pt-5 xl:pt-7  ">
                I like building stuff that feels simple, smooth, and kinda
                satisfying to use.
              </p>

              <p className="pt-4 md:pt-5  xl:pt-7   font-bold ">
                If you want to build something together, I’m in.
              </p>
            </div>
            {/* <div className="pt-3 md:pt-8  ">
              <span className="text font-semibold font-montserrat text-theme-green">
                Song On-Repeat:
              </span>
              <iframe
                className="max-w-full max-h-45 md:max-w-100 md:max-h-50 pt-2 md:pt-5"
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/4Z1ZlABSKDlVByJL3y5OVs?utm_source=generator"
                width="100%"
                height="352"
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div> */}
          </div>
          <div className="flex flex-col  justify-center mt-4         w-full xl:w-1/2 p-2">
            <div className=" ">
              <img
                src={mypic}
                alt="mypic"
                className="rounded-xl  w-full   h-auto object-cover  "
              />
            </div>
            <div className="pt-4 sm:pt-8 md:pt-12  max-sm:w-full xl:w-full ">
              <span className="text font-semibold font-montserrat text-theme-green">
                Song On-Repeat:
              </span>
              <iframe
                className="max-w-full max-h-45   sm:w-130 md:max-h-50 pt-2 md:pt-5 xl:max-w-full  "
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/4Z1ZlABSKDlVByJL3y5OVs?utm_source=generator"
                width="100%"
                height="352"
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
