// Importing scss and styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing JS files
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ReactDOM from "react-dom";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    let sectionMainContainer = document.querySelector(
      ".sections-main-container"
    );

    sectionMainContainer.onscroll = function () {
      let sectionHeight = sectionMainContainer.scrollTop;
      let currentViewHeight = window.innerHeight - 80;
      let rootCss = document.querySelector(':root');

      if (sectionHeight >= 0 && sectionHeight < currentViewHeight) {
        ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-home")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(108, 99, 255)")
      }

     if (sectionHeight >= currentViewHeight && sectionHeight <= currentViewHeight*2) {
        ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-portfolio")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(0, 201, 166)")
      }

      if (sectionHeight >= currentViewHeight*2 && sectionHeight <= currentViewHeight*3) {
        ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-work")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(108, 99, 255)")
      }

      if (sectionHeight >= currentViewHeight*3 && sectionHeight <= currentViewHeight*4) {
        ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-testimonials")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(108, 99, 255)")
      }

      if (sectionHeight >= currentViewHeight*4 && sectionHeight <= currentViewHeight*5) {
        ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-contact")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(108, 99, 255)")
      }
    };
  }, []);

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
};

export default App;
