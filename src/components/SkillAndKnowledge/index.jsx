// Importing the styles
import "./style.scss";

// Importing components
import ContentCardComponent from "../Global/ContentCardComponent/Index";

const SkillAndKnowledge = () => {
  return (
    <div
      className="skill-and-knowledge-main-container"
      id="skill-and-knowledge"
    >
      <h1 id="skill-and-knowledge-h1-text">My Skills and Knowledge</h1>
      <div className="content-cards-container">
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
                    style={{ width: "75%" }}
                    aria-valuenow="75"
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
                    style={{ width: "70%" }}
                    aria-valuenow="70"
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
        />
      </div>
    </div>
  );
};

// Default exporting the components
export default SkillAndKnowledge;
