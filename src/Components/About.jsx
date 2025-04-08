export default function About() {
  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            <p>
              I'm a Front-End Developer with expertise in React and JavaScript,
              focused on creating efficient and user-friendly web applications.
              I combine modern CSS techniques with responsive design principles
              to deliver seamless user experiences. Currently expanding my
              skills in web development while maintaining a strong foundation in
              best practices and clean code architecture.
            </p>
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                My background is in business administration and web development.
                I’ve worked in administration for a Spanish company while
                building personal projects using React and modern web
                technologies. When I’m not coding, I enjoy fantasy series like
                Game of Thrones.
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
              <div class="skills__skill">Firebase</div>
              <div class="skills__skill">Git</div>
              <div class="skills__skill">Figma</div>
              <div class="skills__skill">Tailwind CSS</div>
              <div class="skills__skill">API Rest</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
