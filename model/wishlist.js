const mongoose = require("mongoose")

const wishlist = mongoose.Schema({

    productName:{
        type:String,
        required:true
    },
    productImg:{
        type:binary,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    }
    

})

module.exports = mongoose.model("Wishilist",wishlist);

