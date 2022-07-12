// Importing the styles
import "./style.scss";
import ContentCardComponent from "../Global/ContentCardComponent/Index";
import TimelineComponent from "../Global/TimelineComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faSchool,
  faComputer,
  faBuildingColumns,
  faLaptopCode,
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const EducationAdnExperience = () => {
  return (
    <div
      className="education-and-experience-main-container overflow-auto"
      id="education-and-experience"
    >
      <ContentCardComponent
        titleText={"My Education"}
        mainContainerHeight={"100%"}
        cardContent={
          <TimelineComponent
            timeline_elements_arr={[
              {
                timeline_href: "http://krishnagarhighschool.in/",
                time_line_icon: <FontAwesomeIcon icon={faSchool} />,
                timeline_title: "Madhyamik (WBBSE)",
                timeline_year: "2015",
                timeline_description_1: "Score: 87.6%",
                timeline_description_2: "Krishnagar high school",
              },
              {
                timeline_href: "https://www.kjnnycc.org/",
                time_line_icon: <FontAwesomeIcon icon={faComputer} />,
                timeline_title: "Diploma in Computer Application (DCA)",
                timeline_year: "2015",
                timeline_description_1: "Score: 95.33%",
                timeline_description_2:
                  "Jawaharlal Nehru National Youth Center",
              },
              {
                timeline_href:
                  "https://en.wikipedia.org/wiki/Krishnagar_Collegiate_School",
                time_line_icon: <FontAwesomeIcon icon={faBuildingColumns} />,
                timeline_title: "Higher Secondary (WBCHSE)",
                timeline_year: "2017",
                timeline_description_1: "Score: 79.4%",
                timeline_description_2: "Krishnanagar Collegiate School",
              },
              {
                timeline_href: "https://www.kjnnycc.org/",
                time_line_icon: <FontAwesomeIcon icon={faLaptopCode} />,
                timeline_title:
                  "Diploma in Computer Application & Programming (DCA&P)",
                timeline_year: "2018",
                timeline_description_1: "Score: 95%",
                timeline_description_2:
                  "Jawaharlal Nehru National Youth Center",
              },
              {
                timeline_href: "https://klyuniv.ac.in/",
                time_line_icon: <FontAwesomeIcon icon={faGraduationCap} />,
                timeline_title: "B.Sc. Honours (3 Year Degree) in Physics",
                timeline_year: "2018-20",
                timeline_description_1: "Score: 72.625%",
                timeline_description_2: "University of Kalyani",
              },
              {
                timeline_href: "https://educations.alienbrains.in/",
                time_line_icon: <FontAwesomeIcon icon={faGlobe} />,
                timeline_title:
                  "Full Stack Web Development (React Js, Ruby on Rails, Postgresql)",
                timeline_year: "2020-21",
                timeline_description_1: "Alien Brains Educations",
              },
            ]}
          />
        }
      />

      <ContentCardComponent
        titleText={"My Experience"}
        mainContainerHeight={"100%"}
        cardContent={
          <TimelineComponent
            timeline_elements_arr={[
              {
                timeline_href: "https://alienbrains.in/",
                time_line_icon: <FontAwesomeIcon icon={faBriefcase} />,
                timeline_title: "Back-end Developer",
                timeline_year: "2021-Present",
                timeline_description_1: "Alien Brains",
                timeline_description_2:
                  "Ruby, Rails, Rspec, Jira, Heroku, REST APIs, PostgreSQL",
              },
            ]}
          />
        }
      />
    </div>
  );
};

// Default exporting the components
export default EducationAdnExperience;
