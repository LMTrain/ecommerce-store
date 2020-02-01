import React from "react";
import "./style.css";
// import Container from "../Container/";
import { Link } from "react-router-dom";



function Cart(props) {
 
  return (
      props.cart.map(result => (                            
        <div className="cart-box">
          <div className="img-container" key={result[0].id} id={result[0].id}>
            <img alt={result[0].id} width="100" height="120" className="img-fluid" src={result[0].largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/  images/books5.jpg' : result[0].largeImage} /><span></span>
              <p><b>Item Name    :</b> {result[0].name}</p>
              <span><b>Price :</b> ${result[0].salePrice}</span>
                <span><button key={result[0].id} type="submit" className="btn btn-success">Delete</button></span>
                <Link to="/UserPage"><button id={result.userName} type="submit" className="btn btn-success" onClick={() => props.checkOut()}>Checkout</button></Link>
                <Link to="/UserPage"><button id={result.userName} type="submit" className="btn btn-success">Close</button></Link>
          </div>
        </div>
  )));           
  
}


export default Cart;
