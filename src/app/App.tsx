import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ResumeLinks } from "./components/ResumeLinks";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectShowcase />
        <ResumeLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
