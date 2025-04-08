import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="img/avatar.webp"
              alt="Claudio Marino Logo Image"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Claudio Marino</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="#" class="header__link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="header__link">
                Projects
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="header__link">
                About{" "}
              </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#contact" class="header__link">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${isOpen ? "d-none" : ""}`}
              onClick={toggleOpen}
            />
            <img
              src="/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${!isOpen ? "d-none" : ""}`}
              onClick={toggleOpen}
            />
          </div>
        </div>
      </div>
      <div
        className={`header__sm-menu ${isOpen ? "header__sm-menu--active" : ""}`}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
