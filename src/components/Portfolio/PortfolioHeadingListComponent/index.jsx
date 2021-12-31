import "./style.scss";

const PortfolioHeadingListComponent = (props) => {
  const { itemHeadingList, selectedState, selectStateFunction } = props;

  return (
    <ul className="portfolio-list">
      {itemHeadingList.map((item, index) => {
        return (
          <li
            id={item.id}
            key={`${item.id}_${index}`}
            className={selectedState === item.id ? "active" : "inactive"}
            onClick={() => selectStateFunction(item.id)}
          >
            {item.heading}
          </li>
        );
      })}
    </ul>
  );
};

export default PortfolioHeadingListComponent;
