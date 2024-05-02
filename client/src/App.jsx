import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages/index";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
