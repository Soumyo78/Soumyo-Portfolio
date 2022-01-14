import "./style.scss";

const ModalComponent = (props) => {
  const { modalMainContainerId, bodyText, titleText } = props;

  const onClickModalClose = () => {
    const blogComingModal = document.querySelector("#blog-coming-soon")
    blogComingModal.style.display = "none";
  }

  return (
    <div className="modal" tabIndex="-1" id={modalMainContainerId}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{titleText}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClickModalClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{bodyText}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClickModalClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
