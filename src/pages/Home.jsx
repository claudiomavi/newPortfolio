import About from "../Components/About";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "./Projects";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
