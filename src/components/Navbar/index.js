import { BackgroundColor } from "chalk";
import React from "react";
import navLogo from "../../resources/nav-logo.png";
import "./style.css";
import NavbarItem from "./NavbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#FF4500" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={navLogo} alt="navbar logo" />
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
              id={"nav-about"}
              href={"#about"}
              navItem={"About"}
            />
            <NavbarItem
              active={"nav-link"}
              id={"nav-service"}
              href={"#service"}
              navItem={"Service"}
            />
            <NavbarItem
              active={"nav-link"}
              id={"nav-portfolio"}
              href={"#portfolio"}
              navItem={"Portfolio"}
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

export default Navbar;
