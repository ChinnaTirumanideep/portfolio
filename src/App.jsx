import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleNetworkBackground from "./components/ParticleNetworkBackground";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-[var(--app-bg)] text-[var(--text-primary)] transition-colors duration-500">
          <ParticleNetworkBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
