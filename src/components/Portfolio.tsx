import { Contact } from "lucide-react";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;