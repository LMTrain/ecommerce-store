import React from "react";
import "./style.css";

function homeimage(props) {
  return (
    <div className="homeimage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default homeimage;
