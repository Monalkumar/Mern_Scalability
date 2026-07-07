const express = require("express");
const router = express.Router();

router.get("/profile",(req,res)=>{
    res.send("successuflly api crreated for this app")
})

module.exports = router;