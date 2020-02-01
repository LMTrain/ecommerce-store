const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.user
      .find({userName : req.params.userName})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  find: function(req, res) {
    db.user.find({"userName" : req.body.userName}, function(error, data){
      var hash = "";      
      if(error) throw error
      
      switch(data.length !== 0) {    
        case true:
          hash = data[0]._doc.password            
          switch(bcrypt.compareSync(req.body.password, hash)){
            case true:
                return res.json({data,
                    // "data": "You can't create data",
                    "error": "YOU ARE IN"
                    })
            case false:
                return res.json({error,
                    // "data": "You can't create data",
                    "error": "Invalid Password"
                    })    
          }          
        case false:
            return console.log('USER DOES NOT EXIST'), res.json({error,
            // "data": "You can't create data",
            "error": "User does not exist!"
            })
        default :
          return res.json({error, "error": "Username cannot be empty"})      
      }
        
    })    
  },

  create: function(req, res) {
  db.user.find({"userName" : req.body.userName}, function(error, data){
    if(error) throw error
      if(data.length !== 0){
        console.log('data', data)
      return res.json({
          "data": "You can't create data",
          "error": "Email already exist"
        })
      }else{
        console.log('there is no data', data)
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        db.user
          .create(req.body)
          .then(dbModel => {
            console.log("create user", dbModel)
            res.json(dbModel)})
    
          .catch(err => res.status(422).json(err));;
      }

    })
   
  },

  update: function(req, res) {
    db.user.find({"memberId" : req.body.memberId}, function(error, data){
      if(error) throw error
        if(data.length === 0){
          console.log('data', data)
        return res.json({
            "data": "You can't create data",
            "error": "User does not exist"
          })
        }else{
          db.user.collection
            .updateOne( { "memberId": req.body.memberId }, {$set: {userTheme: req.body.userTheme, colorDb: req.body.colorDb, textalignDb: req.body.textalignDb, divfontsizeDb: req.body.divfontsizeDb, pfontsizeDb: req.body.pfontsizeDb, fontfamilyDb: req.body.fontfamilyDb}})            
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            
        }
    })
  },
  
  remove: function(req, res) {
    db.user
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
