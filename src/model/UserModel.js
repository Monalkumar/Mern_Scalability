const { default: mongoose } = require("mongoose");
const { type } = require("node:os");

const userSchema = new mongoose.Schema(({
    name:{
        type:String
    }
}))

const User = mongoose.model("User", userSchema);
module.exports = user