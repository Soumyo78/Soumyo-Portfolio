import "./style.scss";

const ItemImageComponent = (props) => {
  const { itemImageList, itemTitleList } = props;

  return (
    <div className="item-image-main-container">
      {itemTitleList.map((item, index) => {
        return (
          <div className="item">
            {itemImageList[index]}
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ItemImageComponent;
