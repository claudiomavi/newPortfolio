// to-do: add a button to go into another page with all the projects
// to-do: make a state and push to it 3 random numbers (max the lenghy of the json projects)
// to-do: the function of random numbers have to run only the first time (use an useEffect)
// to-do: create a Project component that can be rehused in this component and into the page with all the projects

export default function Projects() {
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

        <div>
          <div className="not-md:grid-cols-1 not-md:gap-8 not-md:text-center not-md:mb-32 mb-44 grid grid-cols-[1.5fr_1fr] gap-20">
            <div className="overflow-hidden">
              <img
                src="./assets/img/quiz.jpg"
                alt="Software Screenshot"
                className="block w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="not-md:items-center flex flex-col items-start justify-center py-8">
              <h3 className="not-sm:font-4xl mb-8 text-5xl font-bold">
                Quiz App
              </h3>
              <p className="not-sm:text-2xl leading-12 mb-12 max-w-5xl text-3xl text-gray-400">
                Quizzical is a simple quiz app that lets you select alternatives
                and then gives you a score. It's built with functional React
                components.
              </p>
              <a
                href="./project-1.html"
                className="btn bg-n-blue px-[5rem] py-[1.5rem] text-[1.6rem] text-white"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
