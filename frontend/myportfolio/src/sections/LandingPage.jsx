const LandingPage = () => {
  return (
    <main className="min-h-screen grid-bg   w-full flex  justify-center gap-10 pt-24">
      <div className=" xl:max-w-6xl  justify-center relative border-2 border-amber-400 ">
        <div className="border-2 border-black">
          <p
            className="text-6xl font-['sunday'] text-theme-green   text-[clamp(3rem,4vw,5.5rem)]
  leading-[1.05]
  tracking-[-0.02em] px-4"
          >
            I'm Aayush, a software developer who loves mixing logic and
            creativity to craft clean, impactful applications.
          </p>
        </div>
        <div className="border-2 border-blue-700 flex mt-2 gap-4 p-3 text-theme-green font-dm-sans text-sm">
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
      </div>
    </main>
  );
};

export default LandingPage;
