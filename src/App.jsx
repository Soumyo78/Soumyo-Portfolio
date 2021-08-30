import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="app-main-container">
      <Navbar />
      <div className="sections-main-container">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}

export default App;
