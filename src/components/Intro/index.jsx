import "./style.scss";
import { useEffect, useRef } from "react";
import { ReactComponent as HomeScreenPic1 } from "../../resources/home-screen-pic-3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { init } from "ityped";

const Intro = () => {
  const refText = useRef()

  useEffect(() => {
    init(refText.current, {
      showCursor: false,
      backDelay: 1500,
      strings: [
        "Ruby on Rails",
        "React",
        "Front-End",
        "Back-End",
        "Full Stack Web",
      ],
    });
  }, []);

  return (
    <div className="intro-main-container" id="home">
      <div className="left">
        <div className="image-container">
          <HomeScreenPic1 id="home-screen-pic-1" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 id="home-h2-text">Hi There, I'm</h2>
          <h1 id="home-h1-text">Soumyo Roy</h1>
          <h3 id="home-h3-text"><span ref={refText}></span> <span id="home-span-developer-text">Developer</span></h3>
        </div>
        <a href="#portfolio" className="home-section-down-arrow-container">
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ color: "white" }}
            size="2x"
            id="home-section-down-arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
