import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Uniforms from "./pages/Uniforms";
import Specialty from "./pages/Specialty";
import Accessories from "./pages/Accessories";
import TShirts from "./pages/TShirts";
import Infrastructure from "./pages/Infrastructure";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="uniforms" element={<Uniforms />} />
        <Route path="specialty" element={<Specialty />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="t-shirts" element={<TShirts />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
