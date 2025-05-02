import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { skills } from "../datas/skills";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // espera a que cargue todo
      }
    }
  }, [location]);

  return (
    <section id="about" className="not-md:py-32 bg-[#fafafa] py-48">
      <div className="mx-auto w-[92%] max-w-[120rem]">
        <h2 className="not-md:mb-32 mb-36">
          <span className="relative mb-14 block text-center text-6xl uppercase tracking-widest">
            About Me
          </span>
          <span className="not-sm:text-3xl leading-12 m-auto block max-w-7xl text-center text-3xl font-medium text-[#777]">
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
        <div className="not-md:gap-32 grid grid-cols-1 gap-40">
          <div>
            <h3 className="not-sm:text-4xl mb-12 text-5xl font-bold">
              Get to know me!
            </h3>
            <div>
              <p className="leading-12 mb-16 max-w-5xl text-3xl text-gray-500">
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
          <div>
            <h3 className="not-sm:text-4xl mb-12 text-5xl font-bold">
              My Skills
            </h3>
            <div className="flex flex-wrap">
              {skills.map((skill) => {
                return (
                  <div className="mb-6 mr-6 rounded-md bg-[rgba(153,153,153,0.2)] px-8 py-4 text-3xl font-semibold text-[#777]">
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
