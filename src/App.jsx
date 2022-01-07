// Importing scss and styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//Importing react stuffs
import ReactDOM from "react-dom";
import { useEffect } from "react";

// Importing components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SkillAndKnowledge from "./components/SkillAndKnowledge";
import EducationAdnExperience from "./components/EducationAdnExperience";
import Contact from "./components/Contact";

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
        ReactDOM.findDOMNode(document.querySelector("#nav-skill-and-knowledge")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(108, 99, 255)")
      }

      if (sectionHeight >= currentViewHeight*3 && sectionHeight <= currentViewHeight*4) {
        ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-education-and-experience")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(108, 99, 255)")
      }

      if (sectionHeight >= currentViewHeight*4 && sectionHeight <= currentViewHeight*5) {
        ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-contact")).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "rgb(108, 99, 255)")
      }
    };
  }, []);

  // rendering components
  return (
    <main className="app-main-container">
      <Navbar />
      <div className="sections-main-container">
        <Home />
        <Portfolio />
        <SkillAndKnowledge />
        <EducationAdnExperience />
        <Contact />
      </div>
    </main>
  );
};

// Default exporting the component
export default App;
