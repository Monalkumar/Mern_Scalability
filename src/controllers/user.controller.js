function registerUser(req,res){
    const{name,email,password} = req.body
    console.log(req.body);
   if(name && email && password){
    res.status(201).send("user added successfully")
   }
   else{
    res.status(400).send("All required fields are mandatory")
   }
}

module.exports = registerUser;