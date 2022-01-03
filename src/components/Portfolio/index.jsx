// Importing the styles
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faGrinStars,
  faMobileAlt,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

// Importing react stuffs
import { useEffect, useState } from "react";

//Importing components
import ItemImageComponent from "./ItemImageComponent";
import PortfolioHeadingListComponent from "./PortfolioHeadingListComponent";

// Importing resources
import {
  featuredAppPortfolioData,
  fullStackAppPortfolioData,
  reactAppPortfolioData,
  mobileAppPortfolioData,
  onlineGamesPortfolioData,
} from "./portfolio-data";
import { ReactComponent as ReactIcon } from "../../resources/react-icon.svg";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [portfolioProjectData, setPortfolioProjectData] = useState(
    featuredAppPortfolioData
  );

  useEffect(() => {
    switch (selected) {
      case "featured":
        setPortfolioProjectData(featuredAppPortfolioData);
        break;
      case "full_stack_apps":
        setPortfolioProjectData(fullStackAppPortfolioData);
        break;
      case "react_apps":
        setPortfolioProjectData(reactAppPortfolioData);
        break;
      case "mobile_apps":
        setPortfolioProjectData(mobileAppPortfolioData);
        break;
      case "online_game":
        setPortfolioProjectData(onlineGamesPortfolioData);
        break;
      default:
        setPortfolioProjectData(featuredAppPortfolioData);
        break;
    }
  }, [selected]);

  return window.screen.width <= 650 ? (
    <div className="portfolio-main-container" id="portfolio">
      <h1 id="home-h1-text">My Portfolio</h1>
      <ItemImageComponent itemList={portfolioProjectData} />
      <PortfolioHeadingListComponent
        itemHeadingList={[
          {
            heading: "Featured",
            id: "featured",
            key: "featured-item-desktop",
            icon: (
              <FontAwesomeIcon
                icon={faGrinStars}
                style={{ color: "white" }}
                size="2x"
                id="featured-icon"
              />
            ),
          },
          {
            heading: "Full Stack Apps",
            id: "full_stack_apps",
            key: "full-stack-item-desktop",
            icon: (
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ color: "white" }}
                size="2x"
                id="full-stack-icon"
              />
            ),
          },
          {
            heading: "React Apps",
            id: "react_apps",
            key: "react-app-item-desktop",
            icon: (
              <ReactIcon
                style={{ color: "white", width: "25px", height: "25px" }}
                id="react-apps-icon"
              />
            ),
          },
          {
            heading: "Mobile Apps",
            id: "mobile_apps",
            key: "mobile-app-item-desktop",
            icon: (
              <FontAwesomeIcon
                icon={faMobileAlt}
                style={{ color: "white" }}
                size="2x"
                id="mobile-apps-icon"
              />
            ),
          },
          {
            heading: "Online Games",
            id: "online_game",
            key: "online-game-item-desktop",
            icon: (
              <FontAwesomeIcon
                icon={faGamepad}
                style={{ color: "white" }}
                size="2x"
                id="online-games-icon"
              />
            ),
          },
        ]}
        selectedState={selected}
        selectStateFunction={setSelected}
      />
    </div>
  ) : (
    <div className="portfolio-main-container" id="portfolio">
      <h1 id="home-h1-text">Portfolio</h1>
      <PortfolioHeadingListComponent
        itemHeadingList={[
          {
            heading: "Featured",
            id: "featured",
            key: "featured-item-mobile",
            icon: (
              <FontAwesomeIcon
                icon={faGrinStars}
                style={{ color: "white" }}
                size="2x"
                id="featured-icon"
              />
            ),
          },
          {
            heading: "Full Stack Apps",
            id: "full_stack_apps",
            key: "full-stack-item-mobile",
            icon: (
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ color: "white" }}
                size="2x"
                id="full-stack-icon"
              />
            ),
          },
          {
            heading: "React Apps",
            id: "react_apps",
            key: "react-app-item-mobile",
            icon: (
              <ReactIcon
                style={{ color: "white", width: "25px", height: "25px" }}
                id="react-apps-icon"
              />
            ),
          },
          {
            heading: "Mobile Apps",
            id: "mobile_apps",
            key: "mobile-app-item-mobile",
            icon: (
              <FontAwesomeIcon
                icon={faMobileAlt}
                style={{ color: "white" }}
                size="2x"
                id="mobile-apps-icon"
              />
            ),
          },
          {
            heading: "Online Games",
            id: "online_game",
            key: "online-game-item-mobile",
            icon: (
              <FontAwesomeIcon
                icon={faGamepad}
                style={{ color: "white" }}
                size="2x"
                id="online-games-icon"
              />
            ),
          },
        ]}
        selectedState={selected}
        selectStateFunction={setSelected}
      />
      <ItemImageComponent itemList={portfolioProjectData} />
    </div>
  );
};

// Default exporting the components
export default Portfolio;
