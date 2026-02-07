import Marquee from "react-fast-marquee";
import {
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const LandingPage = () => {
  return (
    <main className="min-h-screen outer-container max-sm:pt-13 pt-14 gap-4 sm:gap-10 xl:pt-10 ">
      <div className="inner-container dots-bg relative bg-[rgb(242,242,242)] rounded-2xl overflow-hidden flex max-sm:min-h-screen items-center justify-center mx-2 sm:mx-auto px-3 py-8 sm:py-12">
        <div className="arc arc-orange absolute top-0 right-0 origin-top-right rotate-[180deg]" />

        <div className="arc arc-green absolute bottom-0 left-0 origin-bottom-left rotate-[180deg]" />

        <div className="px-2 flex flex-col justify-center items-center w-full">
          <span className="bg-white font-montserrat p-2 rounded-md mb-6 text-theme-green font-semibold text-xs sm:text-sm hidden xl:block rotate-3 ">
            Design x Logic x Fun
          </span>

          <div
            className="font-dm-serif text-theme-green
            text-[2rem] sm:text-[3.5rem] md:text-[clamp(4rem,5vw,7rem)]
            leading-[1.05]
            tracking-[-0.002em]
            font-medium px-2 sm:px-4 w-full "
          >
            <h2 className="text-center">
              <span className="flex justify-center items-center">
                Hi. I'm Aayush.
              </span>
              <span className="block">A Software Developer.</span>
            </h2>
            <div className="font-dm-sans text-base sm:text-[22px]  mt-4 flex justify-center items-center">
              <p className="text-center">
                who loves mixing logic and creativity to craft clean, impactful
                applications.
              </p>
            </div>
          </div>
          <div className="w-48 sm:w-80 md:w-[380px] mt-8 sm:mt-12 mx-auto">
            <Marquee gradient={false} speed={50}>
              <span className="mx-8 flex items-center gap-2">
                <RiReactjsFill size={24} className="text-[#58C4DC]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiNextjsFill size={24} className="text-[#080808]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiJavascriptFill size={24} className="text-[#F7E024]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <SiExpress size={24} className="text-gray-800" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiTailwindCssFill size={24} className="text-[#37B8F2]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiNodejsFill size={24} className="text-[#59A149]" />
              </span>
            </Marquee>
          </div>
          <div>
            <button className="border font-montserrat hover:bg-[#4C6763] border-theme-green px-6 py-2 rounded-full font-semibold text-xs sm:text-sm bg-[#222222] text-white mt-14 sm:mt-16">
              <a href="#projects"> Explore Projects </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
