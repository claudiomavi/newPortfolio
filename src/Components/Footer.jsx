export default function Footer() {
  // to-do: put the socials in row for big screens

  return (
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/claudio-marino-b3420b296/"
              >
                <img
                  class="main-footer__icon"
                  src="/img/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/claudiomavi"
              >
                <img
                  class="main-footer__icon"
                  src="/img/github-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:claudio.marino@outlook.es"
              >
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="/svg/mail.svg"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/marinodeveloper"
              >
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="/img/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Claudio Marino</h4>
            <p class="main-footer__short-desc">
              Front-End Developer | React & JavaScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
