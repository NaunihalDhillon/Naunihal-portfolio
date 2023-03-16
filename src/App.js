import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./sections/contact/Contact";
import Experience from "./sections/experience/Experience";
import Hero from "./sections/hero/Hero";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
