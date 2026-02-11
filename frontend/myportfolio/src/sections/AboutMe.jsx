import React from "react";
import { mypic } from "../assets/images";

const AboutMe = () => {
  return (
    <section className="outer-container pt-24  xl:pt-28" id="aboutme">
      <div className="inner-container  large-grid-bg p-2 ">
        {/* <h3 className="font-dm-serif  text-4xl md:text-5xl lg:text-6xl text-theme-green text-center pb-3 ">
          About
        </h3> */}
        <div className="w-full flex xl:flex-row flex-col mt-4 lg:mt-8  p-1">
          <div className="   w-full xl:w-1/2  p-2 ">
            <h1 className="font-bold  text-4xl md:text-5xl lg:text-6xl  font-dm-serif text-theme-green ">
              Know me better
            </h1>
            <p className="max-lg:leading-loose  mt-15 font-medium   text-description  text-[17px]  ">
              <span>Hey, I am Aayush </span>
              <br></br>
              <br></br>
              an independent product designer and framer developer from India. I
              work with founders and early-stage teams to shape clean,
              functional visual & web experiences.
              <br></br>
              <br></br>I survive on Redbull and all-nighters, running purely on
              caffeine and stubbornness. I hate coding, but I’ll happily spend
              hours tweaking spacing until it feels “just right.”
              <br></br>
              <br></br>
              I’ve got a habit of finding calm in staring at clouds and sky
              textures. Half of my camera roll is just blue gradients and soft
              sunlight.
              <br></br>
              <br></br>I like building stuff that feels simple, smooth, and
              kinda satisfying to use.
              <br></br>
              <br></br>{" "}
              <strong>If you want to build something together, I’m in.</strong>
            </p>
            <div className="pt-3 md:pt-8  ">
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
            </div>
          </div>
          <div className="flex items-center justify-center mt-4  w-full xl:w-1/2 p-2">
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
