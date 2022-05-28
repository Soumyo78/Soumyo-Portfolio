import "./style.scss";

const ContentCardComponent = (props) => {
  const {
    titleText,
    cardContent,
    mainContainerWidth,
    mainContainerHeight,
    containerClassName,
  } = props;

  return (
    <div
      className={`content-card-main-container overflow-auto ${containerClassName}`}
      style={{
        width: mainContainerWidth ? mainContainerWidth : "fit-content",
        height: mainContainerHeight ? mainContainerHeight : "fit-content",
      }}
    >
      <h2
        id={`${titleText?.replace(/\s+/g, "-")?.toLowerCase()}-text`}
        className="card-title-text"
      >
        {titleText}
      </h2>
      <div className="card-content-container">{cardContent}</div>
    </div>
  );
};

export default ContentCardComponent;
