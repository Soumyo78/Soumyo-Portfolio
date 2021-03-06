const NavbarItem = (props) => {
  const onMouseClick = (id) => {
    if (id === "nav-blog") {
      const blogComingModal = document.querySelector("#blog-coming-soon")
      blogComingModal.style.display = "inherit";
    }

    if (window.screen.width < 992) {
      document.querySelector(".navbar-toggler").click();
    }
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

// Default exporting the components
export default NavbarItem;
