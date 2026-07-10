const User = require("../models/user.model.js") 

const  registerUser = async(req,res)=>{
    const{name,email,password} = req.body
    console.log(req.body);
    
   if(name && email && password){
    
    const user = await User.findOne({email:req.body.email})
    console.log(user)
    res.status(201).send("user added successfully")
   }
   else{
    res.status(400).send("All required fields are mandatory")
   }
}

module.exports = registerUser;