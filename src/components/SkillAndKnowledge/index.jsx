// Importing the styles
import "./style.scss";

// Importing components
import ContentCardComponent from "../Global/ContentCardComponent/Index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Importing Resources
import KnowledgeHtmlLogo from "../../resources/knowledge-logos/html-logo.png";
import KnowledgeCssLogo from "../../resources/knowledge-logos/css-logo.png";
import KnowledgeBootstrapLogo from "../../resources/knowledge-logos/bootstrap-logo.png";
import KnowledgeSassLogo from "../../resources/knowledge-logos/sass-logo.png";
import KnowledgeJavascriptLogo from "../../resources/knowledge-logos/javascript-logo.png";
import KnowledgeReactLogo from "../../resources/knowledge-logos/react-logo.png";
import KnowledgeReduxLogo from "../../resources/knowledge-logos/redux-logo.png";
import KnowledgeGitLogo from "../../resources/knowledge-logos/git-logo.png";
import KnowledgeGithubLogo from "../../resources/knowledge-logos/github-logo.png";
import KnowledgeGitlabLogo from "../../resources/knowledge-logos/gitlab-logo.png";
import KnowledgeJiraLogo from "../../resources/knowledge-logos/jira-logo.jpg";
import KnowledgeConfluenceLogo from "../../resources/knowledge-logos/confluence-logo.png";
import KnowledgeDockerLogo from "../../resources/knowledge-logos/docker-logo.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const SkillAndKnowledge = () => {
  return (
    <div
      className="skill-and-knowledge-main-container"
      id="skill-and-knowledge"
    >
      <h1 id="skill-and-knowledge-h1-text">My Skills and Knowledge</h1>
      <div className="content-cards-container overflow-auto">
        <ContentCardComponent
          titleText={"Design Skills"}
          cardContent={
            <>
              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">Web Designing</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">Database Designing</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">Presentation Designing</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "67%" }}
                    aria-valuenow="67"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">Print Designing</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-info progress-bar-animated"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </>
          }
          mainContainerHeight={"37vh"}
        />
        <ContentCardComponent
          titleText={"Coding Skills"}
          cardContent={
            <>
              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">Javascript</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">Ruby</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">React Js</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">Rails</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="skill-with-progress-bar-container">
                <h3 className="skill-title-text">CSS</h3>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </>
          }
          mainContainerHeight={"37vh"}
        />

        <ContentCardComponent
          titleText={"My Knowledge"}
          cardContent={
            <div className="knowledge-carousel-main-container">
              <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={500}
                infinite={true}
                arrows={false}
              >
                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeHtmlLogo}
                    alt="HTML"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeCssLogo}
                    alt="CSS"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeBootstrapLogo}
                    alt="Bootstrap"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeSassLogo}
                    alt="Sass"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeJavascriptLogo}
                    alt="Javascript"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeReactLogo}
                    alt="React Js"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeReduxLogo}
                    alt="Redux"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeGitLogo}
                    alt="Git"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeGithubLogo}
                    alt="Github"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeGitlabLogo}
                    alt="Gitlab"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeJiraLogo}
                    alt="Jira"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeConfluenceLogo}
                    alt="Confluence"
                  />
                </div>

                <div className="carousel-img-text-container">
                  <img
                    className="carousel-image"
                    src={KnowledgeDockerLogo}
                    alt="Docker"
                  />
                </div>
              </Carousel>
            </div>
          }
          mainContainerWidth={"87vw"}
          mainContainerHeight={"23vh"}
        />
      </div>
    </div>
  );
};

// Default exporting the components
export default SkillAndKnowledge;
