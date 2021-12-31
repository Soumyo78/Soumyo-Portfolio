import "./style.scss";
import { useEffect, useState } from "react";
import ItemImageComponent from "./ItemImageComponent";
import PortfolioHeadingListComponent from "./PortfolioHeadingListComponent";
import {
  featuredAppPortfolioData,
  fullStackAppPortfolioData,
  reactAppPortfolioData,
  mobileAppPortfolioData,
  onlineGamesPortfolioData,
} from "./portfolio-data";

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

  return (
    <div className="portfolio-main-container" id="portfolio">
      <h1>Portfolio</h1>
      <PortfolioHeadingListComponent
        itemHeadingList={[
          { heading: "Featured", id: "featured" },
          { heading: "Full Stack Apps", id: "full_stack_apps" },
          { heading: "React Apps", id: "react_apps" },
          { heading: "Mobile Apps", id: "mobile_apps" },
          { heading: "Online Games", id: "online_game" },
        ]}
        selectedState={selected}
        selectStateFunction={setSelected}
      />
      <ItemImageComponent
        itemImageList={portfolioProjectData[0]}
        itemTitleList={portfolioProjectData[1]}
      />
    </div>
  );
};

export default Portfolio;
