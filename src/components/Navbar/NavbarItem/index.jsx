import ReactDOM from "react-dom";

const NavbarItem = (props) => {
  const onMouseClick = (id) => {
    if (window.screen.width < 992) {
      document.querySelector(".navbar-toggler").click();
    }

    ReactDOM.findDOMNode(document.querySelector(".active")).classList.remove(
      "active"
    );
    let element = document.getElementById(id);
    ReactDOM.findDOMNode(element).classList.add("active");
  };

  return (
    <li className="nav-item">
      <a
        className={props.active}
        aria-current={props.ariaCurrent}
        href={props.href}
        id={props.id}
        key={props.id}
        onClick={() => onMouseClick(props.id)}
      >
        {props.navItem}
      </a>
    </li>
  );
};

export default NavbarItem;
