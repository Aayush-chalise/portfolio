import React from "react";

const AboutMe = () => {
  return (
    <section
      className="outer-container  border-2 border-amber-600 mt-20"
      id="aboutme"
    >
      <div className="inner-container min-h-screen  border p-2 ">
        <div className="w-full flex max-sm:flex-col border-2 p-1">
          <div className="border max-sm:w-full w-1/2 p-2 ">
            <h1 className="    md:text-[4rem]   font-dm-serif text-theme-green ">
              Being a developer was a dream <br></br> I had to fight for
            </h1>
            <p className="  mt-10 xl:text-[1.1rem] leading-loose text-description font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim nec augue. Nullam eget
              felis eget nunc mattis vulputate.
            </p>
          </div>
          <div className="border max-sm:w-full w-1/2 p-2">
            asdfasd
            <image src="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
