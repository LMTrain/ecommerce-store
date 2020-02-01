import React from "react";
// import { Link } from "react-router-dom";
import "./userNavStyle.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function userNavbar(props) {
  return (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">

    <span className="nav-icon-space2"></span>
    <span>      
      <div id="nav-search">
        <form className="form-inline">
          <div className="form-group">
            <div id="item-search-icon" ></div>
            <label htmlFor="search"></label>
            <input
              value={props.search}
              onChange={props.setSearch}
              name="search"
              width="1800px"          
              type="text"
              className="form-control"
              placeholder="Type in an item"
              id="search"
              />
              <button type="submit" onClick={props.submit} className="btn btn-secondary"><i className="fa fa-search"></i></button>
            {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
              Search
            </button>        */}
              {/* <div className="input-group-append"> */}
          
    
              {/* <input id="item-input" type="text" className="form-control" placeholder="Search for an item" /> */}
              {/* </div> */}
          </div>
        </form>
      </div>
    </span>
          <span className="nav-icon-space"></span>


  
    

    
  </nav>
  );
}

export default userNavbar;
