const mongoose= require('mongoose')
const schema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   email:{
        type:String,
        required:true
   },
    password:{
        type:String,
        required:true
    }
    
    })

module.exports = mongoose.model("Post",schema)
