import Marquee from "react-fast-marquee";
import { RiReactjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-bg-color w-full flex justify-center gap-10 xl:pt-32">
      <div className="xl:w-6xl dots-bg  relative bg-[rgb(242,242,242)] rounded-2xl overflow-hidden flex items-center justify-center">
        {/* THIS is now the arc container */}

        {/* Orange arc */}
        <div className="arc arc-orange absolute top-0 right-0 origin-top-right rotate-[180deg]" />

        {/* Green arc */}
        <div className="arc arc-green absolute bottom-0 left-0 origin-bottom-left rotate-[180deg]" />

        <div className="px-2   flex flex-col justify-center items-center">
          <span className="bg-white  font-montserrat p-2 rounded-md mb-6 text-theme-green font-semibold text-sm hidden xl:block ">
            Design x Logic x Fun
          </span>

          <div
            className=" 
          
             font-dm-serif
             text-theme-green
             text-[clamp(4rem,5vw,7rem)]
             leading-[1.05]
             tracking-[-0.02em]
              font-medium
             px-4      "
          >
            <h2 className="">
              <span className="flex justify-center items-center">
                Hi. I'm Aayush.
              </span>
              A software developer.
            </h2>
            <div className="font-montserrat text-[20px] mt-7   flex justify-center items-center">
              <p>
                who loves mixing logic and creativity to craft clean, impactful
                applications.
              </p>
            </div>
          </div>
          <div className="  w-80 mt-12   mx-auto  ">
            <Marquee gradient={false} speed={50}>
              <span className="mx-8 flex items-center gap-2">
                <RiReactjsFill size={28} className="text-[#58C4DC]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiNextjsFill size={28} className="text-[#080808]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiJavascriptFill size={28} className="text-[#F7E024]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <SiExpress size={28} className="text-gray-800" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiTailwindCssFill size={28} className="text-[#37B8F2]" />
              </span>
              <span className="mx-8 flex items-center gap-2">
                <RiNodejsFill size={28} className="text-[#59A149]" />
              </span>
            </Marquee>
          </div>
          {/* <div className="flex gap-4 p-3 text-theme-green font-dm-sans text-sm mt-7">
            <p className="border border-theme-green rounded-md px-2 py-0.5">
              FRONTEND
            </p>
            <p className="border border-theme-green rounded-md px-2 py-0.5">
              BACKEND
            </p>
            <p className="border border-theme-green rounded-md px-2 py-0.5">
              BACKEND
            </p>
          </div> */}
          <div>
            <button className="border font-montserrat  hover:bg-[#4C6763] border-theme-green  px-6 py-2 rounded-full font-semibold text-sm bg-[#222222] text-white mt-20">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
