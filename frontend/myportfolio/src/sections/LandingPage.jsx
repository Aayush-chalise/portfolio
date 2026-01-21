const LandingPage = () => {
  return (
    <main className="min-h-screen  bg-bg-color w-full flex  justify-center gap-10 pt-20">
      <div className=" xl:max-w-6xl  dots-bg justify-center relative   bg-[rgb(242,242,242)] rounded-2xl   mt-14">
        <div className="relative rounded-3xl   ">
          {/* Orange arc */}
          <div className="arc arc-orange top-0 right-0 translate-1/2"></div>

          {/* Green arc */}
          <div className="arc arc-green bottom-0 left-0"></div>
          <div className="p-2 mt-1">
            <p
              className="text-6xl font-['sunday'] text-theme-green   text-[clamp(3rem,4vw,5.5rem)]
  leading-[1.05]
  tracking-[-0.02em] px-4"
            >
              I'm Aayush, a software developer who loves mixing logic and
              creativity to craft clean, impactful applications.
            </p>
          </div>
          <div className="  flex mt-2 gap-4 p-3 text-theme-green font-dm-sans text-sm">
            <p className="border border-theme-green rounded-md px-2 py-0.5">
              FRONTEND
            </p>
            <p className="border border-theme-green rounded-md px-2 py-0.5">
              BACKEND
            </p>
            <p className="border border-theme-green rounded-md px-2 py-0.5">
              BACKEND
            </p>
          </div>

          {/* content */}
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
