import React from "react";
import Homeimage from "../components/Homeimage";
import Container from "../components/Container";
import "./style.css";


function Home(props) {
  return (
    <Container style={{ marginTop: -25 }}>
      <div>
        <Homeimage backgroundImage={props.getTheme()}>

          
        </Homeimage>        
      </div>
      <div>
        
      </div>
    </Container>
  );
}

export default Home;
