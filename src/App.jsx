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
import ModalComponent from "./components/Global/ModalComponent";

const App = () => {
  useEffect(() => {
    let sectionMainContainer = document.querySelector(
      ".sections-main-container"
    );

    sectionMainContainer.onscroll = function () {
      let sectionHeight = sectionMainContainer.scrollTop;
      let currentViewHeight = window.innerHeight - 80;
      let rootCss = document.querySelector(":root");

      if (sectionHeight >= 0 && sectionHeight < currentViewHeight) {
        ReactDOM.findDOMNode(
          document.querySelector(".active")
        ).classList.remove("active");
        ReactDOM.findDOMNode(document.querySelector("#nav-home")).classList.add(
          "active"
        );
        rootCss.style.setProperty("--primary-ui-color", "darkblue");
      }

      if (
        sectionHeight >= currentViewHeight &&
        sectionHeight <= currentViewHeight * 2
      ) {
        ReactDOM.findDOMNode(
          document.querySelector(".active")
        ).classList.remove("active");
        ReactDOM.findDOMNode(
          document.querySelector("#nav-portfolio")
        ).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "darkgoldenrod");
      }

      if (
        sectionHeight >= currentViewHeight * 2 &&
        sectionHeight <= currentViewHeight * 3
      ) {
        ReactDOM.findDOMNode(
          document.querySelector(".active")
        ).classList.remove("active");
        ReactDOM.findDOMNode(
          document.querySelector("#nav-skill-and-knowledge")
        ).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "darkslateblue");
      }

      if (
        sectionHeight >= currentViewHeight * 3 &&
        sectionHeight <= currentViewHeight * 4
      ) {
        ReactDOM.findDOMNode(
          document.querySelector(".active")
        ).classList.remove("active");
        ReactDOM.findDOMNode(
          document.querySelector("#nav-education-and-experience")
        ).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "forestgreen");
      }

      if (
        sectionHeight >= currentViewHeight * 4 &&
        sectionHeight <= currentViewHeight * 5
      ) {
        ReactDOM.findDOMNode(
          document.querySelector(".active")
        ).classList.remove("active");
        ReactDOM.findDOMNode(
          document.querySelector("#nav-contact")
        ).classList.add("active");
        rootCss.style.setProperty("--primary-ui-color", "sandybrown");
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
      <ModalComponent
        modalMainContainerId={"blog-coming-soon"}
        titleText={"Coming soon ..."}
        bodyText={"Blog section is coming soon."}
      />
    </main>
  );
};

// Default exporting the component
export default App;
