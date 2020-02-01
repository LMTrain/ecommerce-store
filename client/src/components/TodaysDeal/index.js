import React from "react";
import "./deals.css"

function TodaysDeal(props) {
   

    return (
      
        props.deals.map(deal => (
      
      <div className="deals-box">
        
        <div className="img-container" id={deal.itemId} key={deal.itemId} onClick={() => props.handleShuffleClick()}>
          <img alt={deal.name} width="70" height="90" src={deal.largeImage} />
          <p><b>Item Name :</b> {deal.name}</p>
          <p><b>Price :</b>${deal.salePrice}</p>
          <b>Rating :</b> {deal.customerRating}

        </div>
        
        <span onClick={() => props.handleRemoveClick(deal.itemId)} className="remove">
          
        </span>
      </div>
    )));
  }
  

  export default TodaysDeal;