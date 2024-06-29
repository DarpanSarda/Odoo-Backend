const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },

    description:{
        type:String,
    },
    
    renter:{
        type: String,
    },

    brand:{
        type:String
    },
    color:{
        type:String
    },
    ImageUrl:{
        type:String,
    },
    Dimensions:{
        type: String,
    },
    // ratings:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'ratings',
    // }],
    // reviews:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'reviews',
    // }],
    // numRatings:{
    //     type:Number,
    //     default:0
    // },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const ProductModel = mongoose.model("products",ProductSchema);
module.exports = ProductModel;