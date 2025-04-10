import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Project from "./Project";
import { projects } from "../datas/projects";

export default function ProjectsSection() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
    function getRandomNumbers() {
      const numbers = [];
      while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * projects.length);
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      setRandomNumbers(numbers);
    }

    return getRandomNumbers();
  }, []);

  return (
    <section id="projects" className="not-md:py-32 py-48">
      <div className="mx-auto w-[92%] max-w-[120rem]">
        <h2 className="not-md:mb-32 mb-44">
          <span className="relative mb-14 block text-center text-6xl uppercase tracking-widest">
            Projects
          </span>
          <span className="not-sm:text-3xl leading-12 m-auto block max-w-7xl text-center text-3xl font-medium text-[#777]">
            All my projects include links to the code and live version. Click
            the button to learn more about each one.
          </span>
        </h2>

        <div className="flex flex-col items-center justify-center">
          {randomNumbers.map((number) => (
            <div key={projects[number].id}>
              <Project
                imageUrl={projects[number].imageUrl}
                title={projects[number].title}
                description={projects[number].description}
                siteUrl={projects[number].siteUrl}
              />
            </div>
          ))}
          <Link
            to="/projects"
            className="btn mt-32 bg-white px-20 py-6 text-3xl font-bold tracking-widest text-[#333]"
          >
            View all projects...
          </Link>
        </div>
      </div>
    </section>
  );
}
