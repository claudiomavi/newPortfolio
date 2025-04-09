export default function Hero() {
  return (
    <section className="not-sm:h-auto not-sm:min-h-0 relative h-screen max-h-[120rem] min-h-[80rem] bg-[linear-gradient(to_right,rgba(var(--main-color),0.8),rgba(var(--main-color),0.8)),url('/svg/common-bg.svg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="not-sm:pt-72 not-sm:pb-52 not-sm:m-auto not-sm:static not-sm:-translate-0 absolute left-1/2 top-1/2 w-[92%] max-w-[90rem] -translate-x-1/2 -translate-y-1/2 transform">
        <h1 className="not-sm:text-7xl text-center text-8xl uppercase tracking-[3px]">
          Hey, My name is Claudio Marino
        </h1>
        <div className="mx-auto mt-12 max-w-7xl">
          <p className="not-sm:text-3xl w-full text-center text-4xl">
            I am a passionate frontend developer based in Valencia, ES. My
            specialities are <strong>React JS</strong> and{" "}
            <strong>Tailwind CSS</strong>, and I love building apps that are
            delightful to use.
          </p>
        </div>
        <div className="mt-20 text-center">
          <a
            href="./#projects"
            className="btn px-[8rem] py-[1.5rem] text-[2rem]"
          >
            See my projects
          </a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a
            href="https://www.linkedin.com/in/claudio-marino-b3420b296/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__social-icon-link"
          >
            <img
              src="/img/linkedin-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://github.com/claudiomavi"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__social-icon-link"
          >
            <img
              src="/img/github-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="mailto:claudio.marino@outlook.es"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__social-icon-link"
          >
            <img
              src="/svg/mail.svg"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://www.instagram.com/marinodeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="/img/insta-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
