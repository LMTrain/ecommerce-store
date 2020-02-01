import React, { Component } from "react";
import Container from "../components/Container";
import { Redirect } from "react-router-dom";
import "./style.css";
import API from "../utils/API";


var UsermemberID = ""
class Signin extends Component {
  state = {
    memberId: "",
    user:{},
    membername: "",
    userName: "",
    memberpassword: "",  
    redirect: false,
    isError: false,
    errorMessage: '',
    message: '',
   
    
  };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

    
  signInSubmit = event => {
    event.preventDefault();
    const {memberemail, memberpassword} = this.state

    if (!memberemail) {
      this.message = "Username cannot be empty"
      this.setState({message: "Username cannot be empty"})         
      return;
    } else {
      this.message = " "
      this.setState({message: " "})      
    }
    
    if (!memberpassword) {
      this.message = "Password cannot be empty"
      this.setState({message: "Password cannot be empty"})       
      return;
    } else {
      this.message = " "
      this.setState({message: " "})      
  }

    const userAccount = {     
      memberemail,  
      memberpassword,     
    }

    this.setState({
      memberemail: '',      
      memberpassword: '',    
    })    
        
   
    let userName = String(userAccount.memberemail)   
    let password = String(userAccount.memberpassword)
    UsermemberID = String(userAccount.memberemail)
    API.loginUser({     
      userName: userName,      
      password: password,

    })    
    .then(res => {
      
      const { data } = res.data;
      if(res.data.error === "Invalid Password"){
        console.log(res.data)
        this.message = res.data.error        
        this.setState({
          isError: true,         
          errorMessage: res.data.error,
          memberemail: " ",      
          memberpassword: " ",
          message: res.data.error
        })
      } else if (res.data.error === "User does not exist!"){
          console.log(res.data)
          this.message = res.data.error         
          this.setState({
            isError: true,            
            errorMessage: res.data.error,
            memberemail: " ",      
            memberpassword: " ",
            message: res.data.error
          })
      
      } else {
    
        this.setState({
          redirect: true,
          userName: data[0].memberId,
          memberId: data[0].memberId,
          membername: data[0].memberName,
  
        })
        this.props.saveMemberID(userName, data[0].memberName)
        
        
      }
     
    })    
    .catch(err => console.log(err));      
  };


  render() {
    if (this.state.redirect) {
      this.props.saveMemberID(UsermemberID)
      return <Redirect to='/UserPage' />
    }    
    return (
      <div>            
        <Container style={{ marginTop: 80 }}>
          <div className="card card-body">
            {/* <div id="message"></div> */}
            <div id ="message">{this.message}</div>
            <h4 className="text-center mb-3">Sign In</h4>
            <form className="form-groups">          
              <div className="form-group">
                <label id="username">Username</label>
                <input 
                  value={this.memberemail}
                  onChange={this.handleInputChange}
                  name="memberemail"
                  type="text"
                  className="form-control"  
                  placeholder="Enter Your Email"
                  id="memberemail"
                  />
              </div>
              <div className="form-group">
                <label id="password">Password</label>
                <input 
                  value={this.memberpassword}
                  onChange={this.handleInputChange}
                  name="memberpassword"
                  type="password" 
                  className="form-control" 
                  placeholder="Enter User Password"
                  id="memberpassword" 
                  />
              </div>
              <span className="signin-btn"><button type="submit" onClick={this.signInSubmit} className="btn btn-primary float-left">Sign In</button></span>
            </form>
            <p className="lead mt-4">No Account? <a href="/Getstarted">Create Account</a></p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Signin;





