import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";



function ItemDetails(props) {

  return (
    
      
    props.detailItem.map(result => (        
      <div className="detail-box">
        <div className="img-container" key={result[0].id} id={result[0].id}>

        <img alt={result[0].name} width="120" height="180" className="img-fluid" src={result[0].largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result[0].largeImage} />
        <span><button key={result.itemId} id={result[0].itemId}type="submit" onClick={() => props.addItemToCart(result.itemId)} className="btn btn-success">Add to cart</button></span><span>  </span>
        <span><button key={result.itemId}id={result[0].itemId} type="submit" onClick={() => props.addItemToSaveForLater(result.itemId)} className="btn btn-success">Save For Later</button></span><span>  </span>       
        
        <p><b>Item Name             :</b> {result[0].name}</p>
                <span><b>Price         :</b> ${result[0].salePrice} | |</span>
                <span><b>Rating :</b> {result[0].customerRating}</span> 
        <p><b>Description :</b> {result[0].shortDescription}</p>
        </div>
      </div>        
  )));   
                  
     
  
}


export default ItemDetails;
