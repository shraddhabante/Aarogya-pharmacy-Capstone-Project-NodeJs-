let mongoose=require("mongoose");
mongoose.pluralize(null);

let categorySchema=mongoose.Schema({
    _id:Number,
    dname:{
        type:String,
        required:[true,"Disease category name required"],
        unique:true
    },
    dImage:{  
        type:String,
        required:false
    }
})

let categoryModel=mongoose.model("Category",categorySchema);
module.exports=categoryModel;