import Project from "../Components/Project";
import { projects } from "../datas/projects";

export default function Projects() {
  return (
    <section className="py-48">
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

        <div>
          {projects.map((project) => (
            <Project
              key={project.key}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              siteUrl={project.siteUrl}
              lenguages={project.lenguages}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
