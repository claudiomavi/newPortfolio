// to-do: add a button to go into another page with all the projects
// to-do: make a state and push to it 3 random numbers (max the lenghy of the json projects)
// to-do: the function of random numbers have to run only the first time (use an useEffect)
// to-do: create a Project component that can be rehused in this component and into the page with all the projects

export default function Projects() {
  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            All my projects include links to the code and live version. Click
            the button to learn more about each one.
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/img/quiz.jpg"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Quiz App</h3>
              <p class="projects__row-content-desc">
                Quizzical is a simple quiz app that lets you select alternatives
                and then gives you a score. It's built with functional React
                components.
              </p>
              <a
                href="./project-1.html"
                class="btn btn--med btn--theme dynamicBgClr"
              >
                Learn more
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/img/dashboard.png"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Personal Dashboard</h3>
              <p class="projects__row-content-desc">
                A Chrome Extension that gives you an overview over the current
                time, how the weather is like and how Dogecoin is performing.
                Interacts with multiple APIs using async JS.
              </p>
              <a
                href="./project-2.html"
                class="btn btn--med btn--theme dynamicBgClr"
              >
                Learn more
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img
                src="./assets/img/password.jpg"
                alt="Software Screenshot"
                class="projects__row-img"
                loading="lazy"
              />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Password Generator</h3>
              <p class="projects__row-content-desc">
                An app that generates random passwords based on a few user
                inputs, e.g. length, types of characters, etc. Built with HTML,
                CSS, and vanilla JavaScript.
              </p>
              <a
                href="./project-3.html"
                class="btn btn--med btn--theme dynamicBgClr"
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
