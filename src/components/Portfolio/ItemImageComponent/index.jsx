// Importing the styles
import "./style.scss";

const ItemImageComponent = (props) => {
  const { itemList } = props;

  return (
    <div className="item-image-main-container">
      {itemList &&
        itemList.map((item) => {
          return (
            <a href={item.link} target="_blank" rel="noreferrer" key={item.key}>
              <div className="item">
                {item.image}
                <h3>{item.title}</h3>
              </div>
            </a>
          );
        })}
    </div>
  );
};

// Default exporting the components
export default ItemImageComponent;
