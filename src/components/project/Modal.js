import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ showModal }) => {
  return ReactDOM.createPortal(
    <div
      className="valign-wrapper"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "10",
        backgroundColor: "rgba(0,0,0,0.9)"
      }}
    >
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1 center">
            <div className="card-content white-text">
              <span className="card-title">Additional Item Slot</span>
              <p style={{ fontSize: "1.6rem" }}>
                Do you want to buy additional storage space for{" "}
                <strong>
                  <sup>$</sup>4.99
                </strong>{" "}
                ?
              </p>
            </div>
            <div className="card-action">
              <button className="btn" onClick={showModal}>
                No, thank you
              </button>{" "}
              <button className="btn" onClick={showModal}>
                Buy one now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
