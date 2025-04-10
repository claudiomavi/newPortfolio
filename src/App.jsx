import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Projects from "./pages/Projects";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}
