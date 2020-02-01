import React, { Component } from "react";
import SearchResults from "../components/SearchResults";


class Search extends Component {
  state = {
    search: this.props.search,
    favMessage:"",
    id: "",      
    items: [],    
    title: "",
    authors: "",
    link: "",
    thumbnail: "",
    description: "",
    publisheddate: "",           
    error: "",
    showItem: [],
    showItemState: true
  };
  

  render() {
        

    return (
      <div>
        
        {this.props.items && <SearchResults Items={this.props.items} cart={this.props.cart} saveForLater={this.props.saveForLater} detailItem={this.props.detailItem} addItemToCart={this.addItemToCart} addItemToSaveForLater={this.addItemToSaveForLater} additemDetails={this.additemDetails} />}
         
  
      </div>
      
    );
  }
}

export default Search;
