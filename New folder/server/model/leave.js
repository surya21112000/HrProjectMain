const mongoose= require('mongoose')
const leave= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   email:{
        type:String,
        required:true
   },
    firstdate:{
        type:Date,
        required:true
    },
    seconddate:{
        type:Date,
        // required:true
    },
    totaldays:{
        type:Number,
        // required:true
    },
    reason:{
        type:String,
        required:true
    },
    leavetype:{
        type:String,
        required:true

    }
    
    }
 
)
module.exports = mongoose.model("Leave",leave)