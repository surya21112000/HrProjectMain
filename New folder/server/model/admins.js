const mongoose= require('mongoose')
const admins= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   email:{
        type:String,
        required:true
   },
    password:{
        type:String,
        required:true
    },
    firstname:{
 type:String,

    },
    lastname:{
        type:String,
      
           }
    
    }
 
)
module.exports = mongoose.model("Admins",admins)