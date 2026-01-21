const LandingPage = () => {
  return (
    <main className="min-h-screen bg-bg-color w-full flex justify-center gap-10 xl:pt-20">
      <div className="xl:w-6xl dots-bg  relative bg-[rgb(242,242,242)] rounded-2xl mt-14 overflow-hidden flex items-center justify-center">
        {/* THIS is now the arc container */}

        {/* Orange arc */}
        <div className="arc arc-orange absolute top-0 right-0 origin-top-right rotate-[180deg]" />

        {/* Green arc */}
        <div className="arc arc-green absolute bottom-0 left-0 origin-bottom-left rotate-[180deg]" />

        <div className="px-2  ">
          <span className="bg-white ">Design x Logic x Fun</span>

          <p
            className="
            text-8xl
                font-dm-serif
                text-theme-green
                text-[clamp(3rem,4vw,5.5rem)]
                leading-[1.05]
                tracking-[-0.02em]
                gap-2 font-medium
                px-4 flex flex-col  justify-center items-center  
              "
          >
            <span> Hi. I'm Aayush. </span>
            <span>A software developer.</span>
            <div className="font-montserrat">
              <span className="text-2xl">
                {" "}
                who loves mixing logic and creativity
              </span>
              <span className="text-2xl">
                {""} to craft clean, impactful applications.
              </span>
            </div>
          </p>
        </div>

        {/* <div className="flex mt-2 gap-4 p-3 text-theme-green font-dm-sans text-sm">
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
      </div>
    </main>
  );
};

export default LandingPage;
