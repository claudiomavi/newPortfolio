import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import Projects from "./pages/Projects";

// to-do: instalar react-router-hash-link
// to-do: crear componente scroll to top y usarlo
// to-do: usa hashlink en el navbar
// to-do: elimina la función de scroll into view de ProjectsSection
// to-do: elimina la función handleScroll de Header

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
