export default function Footer() {
  return (
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/github-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/twitter-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/yt-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/img/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Jane Smith</h4>
            <p class="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
        </div>

        {/* <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :)
        <div class="main-footer__lower">
          &copy; Copyright 2021. Made by
          <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"
            >Ram Maheshwari</a
          >
        </div>
         --> */}
      </div>
    </footer>
  );
}
