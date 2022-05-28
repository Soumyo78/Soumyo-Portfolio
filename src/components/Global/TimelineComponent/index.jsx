// Importing the styles
import "./style.scss";

const TimelineComponent = (props) => {
  const { timeline_elements_arr } = props;

  return (
    <div className="timeline-component-main-container">
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            {timeline_elements_arr.map((item, index) => {
              return (
                <div className="timeline">
                  <a href={item?.timeline_href} className="timeline-content" target="_blank" rel="noreferrer">
                    <div className="timeline-year">{item?.timeline_year}</div>
                    <div className="timeline-icon">{item?.time_line_icon}</div>
                    <h3 className="title">{item?.timeline_title}</h3>
                    <p className="description">
                      {item?.timeline_description_1}
                      <br></br>
                      {item?.timeline_description_2}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
