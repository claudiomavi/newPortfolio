export default function Hero() {
  return (
    <section
      id="home"
      className="not-sm:h-auto not-sm:min-h-0 relative h-screen max-h-[120rem] min-h-[80rem] bg-[linear-gradient(to_right,rgba(var(--main-color),0.8),rgba(var(--main-color),0.8)),url('/svg/common-bg.svg')] bg-cover bg-center bg-no-repeat text-white"
    >
      <div className="not-sm:pt-72 not-sm:pb-52 not-sm:m-auto not-sm:static not-sm:-translate-0 absolute left-1/2 top-1/2 w-[92%] max-w-[90rem] -translate-x-1/2 -translate-y-1/2 transform">
        <h1 className="not-sm:text-7xl text-center text-8xl uppercase tracking-[3px]">
          Hey, My name is Claudio Marino
        </h1>
        <div className="mx-auto mt-12 max-w-7xl">
          <p className="not-sm:text-3xl leading-12 w-full text-center text-4xl">
            I am a passionate frontend developer based in Valencia, ES. My
            specialities are <strong>React JS</strong> and{" "}
            <strong>Tailwind CSS</strong>, and I love building apps that are
            delightful to use.
          </p>
        </div>
        <div className="mt-20 text-center">
          <a
            href="./#projects"
            className="btn bg-white px-[8rem] py-[1.5rem] text-[2rem] text-[#333]"
          >
            See my projects
          </a>
        </div>
      </div>
      <div className="not-md:hidden absolute top-1/2 -translate-y-1/2 transform border-2 border-[#eee]">
        <div className="w-20">
          <a
            href="https://www.linkedin.com/in/claudio-marino-b3420b296/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-[#eee] p-5 transition-all duration-300 hover:bg-white/10"
          >
            <img src="/img/linkedin-ico.webp" alt="icon" className="w-full" />
          </a>
        </div>
        <div className="w-20">
          <a
            href="https://github.com/claudiomavi"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-[#eee] p-5 transition-all duration-300 hover:bg-white/10"
          >
            <img src="/img/github-ico.webp" alt="icon" className="w-full" />
          </a>
        </div>
        <div className="w-20">
          <a
            href="mailto:claudio.marino@outlook.es"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-[#eee] p-5 transition-all duration-300 hover:bg-white/10"
          >
            <img src="/svg/mail.svg" alt="icon" className="w-full" />
          </a>
        </div>
        <div className="w-20">
          <a
            href="https://www.instagram.com/marinodeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-b-0 border-[#eee] p-5 transition-all duration-300 hover:bg-white/10"
          >
            <img src="/img/insta-ico.webp" alt="icon" className="w-full" />
          </a>
        </div>
        <div className="w-20">
          <a
            href="https://flowcv.com/resume/hr4qjb7q89bs"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-b-0 border-[#eee] p-5 transition-all duration-300 hover:bg-white/10"
          >
            <img src="/svg/curriculum.svg" alt="icon" className="w-full" />
          </a>
        </div>
      </div>
      <div className="not-sm:hidden absolute bottom-[3%] left-1/2 -translate-x-1/2 transform">
        <div className="mouse relative h-[40px] w-[25px] overflow-hidden rounded-[60px] border-2 border-[#eee]">
          <div className="animate-wheel absolute left-1/2 top-[7px] h-[5px] w-[5px] translate-x-[-50%] rounded-full bg-[#eee]"></div>
        </div>
      </div>
    </section>
  );
}
