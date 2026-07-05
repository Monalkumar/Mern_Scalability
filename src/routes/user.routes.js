const express = require("express");
const router = express.Router();

router.get("/user",(req,res)=>{
    res.send("successuflly api crreated for this app")
})

module.exports = router