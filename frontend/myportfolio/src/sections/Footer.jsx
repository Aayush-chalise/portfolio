const Footer = () => {
  return (
    <section className="outer-container min-h-[500px] bg-theme-green text-white text-[17px] border-black mt-24  xl:mt-28 p-2">
      <div className="inner-container">
        <div className="border-b pb-16">
          <p className="font-dm-serif text-[21px] sm:text-2xl lg:text-3xl font-semibold  leading-normal">
            From collaborating on a cool project to discussing the next big
            thing happening, feel free to drop me a line.
          </p>
        </div>

        <div className="font-montserrat flex justify-between pt-16 flex-col xl:flex-row  ">
          <div className="flex lg:gap-8 flex-col lg:flex-row">
            <span className="max-xl:pb-4 max-sm:pb-2">
              Open to receive critique 🤍
            </span>
            <a
              href="mailto:<chaliseaayush2006@gmail.com> "
              className="sm:mb-1  "
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-chalise-a94b522bb/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div className="max-xl:pt-4 max-sm:pt-2">
            <span>© Copyright 2026 Aayush Chalise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
