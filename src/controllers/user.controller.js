const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
try {
    const { name, email, password } = req.body;
    console.log(req.body);

    if (name && email && password) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(409).send("User already exists");
        return;
      } else {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(password, salt);
        console.log(hashPassword);
        const user = await User.create({ name, email, password: hashPassword });
        res.status(201).send("user created successfully");
      }
    } else {
      res.status(400).send("All required fields are mandatory");
    }
  } catch (error) {
    res.status(500).send(`https ${error.status}`);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(401).send("invalid eamil id");
      } else {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          
          var token = jwt.sign({ id: user._id }, "Wlcome@54321@!&");
          console.log("Token:", token)
          res.cookie("token", token)
          res.status(200).json({
            message:"login successful"
          });
            
        } else {
          res.status(401).json({message:"please add valid password"});
        }
      }
    }
    else{
    res.status(401).send('all fields are mandatory')
  }
  }
  
  catch (error) {
    res.status(500).send(`Error:${error}`);
    
  }
  
};

module.exports = {registerUser,loginUser}
