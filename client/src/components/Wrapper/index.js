import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper"  style={{ backgroundImage: `url(${props.getTheme()})` }} {...props} />;
}

export default Wrapper;
