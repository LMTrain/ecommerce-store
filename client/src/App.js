import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import PersonalizePage from "./pages/PersonalizePage";
import TodaysDeal from "./components/TodaysDeal";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart"
// import Themes from "./AnimationPersonalize"
// import Search from "./pages/Search";
import UserPage from "./pages/UserPage";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import UserNavbar from "./components/UserNavbar";
import UserAccSettings from "./components/UserAccSettings"
import Wrapper from "./components/Wrapper";
import dataSet from "./db.json"
import deals from "./db.json"



 require('dotenv').config();
var itemsArray = []
var itemToCart = []
var itemToSaveForLater = []
var itemDetailArray = []
var emptyArray = []
var userArray = []
var memberInfo = ""
var shuffleData = ""
var ShuffledDatas = []
var itemsTotal = 0
var savedItemsTotal = 0

class App extends React.Component {
  state = {
    user:[],
    userArray:[],
    cart: [],
    detailItem:[],
    saveForLater: [],
    memberId: "",
    membername: "",
    userName: "",
    currentUser: null,
    theme: -1,
    search:"",    
    Items:[],
    totalItems: 0,
    totalSavedItems: 0,
    deals,
   
  }
  todaysDeals = () => {
    this.shuffle()
  }

  removeCar = (id) => {
    let carsArray = [...this.state.deals]
    let deals = carsArray.filter(deal => {
      return deal.id !== id;
    });
    this.setState({ deals })
  }

  shuffle = () => {
    let dealsArray = [...this.state.deals];
    let dealsShuffled = [];    
    for (var i = 0;  i < this.state.deals.length; i++) {        
          shuffleData = dealsArray.splice(Math.floor(Math.random()*dealsArray.length));        
          dealsShuffled = [...dealsShuffled, ...shuffleData];
        }   
        ShuffledDatas.push(this.state.deals);
    // Set this.state.deals equal to the new deals array
    this.setState({ deals: dealsShuffled });  
  };

  // ADD ITEM TO CART
  addItemToCart = (id) => {
    itemsArray = [...this.state.Items]
    for (var i = 0;  i < itemsArray.length; i++) {
          
      if (id !== itemsArray[i].parentItemId) {
        }else{
          var app = this
          itemToCart.push([itemsArray[i]])
          app.setState({cart:itemToCart})
          itemsTotal = itemsTotal + 1
          app.setState({totalItems: itemsTotal})
          memberInfo = String(this.state.currentUser)
          this.updateOrdersDB(userArray[0]._id)
          this.displayCart(userArray[0]._id)
        }          
      }    
    }
    displayCart = (id) => {
      var app = this
      app.setState({cart:itemToCart})
      this.updateCartDB(userArray[0]._id)
    }

    

  //ITEM SAVED FOR LATER
  addItemToSaveForLater = (sFlId) => {
    itemsArray = [...this.state.Items]
    for (var i = 0;  i < itemsArray.length; i++) {
      if (sFlId !== itemsArray[i].parentItemId) {
        }else{          
          itemToSaveForLater.push([itemsArray[i]])
          savedItemsTotal = savedItemsTotal + 1
          this.setState({totalSavedItems: savedItemsTotal}) 
          this.setState({saveForLater:itemToSaveForLater})
          memberInfo = String(this.state.currentUser)
          this.displaySaveForLater(userArray[0]._id)
        }          
      }    
    }
  displaySaveForLater = (id) => {
    var app = this
      app.setState({saveForLater:itemToSaveForLater})
      this.updateSaveItemDB(userArray[0]._id)
    }
  
  // ITEM DETAIL
  additemDetails = (id) => {     
    itemsArray = [...this.state.Items]
    for (var i = 0;  i < itemsArray.length; i++) {
      if (id !== itemsArray[i].parentItemId) {
            console.log("CONTINUE LOOKING FOR ITEM DETAIL")
        }else{
          var app = this
          itemDetailArray.push([itemsArray[i]])
          app.setState({detailItem:itemDetailArray})
          this.displayItemDetails(userArray[0]._id)          
          
        }          
      }    
    }
  displayItemDetails= (id) => {
    this.setState({detailItem:itemDetailArray})
    
  }

    // SAVING ITEM TO DB CART
    updateCartDB = (id) => {      
      let memberId = String(this.state.currentUser)
      let itemDB = String(itemToCart[0][0].name)
      let qtyDB = 1
      let unitPriceDB = Number(itemToCart[0][0].salePrice)
      let linkDB = String(itemToCart[0][0].productUrl)
      let descriptionDB = String(itemToCart[0][0].shortDescription)
      let thumbnailDB = String(itemToCart[0][0].largeImage)
      API.updateCart({
        memberId: memberId,        
        item: itemDB,
        qty:	qtyDB,
        price: unitPriceDB,
        link: linkDB,
        description: descriptionDB,
        thumbnail: thumbnailDB,
      })
        .then(res => {                  
          if(res.data.error ){
            console.log(res.data.error)
            document.getElementById("message").textContent = res.data.error;
          }else{
            // console.log(res.data.error)
            document.getElementById("message").textContent = " ";
            
          }
        })
        
        .catch(err => console.log(err)); 
    }

  // SAVE ORDERS TO DB
    updateOrdersDB = (id) => {     
      let memberId = String(this.state.currentUser)
      let itemDB = String(itemToCart[0][0].name)
      let qtyDB = 1
      let unitPriceDB = Number(itemToCart[0][0].salePrice)
      let linkDB = String(itemToCart[0][0].productUrl)
      let descriptionDB = String(itemToCart[0][0].shortDescription)
      let thumbnailDB = String(itemToCart[0][0].largeImage)      
      API.updateOrders({
        memberId: memberId,        
        item: itemDB,
        qty:	qtyDB,
        price: unitPriceDB,
        link: linkDB,
        description: descriptionDB,
        thumbnail: thumbnailDB,
      })
        .then(res => {                  
          if(res.data.error ){
            console.log(res.data.error)
            document.getElementById("message").textContent = res.data.error;
          }else{
            // console.log(res.data.error)
            document.getElementById("message").textContent = " ";
            
          }
        })
        
        .catch(err => console.log(err)); 
    }

  // SAVE ITEM FOR LATER DB

  updateSaveItemDB = (id) => {
      let memberId = String(this.state.currentUser)
      let itemDB = String(itemToSaveForLater[0][0].name)     
      let unitPriceDB = Number(itemToSaveForLater[0][0].salePrice)
      let linkDB = String(itemToSaveForLater[0][0].productUrl)
      let descriptionDB = String(itemToSaveForLater[0][0].shortDescription)
      let thumbnailDB = String(itemToSaveForLater[0][0].largeImage)
   
      API.updateSavedItems({
        memberId: memberId,        
        item: itemDB,        
        price: unitPriceDB,
        link: linkDB,
        description: descriptionDB,
        thumbnail: thumbnailDB,
      })
        .then(res => {                  
          if(res.data.error ){
            console.log(res.data.error)
            document.getElementById("message").textContent = res.data.error;
          }else{
            // console.log(res.data.error)
            document.getElementById("message").textContent = " ";
            
          }
        })
        
        .catch(err => console.log(err)); 
    }

  //UPDATE THEME IN DB
  updateDBtheme = (mID) => {
    var colorrr = ""
    var testalignnn = ""
    var divfontsizeee = ""
    var pfontsizeee = ""
    var fontfamilyyy = ""
 
    switch(this.state.theme){
      case "theme0":
        colorrr = "White";
        testalignnn = "center";
        divfontsizeee = "38px";
        pfontsizeee = "16px";
        fontfamilyyy = "Calibri";
        break;        
      case "theme1":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Rockwell";
          break;      
      case "theme2":
          colorrr = "#b87b16";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Broadway";
          break;      
      case "theme3":
          colorrr = "#d86531";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Cooper";
          break;
      case "theme4":
          colorrr = "deepskyblue";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Arial Black";
          break;
      case "theme5":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bodoni MT Black";
          break;     
      case "theme6":
          colorrr = "Greenyellow";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Stencil";
          break;        
        case "theme7":
          colorrr = "#a3ce01";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bernard MT";
          break;      
        case "theme8":
          colorrr = "#eb9ba4";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Magneto";
          break;
        case "theme9":
          colorrr = "Gold";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Rockwell";
          break;      
        case "theme10":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px"
          pfontsizeee = "16px";
          fontfamilyyy = "Vivaldi";
          break;
        case "theme11":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Cambria";
          break;      
        case "theme12":
          colorrr = "Brown";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Broadway";
          break;      
        case "theme13":
          colorrr = "Black";
          testalignnn = "center";
          divfontsizeee = "24px";
          pfontsizeee = "16px";
          fontfamilyyy = "Wide Latin";
          break;
        case "theme14":
          colorrr = "Black";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Script";
          break;
        case "theme15":
          colorrr = "rgb(232,18,36)";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bodoni MT Black"; 
          break;
        case "theme16":
          colorrr = "Gray";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bernard MT";
          break;
      default:
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Calibri";         
    }
   
    memberInfo = String(this.state.currentUser)
    let memberId = String(this.state.currentUser)
    let memberName = String(this.state.memberName)
    let userName = String(mID)
    let formTheme = String(this.state.theme)
    let formImage = ""
    let formcolorr = String(colorrr)
    let formtestalignn = String(testalignnn)
    let formdivfontsizee =String(divfontsizeee)
    let formpfontsizee = String(pfontsizeee)
    let formfontfamilyy = String(fontfamilyyy)

    API.updateUser({
      memberId: memberId,
      memberName:memberName,
      userName: userName,     
      userTheme: formTheme,
      userImage: formImage,
      colorDb: formcolorr,
      textalignDb: formtestalignn,      
      divfontsizeDb: formdivfontsizee,
      pfontsizeDb: formpfontsizee,
      fontfamilyDb: formfontfamilyy,               
    })
      .then(res => {
        
        if(res.data.error ){
          console.log(res.data.error)
          document.getElementById("message").textContent = res.data.error;
        }else{
        
          document.getElementById("message").textContent = " ";
          
        }
      })
      
      .catch(err => console.log(err));  

  }


  saveMemberID = (mID, mName) => {
    memberInfo = mID
    
    this.setState({
      currentUser: mID,
      memberId: mID,
      memberName: mName,
      userName: mID,
    })
    memberInfo = this.state.currentUser
    this.getMemberInfo()
  }

  getMemberInfo = () => {
    switch(this.state.currentUser !== null){
      case true:
        this.getAPIuserData(memberInfo);
       
        break;
      case false:
      console.log("WHAT IS INSIDE", this.state.currentUser)
   
      break;      
      default:
          console.log("FROM DEFAULT MID====>", memberInfo)
                   
    }    
  } 

  getAPIuserData = (id) => {
    const app = this;
    id = this.state.userName
    API.getUser({      
      userName: memberInfo               
    })
    .then(function(res){
      return new Promise(function(resolve, reject){
        app.setState({ user: res.data })
        resolve(true);
      })
    }).then(function(){
      userArray = [...app.state.user]
    })
    .catch(err => console.log(err));
  }


  setSearch = (e) =>{
    this.setState({search:e.target.value});    
  }
  searchForItems = (e) => {
    e.preventDefault();
    var app = this;
    var results = dataSet.filter(item => {
      return item.name.toLowerCase().indexOf(app.state.search.toLowerCase()) !== -1;
    })
    app.setState({ Items: results});
  } 
  
  settingSubmit = (id) => {
    this.updateDBtheme(id);
  }

  deleteItem = (id) => {
    let cartArray = [...this.state.cart]
    let cart = cartArray.filter(cart => {
      return cart.id !== id;
    });
    var app = this
    app.setState({ cart })
    itemsTotal = itemsTotal - 1
    app.setState({totalItems: itemsTotal})
    

  }


  checkOut = () => {
    this.setState ({cart: [], totalItems: 0})
  }

  logOut = () => {
    // this.state.cart = [...emptyArray]
    // this.props.Items = [...emptyArray]
    // this.props.saveForLater = [...emptyArray]
    this.setState ({user: emptyArray, userArray: emptyArray, cart: emptyArray, detailItem: emptyArray, saveForLater: emptyArray, memberId: "", membername: "", userName: "", currentUser: null, theme: -1, search:"", Items:emptyArray, totalItems: 0, totalSavedItems: 0,})
  }

  passwordReset = () => {
    console.log()
  }

  userSettings =() => {
    console.log()
  }

  setTheme = (i) => {
    this.setState({
      theme: i
    })
  }

  getTheme = () => {
    
    switch(this.state.theme){
      case "theme0":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg"
      case "theme1":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg"
      
      case "theme2":
        
        return "https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg"
      
      case "theme3":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg"
      
      case "theme4":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg"
     
      case "theme5":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg"
     
      case "theme6":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg"
        case "theme7":
          return "https://lmtrain.github.io/lm-images/assets/images/ls_field2.jpg"
        case "theme8":
            return "https://lmtrain.github.io/lm-images/assets/images/ls_hale-azarya.jpg"
        case "theme9":
          return "https://lmtrain.github.io/lm-images/assets/images/marble_blackgold.jpg"
          case "theme10":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_blackwhite.jpg"
          case "theme11":
              return "https://lmtrain.github.io/lm-images/assets/images/marble_bluecledonia.png"
          case "theme12":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_browncircle.jpg"
          case "theme13":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_gold.jpg"
          case "theme14":
              return ""
          case "theme15":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_pinkmarble.jpg"
          case "theme16":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_whitegray.jpg"
      default :
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg"
    }
  }
 
  render(){
    
    return (
      <Router>
        <div>
          <UserNavbar search={this.state.search} submit={this.searchForItems} setSearch={this.setSearch}/>
          <Navbar settingsSubmit={this.userSettings}/>
          <Wrapper getTheme={this.getTheme}>
            <Route exact path="/" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/home" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/Signin" render = { () => <Signin saveMemberID={this.saveMemberID} getTheme={this.getTheme}/>}/>
            <Route exact path="/Sign out" render = { () => <Home getTheme={this.getTheme}/>}/>
            <Route exact path="/Getstarted" render = { () => <GetStarted saveMemberID={this.saveMemberID} getTheme={this.getTheme}/>}/>
            <Route exact path="/PersonalizePage" render = { () => <PersonalizePage setTheme={this.setTheme} theme={this.state.theme} currentUser={this.state.currentUser} updateDBtheme={this.updateDBtheme} getMemberInfo={this.state.getMemberInfo} id="memberinfo"/>}/>
            <Route exact path="/UserPage" render = { () => <UserPage setTheme={this.setTheme} theme={this.state.theme} logOut={this.logOut} saveMemberID={this.saveMemberID} currentUser={this.state.currentUser} getTheme={this.getTheme} cart={this.state.cart} totalItems={this.state.totalItems} totalSavedItems={this.state.totalSavedItems} detailItem={this.state.detailItem} saveForLater={this.state.saveForLater} Items={this.state.Items} addItemToCart={this.addItemToCart} addItemToSaveForLater={this.addItemToSaveForLater} additemDetails={this.additemDetails}/>}/>
            {/* <Route exact path="/AnimationPersonalize" render = { () => <Themes />}/> */}
            {/* {this.state.search.length && <Route render = { () => <Search items={this.state.Items} search={this.state.search}/>} />} */}
            <Route exact path="/TodaysDeal" render = { () => <TodaysDeal getTheme={this.getTheme} deals={this.state.deals} handleRemoveClick={() => this.removeDeal(this.state.itemId)} handleShuffleClick={this.shuffle} id={this.state.itemId} key={this.state.itemId}/>}/>
            <Route exact path="/Settings" render = { () => <UserAccSettings setTheme={this.setTheme} user={this.state.user}theme={this.state.theme} currentUser={this.state.currentUser} updateDBtheme={this.updateDBtheme} getMemberInfo={this.state.getMemberInfo} settingSubmit={this.settingSubmit} passwordReset={this.passwordReset}/>}/>
            <Route exact path="/ItemDetails" render = { () => <ItemDetails getTheme={this.getTheme} detailItem={this.state.detailItem} cart={this.state.cart} saveForLater={this.state.saveForLater} Items={this.state.Items} theme={this.state.theme} currentUser={this.state.currentUser} />}/>
            <Route exact path="/Cart" render = { () => <Cart setTheme={this.setTheme} user={this.state.user}theme={this.state.theme} currentUser={this.state.currentUser}  getMemberInfo={this.state.getMemberInfo} cart={this.state.cart} deleteItem={this.state.deleteItem} checkOut={this.checkOut} Items={this.state.Items}/>}/>

          </Wrapper>
         
          
        </div>
      </Router>
    );
  }
}

export default App; 
