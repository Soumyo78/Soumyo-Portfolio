// Importing the styles
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import ContentCardComponent from "../Global/ContentCardComponent/Index";

const Contact = () => {
  return (
    <div className="contact-main-container" id="contact">
      <ContentCardComponent
        mainContainerHeight={"100%"}
        mainContainerWidth={"80%"}
        cardContent={
          <div className="contact-card-main-container">
            <span className="contact-card-left-container">
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="8x" />
              <h4 className="contact-card-left-container-text">
                If you have questions or just want to get in touch, use this
                form. I look forward to hearing from you!
              </h4>
            </span>
            <span className="contact-card-right-container">
              <h2 id="contact-me-text">Contact Me</h2>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name here"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary contact-card-right-container-end-btn"
              >
                Send
              </button>
            </span>
          </div>
        }
      />
    </div>
  );
};

// Default exporting the components
export default Contact;
