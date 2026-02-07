const Footer = () => {
  return (
    <section className="outer-container min-h-[500px] bg-theme-green text-white text-[17px]">
      <div className="inner-container">
        <div className="border-b pb-16">
          <p className="font-dm-serif text-3xl font-semibold  leading-normal">
            From collaborating on a cool project to discussing the next big
            thing happening, feel free to drop me a line.
          </p>
        </div>

        <div className="flex justify-between pt-16  ">
          <div className="flex gap-12 text-[17px]">
            <span>Open to receive critique 🤍</span>
            <a
              href="mailto:<chaliseaayush2006@gmail.com> "
              className="border-b leading-[0.2] "
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-chalise-a94b522bb/"
              className="border-b"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <span>© Copyright 2026 Aayush Chalise</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
