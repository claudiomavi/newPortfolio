import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Projects from "./pages/Projects";

// to-do: optimize all the images

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
