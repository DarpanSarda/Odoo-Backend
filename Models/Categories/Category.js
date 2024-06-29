const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories',
    },
    level:{
        type:Number,
        required:true,
    }
});

const CategoryModel = mongoose.model('categories',CategorySchema);

module.exports=CategoryModel;