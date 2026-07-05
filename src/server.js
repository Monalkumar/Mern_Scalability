const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/user.routes.js")


app.use("/user",router,(req,res)=>{
    res.send("successfully working")
    console.log("hello world")
})

connectDB()
.then(()=>{
    console.log("database connected successfully")
    app.listen(process.env.PORT,()=>{
    console.log("server is running")
    console.log(process.env.PORT)
})
})
.catch((error)=>{
    console.log("Failed to connect database"+ error.message)
})


