export default function About() {
  return (
    <section id="about" className="about not-md:py-32 py-48">
      <div className="mx-auto w-[92%] max-w-[120rem]">
        <h2 className="heading-sec__mb-med">
          <span className="relative mb-14 block text-center text-6xl uppercase tracking-widest">
            About Me
          </span>
          <span className="not-sm:text-3xl m-auto block max-w-7xl text-center text-3xl font-medium text-[#777]">
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
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                My background is in business administration and web development.
                I’ve worked in administration for a Spanish company while
                building personal projects using React and modern web
                technologies. When I’m not coding, I enjoy fantasy series like
                Game of Thrones.
              </p>
            </div>
            <a
              href="./#contact"
              className="btn bg-n-blue px-[5rem] py-[1.5rem] text-[1.6rem] text-white"
            >
              Contact
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Firebase</div>
              <div className="skills__skill">Git</div>
              <div className="skills__skill">Figma</div>
              <div className="skills__skill">Tailwind CSS</div>
              <div className="skills__skill">API Rest</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
