const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({

    deliveryDetails: {
      type:String,
      required:true
      },
      user: {
        type: mongoose.Types.ObjectId,
      },
      uniqueId: {
        type: Number,
      },
      userId: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
      products: [
        {
          productId: {
            type: String,
            required: true,
            ref: "product",
          },
          count: {
            type: Number,
            default: 1,
          },
          productPrice: {
            type: Number,
            required: true,
          },
          totalPrice: {
            type: Number,
            required: true,
          },
          status:{
            type:String,
            default:"placed"
          },image:{
            type:String,
            required:true
          },
          proName:{
            type:String,
            required:true
          },
          category:{
            type:String,
            required:true
          }
        },
      ],
      
      deliveryDate: {
        type: Date,
      },
      cancelReason: {
        type: String
      },
      returnReason: {
        type: String
      },
      totalAmount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
      },
      paymentMethod: {
        type: String,
      },
      orderId: {
        type: String,
      },
      paymentId: {
        type: String
      },
      discount: {
        type: String
      }
    });
  
module.exports = mongoose.model("Orders",orderSchema);

