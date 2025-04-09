import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
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
    <section
      id="contact"
      className="not-md:py-32 bg-[linear-gradient(to_right,rgba(var(--main-color),0.8),rgba(var(--main-color),0.8)),url('/svg/common-bg.svg')] bg-cover bg-center py-48"
    >
      <div className="mx-auto w-[92%] max-w-[120rem]">
        <h2 className="not-md:mb-32 mb-36">
          <span className="relative mb-14 block text-center text-6xl uppercase tracking-widest text-white">
            Contact
          </span>
          <span className="not-sm:text-3xl leading-12 m-auto block max-w-7xl text-center text-3xl font-medium text-[#eee]">
            Please reach out if you have any questions! I'm happy to jump on a
            video call to brainstorm projects and ideas. Send me an email at
            claudio.marino@outlook.es or call me directly at +34 662 502 171
          </span>
        </h2>
      </div>
    </section>
  );
}
