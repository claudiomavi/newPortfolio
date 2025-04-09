import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleScroll(id) {
    if (location.pathname !== "/") {
      return navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        return element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <header className="fixed z-10 w-full bg-white shadow-md">
      <div className="not-md:px-8 flex items-center justify-between px-20 py-4">
        <div className="hover:text-n-blue flex cursor-pointer items-center text-[#333] transition-all duration-300">
          <div className="bg-n-blue not-md:mr-5 not-md:h-16 not-md:w-16 mr-6 h-20 w-20 overflow-hidden rounded-full">
            <img
              src="img/avatar.webp"
              alt="Claudio Marino Logo Image"
              className="object-cover object-center"
            />
          </div>
          <span className="text-3xl font-bold uppercase tracking-widest">
            Claudio Marino
          </span>
        </div>
        <div>
          <ul className="not-sm:hidden flex">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="hover:text-n-blue not-md:py-12 not-md:px-7 not-md:text-2xl inline-block px-12 py-9 text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
              >
                {" "}
                Home{" "}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("projects")}
                className="hover:text-n-blue not-md:py-12 not-md:px-7 not-md:text-2xl inline-block px-12 py-9 text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-n-blue not-md:py-12 not-md:px-7 not-md:text-2xl inline-block px-12 py-9 text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
              >
                About{" "}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="hover:text-n-blue not-md:py-12 not-md:px-7 not-md:text-2xl inline-block px-12 py-9 text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
              >
                {" "}
                Contact{" "}
              </button>
            </li>
          </ul>
          <div className="not-sm:block hidden w-12 py-9">
            <img
              src="/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`w-full ${isOpen ? "hidden" : ""}`}
              onClick={toggleOpen}
            />
            <img
              src="/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`w-full ${!isOpen ? "hidden" : ""}`}
              onClick={toggleOpen}
            />
          </div>
        </div>
      </div>
      <div
        className={`invisible absolute top-full w-full bg-white opacity-0 shadow-md transition-all duration-300 ${isOpen ? "not-sm:visible not-sm:opacity-100 invisible opacity-0" : ""}`}
      >
        <div>
          <ul>
            <li>
              <button
                className="hover:text-n-blue block border-b border-t border-[#eee] px-12 py-10 text-right text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
                onClick={() => handleScroll("home")}
              >
                {" "}
                Home{" "}
              </button>
            </li>

            <li>
              <button
                className="hover:text-n-blue block border-b border-[#eee] px-12 py-10 text-right text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
                onClick={() => handleScroll("projects")}
              >
                {" "}
                Projects{" "}
              </button>
            </li>

            <li>
              <button
                className="hover:text-n-blue block border-b border-[#eee] px-12 py-10 text-right text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
                onClick={() => handleScroll("about")}
              >
                {" "}
                About{" "}
              </button>
            </li>

            <li>
              <button
                className="hover:text-n-blue block px-12 py-10 text-right text-2xl font-bold uppercase tracking-widest text-[#333] transition-all duration-300"
                onClick={() => handleScroll("contact")}
              >
                {" "}
                Contact{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
