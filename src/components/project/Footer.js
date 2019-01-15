import React from "react";

function Footer() {
  return (
    <footer className="page-footer teal lighten-1" style={footerStyle}>
      <div className="footer-copyright">
        <div className="container"> © Lex Aeterna 2019 </div>{" "}
      </div>{" "}
    </footer>
  );
}

const footerStyle = {
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  textAlign: "center"
};

export default Footer;
