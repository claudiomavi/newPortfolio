export default function Hero() {
  return (
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hey, My name is Claudio Marino</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            I am a passionate frontend developer based in Valencia, ES. My
            specialities are <strong>React JS</strong> and{" "}
            <strong>Tailwind CSS</strong>, and I love building apps that are
            delightful to use.
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">
            See my projects
          </a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a
            href="https://www.linkedin.com/in/claudio-marino-b3420b296/"
            target="_blank"
            rel="noopener noreferrer"
            class="home-hero__social-icon-link"
          >
            <img
              src="/img/linkedin-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="https://github.com/claudiomavi"
            target="_blank"
            rel="noopener noreferrer"
            class="home-hero__social-icon-link"
          >
            <img
              src="/img/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="mailto:claudio.marino@outlook.es"
            target="_blank"
            rel="noopener noreferrer"
            class="home-hero__social-icon-link"
          >
            <img
              src="/svg/mail.svg"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="https://www.instagram.com/marinodeveloper"
            target="_blank"
            rel="noopener noreferrer"
            class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="/img/insta-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
  );
}
