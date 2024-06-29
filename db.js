const mongoose = require("mongoose")

const mongourl="mongodb+srv://darpansarda7:Darpan@cluster0.vblyhum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectdb=()=>{
    console.log("db success")
    return mongoose.connect(mongourl);
}

module.exports={connectdb}