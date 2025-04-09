import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Projects from "./pages/Projects";

// to-do: sustituir con react hash
// to-do: solucionar error pagina projects

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}
