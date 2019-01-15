import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div
      id="modal1"
      className="modal"
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "10",
        backgroundColor: "rgba(0,0,0,0.9)"
      }}
    >
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <Link
          to="/addtreasure"
          className="modal-close waves-effect waves-green btn-flat"
        >
          Buy
        </Link>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
