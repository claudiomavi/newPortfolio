export default function About() {
  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            <p>
              I'm a frontend developer based out of London, UK. I love building
              apps that solve real-world problems, and that are delightful to
              use. My specialities include TypeScript, React JS, Tailwind CSS,
              and Styled Components.
            </p>
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                My background is in teaching and marketing. I have a bachelors
                degree in English from Kings College. When I'm not coding, I
                take care of my five adorable cats.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr">
              Contact
            </a>
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">React</div>
              <div class="skills__skill">TypeScript</div>
              <div class="skills__skill">Git</div>
              <div class="skills__skill">Figma</div>
              <div class="skills__skill">Tailwind CSS</div>
              <div class="skills__skill">Jasmine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
