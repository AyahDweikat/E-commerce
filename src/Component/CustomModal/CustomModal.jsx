import React from "react";

function CustomModal({title, body, footer}) {
  return (
    <div>
      <div className="modal" tabIndex={-1} id="customModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">

                {body}
            </div>
            <div className="modal-footer">
              {footer || 
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
