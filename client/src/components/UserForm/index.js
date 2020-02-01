import React from "react";
import "./style.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function UserForm(props) {
  return (
    <div className="gs-card card-body">
      <div id="message"></div>
      <h4 className="text-center mb-3">Create Account</h4>
        <form className="form-groups">
          <div className="form-group">
            <label htmlFor="membername">Name</label>
            <input
              value={props.membername}
              onChange={props.handleInputChange}
              name="membername"
              type="text"
              className="form-control" 
              placeholder="Enter Your Name"
              id="membername"
              />
          </div>
          <div className="form-group">
            <label htmlFor="memberemail">Email</label>
            <input 
              value={props.memberemail}
              onChange={props.handleInputChange}
              name="memberemail"
              type="text"
              className="form-control"  
              placeholder="Enter Your Email"
              id="memberemail"
              />
          </div>
          <div className="form-group">
            <label htmlFor="memberpassword">Password</label>
            <input
              value={props.memberpassword}
              onChange={props.handleInputChange}
              name="memberpassword"
              type="password" 
              className="form-control" 
              placeholder="Enter User Password"
              id="memberpassword" 
              />
          </div>
          <div className="form-group">
            <label id="confirmpassword">Confirm Password</label>
            <input
              value={props.confirmpassword}
              onChange={props.handleInputChange}
              name="confirmpassword"
              type="password" 
              className="form-control" 
              placeholder="Confirm Password"
              id="confirmpassword" 
              />
          </div>
          <span className="create-acc-btn"><button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary float-left">Create Account</button></span>
        </form>
        <p className="lead mt-4">Have An Account? <a href="/Signin/">Sign In</a></p>
    </div>
  );
}

export default UserForm;
