// Importing the styles
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Importing resources
import navLogo from "../../resources/nav-logo-7.png";

// Importing components
import NavbarItem from "./NavbarItem/index.jsx";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#FF4500" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img
            className="navbar-logo"
            src={navLogo}
            aria-hidden
            alt="navbar logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <NavbarItem
              active={"nav-link active"}
              id={"nav-home"}
              ariaCurrent={"page"}
              href={"#home"}
              navItem={"Home"}
            />
            <NavbarItem
              active={"nav-link"}
              id={"nav-portfolio"}
              href={"#portfolio"}
              navItem={"Portfolio"}
            />
            <NavbarItem
              active={"nav-link"}
              id={"nav-skill-and-knowledge"}
              href={"#skill-and-knowledge"}
              navItem={"Skill & Knowledge"}
            />
            <NavbarItem
              active={"nav-link"}
              id={"nav-education-and-experience"}
              href={"#education-and-experience"}
              navItem={"Education & Experience"}
            />
            <NavbarItem
              active={"nav-link"}
              id={"nav-contact"}
              href={"#contact"}
              navItem={"Contact"}
            />
            <NavbarItem
              active={"nav-link"}
              id={"nav-blog"}
              href={"#blog"}
              navItem={"Blog"}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Default exporting the components
export default Navbar;
