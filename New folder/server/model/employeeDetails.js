const mongoose= require('mongoose')
const employeeDetails= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   firstname:{
        type:String,
        required:true
   },
    secondname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    empID:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    doj:{
        type:Date,
        required:true
    },
    
    designation:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
   

    
    
    }
 
)
module.exports = mongoose.model("empDetails",employeeDetails)