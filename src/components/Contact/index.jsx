// Importing the styles
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import emailjs from "@emailjs/browser";
import ContentCardComponent from "../Global/ContentCardComponent/Index";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x1vl3z7",
        "template_9aoc23k",
        form.current,
        "-cYfe9TrsPvWst1rH"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

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
            <div className="contact-card-right-container">
              <form ref={form} onSubmit={sendEmail}>
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
                    name="user_name"
                    required
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
                    name="user_email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Enter your message here"
                    name="message"
                    required
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary contact-card-right-container-end-btn"
                  value="Send"
                />
              </form>
            </div>
          </div>
        }
      />
    </div>
  );
};

// Default exporting the components
export default Contact;
