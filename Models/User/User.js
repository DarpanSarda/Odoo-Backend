const mongoose = require('mongoose');

const UserSchema = ({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:'customer'
    },
    mobile:{
        type:String,
    },
    address:[
        {
            street:{
                type:String,
            },
            city:{
                type:String,
            },
            state:{
                type:String,
            }
        }
    ],
    // paymentInfo:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Payment_info"
    // }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const UserModel = mongoose.model("Users",UserSchema);
module.exports = UserModel;