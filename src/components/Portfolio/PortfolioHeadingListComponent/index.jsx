// Importing the styles
import "./style.scss";

const PortfolioHeadingListComponent = (props) => {
  const { itemHeadingList, selectedState, selectStateFunction } = props;

  const onClicKHeadingText = (item) => {
    selectStateFunction(item.id);
    // let selectedItem = document.querySelector(`#${item.id}`);
    // selectedItem.innerHTML += `<span>${item.heading}</span>`
  };

  return (
    <ul className="portfolio-list">
      {itemHeadingList.map((item, index) => {
        return window.screen.width <= 650 ? (
          <li
            id={item.id}
            key={`${item.id}_${index}`}
            className={selectedState === item.id ? "active" : "inactive"}
            onClick={() => {
              onClicKHeadingText(item);
            }}
          >
            {item.icon}
          </li>
        ) : (
          <li
            id={item.id}
            key={`${item.id}_${index}`}
            className={selectedState === item.id ? "active" : "inactive"}
            onClick={() => {
              onClicKHeadingText(item);
            }}
          >
            {item.heading}
          </li>
        );
      })}
    </ul>
  );
};

// Default exporting the components
export default PortfolioHeadingListComponent;
