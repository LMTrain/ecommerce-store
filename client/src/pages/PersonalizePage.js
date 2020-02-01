import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";


var divStyle = {}
var pStyle = {}
var mID = ""
class PersonalizePage extends Component {
  
  state = {   
    userThemes: ["theme0","theme1", "theme2", "theme3", "theme4", "theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12", "theme13", "theme14", "theme15", "theme16"],
    redirect: false,
    dbTheme: "",
    reduceTheme:-1,
  };


  loadSignInPage = () => {    
    this.setRedirect()
    
  }

  setRedirect = () => {    
    this.setState({
      redirect: true,      
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      this.props.updateDBtheme(mID)     
      return <Redirect to='/Signin' />
    }
  }

  
  choosenTheme = (id) => {
 
    let colorr = "";
    let testalignn = "";    
    let fontfamilyy = "";
    let divfontsizee = "";
    let pfontsizee = "";
    switch(id){
      case "theme0":
        colorr = "White";
        testalignn = "center";
        divfontsizee = "38px";
        pfontsizee = "16px";
        fontfamilyy = "Calibri";
        break;        
      case "theme1":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Rockwell";
          break;      
      case "theme2":
          colorr = "#b87b16";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Broadway";
          break;      
      case "theme3":
          colorr = "#d86531";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Cooper";
          break;
      case "theme4":
          colorr = "deepskyblue";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Arial Black";
          break;
      case "theme5":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bodoni MT Black";
          break;     
      case "theme6":
          colorr = "Greenyellow";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Stencil";
          break;        
        case "theme7":
          colorr = "#a3ce01";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bernard MT";
          break;      
        case "theme8":
          colorr = "#eb9ba4";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Magneto";
          break;
        case "theme9":
          colorr = "Gold";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Rockwell";
          break;      
        case "theme10":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px"
          pfontsizee = "16px";
          fontfamilyy = "Vivaldi";
          break;
        case "theme11":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Cambria";
          break;      
        case "theme12":
          colorr = "Brown";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Broadway";
          break;      
        case "theme13":
          colorr = "Black";
          testalignn = "center";
          divfontsizee = "24px";
          pfontsizee = "16px";
          fontfamilyy = "Wide Latin";
          break;
        case "theme14":
          colorr = "Black";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Script";
          break;
        case "theme15":
          colorr = "rgb(232,18,36)";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bodoni MT Black"; 
          break;
        case "theme16":
          colorr = "Gray";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bernard MT";
          break;
      default:
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Calibri";         
    }
    
    divStyle = {
      color: colorr,
      textAlign: testalignn,
      fontSize: divfontsizee,
      fontFamily: fontfamilyy
    };
    pStyle = {
      color: colorr,
      fontsize: pfontsizee,
      fontFamily: fontfamilyy,        
    };

    mID = this.props.currentUser        
    this.props.setTheme(id)    
  }
    colorr = "White";
    testalignn = "center";
    divfontsizee = "38px";
    fontfamilyy = "Calibri";
    componentWillMount() {
      this.loadInLineStyle();
    }

    loadInLineStyle = () => {
    let colorr = "White";
    let testalignn = "center";
    let divfontsizee = "38px";
    let fontfamilyy = "Calibri";
      divStyle = {
        color: colorr,
        textAlign: testalignn,
        fontSize: divfontsizee,
        fontFamily: fontfamilyy
      };
      
    }

  render() {
    
    return (
      <div>
        {this.renderRedirect()}
        <div style={divStyle}>Personalize Your Account</div>
        <Container style={{ marginTop: 60 }}>
            <div style={divStyle}><b>Choose a Theme</b></div>
            <div id="memberinfo" style={pStyle}></div>
            <div id="message"></div>
            <Row>
              <Col size="md-3">
                <div className="theme"  type="submit" id="theme1" onClick={() => this.choosenTheme(this.state.userThemes[1])}>
                  <div className="img-container">                   
                    <img alt="Theme 1" width="120" height="120" title="Mountain Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg' />                   
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme2" onClick={() => this.choosenTheme(this.state.userThemes[2])}>
                  <div className="img-container">
                    <img alt="Theme 2" width="120" height="120" title="Rocky Landscape Daylight" src='https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme3" onClick={() => this.choosenTheme(this.state.userThemes[3])}>
                  <div className="img-container">
                    <img alt="Theme 3" width="120" height="120" title="Desert Landscape Tree" src='https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg' />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme4" onClick={() => this.choosenTheme(this.state.userThemes[4])}>
                  <div className="img-container">
                    <img alt="Theme 4" width="120" height="120" title="Landscape Field Skyfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg' />           
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme5" onClick={() => this.choosenTheme(this.state.userThemes[5])}>
                  <div className="img-container">
                    <img alt="Theme 5" width="120" height="120" title="Iceland Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme6" onClick={() => this.choosenTheme(this.state.userThemes[6])}>
                  <div className="img-container">
                    <img alt="Theme 6" width="120" height="120" title="Rocky Waterfall" src='https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme7" onClick={() => this.choosenTheme(this.state.userThemes[7])}>
                  <div className="img-container">
                    <img alt="Theme 7" width="120" height="120" title="Landscape Day Cloud" src='https://lmtrain.github.io/lm-images/assets/images/ls_field2.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme8" onClick={() => this.choosenTheme(this.state.userThemes[8])}>
                  <div className="img-container">
                    <img alt="Theme 8" width="120" height="120" title="Sunset at Hale Azarya" src='https://lmtrain.github.io/lm-images/assets/images/ls_hale-azarya.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme9" onClick={() => this.choosenTheme(this.state.userThemes[9])}>
                  <div className="img-container">
                    <img alt="Theme 9" width="120" height="120" title="Black Gold Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_blackgold.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme10" onClick={() => this.choosenTheme(this.state.userThemes[10])}>
                  <div className="img-container">
                    <img alt="Theme 10" width="120" height="120" title="Black White Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_blackwhite.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme11" onClick={() => this.choosenTheme(this.state.userThemes[11])}>
                  <div className="img-container">
                    <img alt="Theme 11" width="120" height="120" title="Blue Cledonia Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_bluecledonia.png' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme12" onClick={() => this.choosenTheme(this.state.userThemes[12])}>
                  <div className="img-container">
                    <img alt="Theme 12" width="120" height="120" title="Brown Circle Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_browncircle.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme13" onClick={() => this.choosenTheme(this.state.userThemes[13])}>
                  <div className="img-container">
                    <img alt="Theme 13" width="120" height="120" title="Gold Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_gold.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" title="White" id="theme14" onClick={() => this.choosenTheme(this.state.userThemes[14])}>
                  <div className="img-container">
                    <img alt="" width="120" height="120" src='' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme15" onClick={() => this.choosenTheme(this.state.userThemes[15])}>
                  <div className="img-container">
                    <img alt="Theme 15" width="120" height="120" title="Pink Curly Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_pinkmarble.jpg' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme16" onClick={() => this.choosenTheme(this.state.userThemes[16])}>
                  <div className="img-container">
                    <img alt="Theme 16" width="120" height="120" title="Whit Gray Marble" src='https://lmtrain.github.io/lm-images/assets/images/marble_whitegray.jpg' />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <span>.</span>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <div className="create-acc-btn"><button title="Sign in" type="submit" onClick={() => this.loadSignInPage()} className="btn btn-primary float-left">Sign in</button></div>
                {/* <div className="create-acc-btn"><button type="submit" onClick={() => this.addPicture()} className="btn btn-primary float-left">Add Your Picture</button> </div> */}
                <div className="create-acc-btn"><button title="Rock Light Waterfall" type="submit" id="theme0" onClick={() => this.choosenTheme(this.state.userThemes[0])} className="btn btn-primary float-left">Default Theme</button> </div>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default PersonalizePage;





