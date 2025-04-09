export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-[92%] max-w-[120rem]">
        <div className="not-md:py-24 not-sm:block flex justify-between py-32">
          <div className="not-md:mb-20 order-2">
            <h2 className="text-4xl uppercase tracking-widest">
              <span>Social</span>
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row md:items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/claudio-marino-b3420b296/"
              >
                <img className="w-10" src="/img/linkedin-ico.webp" alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/claudiomavi"
              >
                <img className="w-10" src="/img/github-ico.webp" alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:claudio.marino@outlook.es"
              >
                <img className="w-10" src="/svg/mail.svg" alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/marinodeveloper"
              >
                <img className="w-10" src="/img/insta-ico.webp" alt="icon" />
              </a>
            </div>
          </div>
          <div className="not-md:w-full order-1 w-[40%] max-w-[50rem]">
            <h4 className="text-4xl uppercase tracking-widest">
              Claudio Marino
            </h4>
            <p className="leading-12 mt-8 text-2xl text-[#eee]">
              Front-End Developer | React & JavaScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
