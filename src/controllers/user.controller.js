const User = require("../models/user.model.js");
const bcrypt = require("bcrypt")

const registerUser = async (req, res) => {
    try{
  const { name, email, password } = req.body;
  console.log(req.body);

  if (name && email && password) {
    const existingUser = await User.findOne({email});
    if (existingUser) {
      res.status(409).send("User already exists");
      return;
    } else {
    
      const user = await User.create({ name, email, password });
      res.status(201).send("user created successfully");
    } 
    

  }
  else{
    res.status(400).send("All required fields are mandatory")
  }
   }
    
    catch(error){
        res.status(500).send(`https ${error.status}`)
    }
  };

module.exports = registerUser;
