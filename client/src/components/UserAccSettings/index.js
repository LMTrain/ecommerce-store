import React from "react";
import "../UserAccSettings/style.css";
import Container from "../Container/";
import { Link } from "react-router-dom";



function UserAccSettings(props) {
  var divStyle = {};
 
  let settingArray = []
  for (var i = 0;  i < props.length; i++) {        
    settingArray.push(props); 
  } 
  
  divStyle = props.user && {
    color: props.user[0].colorDb,
    textAlign: props.user[0].textalignDb,
    fontSize: props.user[0].divfontsizeDb,
    fontFamily: props.user[0].fontfamilyDb,
  };
 
  
  return (
             
    <div>
      <Container style={{ marginTop: 60 }}>
        <div className="setting-box">
        <div style={divStyle}><b>Settings</b></div>
          <div className="img-container">
            
            <ul className="list-group search-results">{props.user && props.user.map(result => (                            
              <li key={result.userName} className="list-group-item">
                {/* <img alt={result.memberName} width="120" height="180" className="img-fluid" src={result.userImage == null ? 'https://lmtrain.github.io/lm-images/assets/  images/books5.jpg' : result.userImage} /><span></span>               */}
                  
                  
                  <p><b>Name    :</b> {result.memberName}</p>
                  <p><b>userName :</b> {result.userName}</p>
                  <p><b>Email    :</b> {result.memberId}</p>
                  <p><b>Credit Card   :</b> {result.cCard}</p>
                  <hr></hr>

                  <div className="lineitems">
                  <p><b>Password    :</b> </p><span><button id={result.userName} type="submit" onClick={() => props.passwordReset(result.userName)} className="btn btn-success">Reset Password</button></span><span></span>
                  </div><hr></hr><br></br>
                  <div className="lineitems">
                  <p><b>Current Theme   :</b> {result.userTheme}</p><button id={result.userName} type="submit" onClick={() => props.setTheme("theme9")} className="btn btn-success">Change Theme</button><span></span>
                  </div><hr></hr><br></br>
                  <p><b>Font Color    :</b> {result.colorDb}</p>
                  <p><b>Font Text   :</b> {result.fontfamilyDb}</p>
                  <p><b>Font Size-Title   :</b> {result.divfontsizeDb}</p>
                  <p><b>Font Size   :</b> {result.pfontsizeDb}</p><hr></hr><br></br>
                    {/* <span><b>contact :</b> {result.contact}</span> */}
                  <button id={result.userName} type="submit" onClick={() => props.settingSubmit(result.userName)} className="btn btn-success">Save Settings</button>
                  <Link to="/UserPage"><button id={result.userName} type="submit" className="btn btn-success">Done</button></Link>
                  
              </li>
              ))}
            </ul>
          </div>        
        </div>                           
      </Container>
    </div>
  );
  
}

                  


export default UserAccSettings;
