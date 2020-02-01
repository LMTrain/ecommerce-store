import axios from "axios";

// const BASEURL = process.env.REACT_APP_BASEURL
// const APIKEY = process.env.REACT_APP_APIKEY

export default {
  //Search for an item to buy
  // search: function(query) {
    // return axios.get(BASEURL + query + APIKEY);
    // return axios.get('/api/walmart/'+ query);
    // return axios.get(BASEURL + APIKEY + query + "&format=json");
  // },
  
    // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(currentAccount) {
    return axios.get(`/api/users/current/${currentAccount.userName}`);
  },
  // Update the user with the given id
  updateUser: function(id) {
    return axios.put("/api/users", id);
  },
  
  // CART DB UPDATE
  updateCart: function(cart) {
    const id = cart._id;
    return axios.put(`/api/cart/current/${id}`, cart);
    // server expects: /api/cart/current/someid
    // /api/cat/currentsomeid
  },
  
  // CART DB UPDATE
  updateOrders: function(orders) {
    const id = orders._id;
    return axios.put(`/api/orders/current/${id}`, orders);
    // server expects: /api/cart/current/someid
    // /api/cat/currentsomeid
  },

  // SAVED ITEMS DB UPDATE
  updateSavedItems: function(saved) {
    const id = saved._id;
    return axios.put(`/api/saveditems/current/${id}`, saved);
    // server expects: /api/cart/current/someid
    // /api/cat/currentsomeid
  },
  
  deleteUser: function(id) {    
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database.
  saveUser: function(newAccount) {
    return axios.post("/api/users", newAccount);
  },
  loginUser: function(userAccount) {
    return axios.post("/api/users/login", userAccount);
  }
};
