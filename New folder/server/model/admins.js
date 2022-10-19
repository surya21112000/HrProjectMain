const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
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
admins.pre('save',async function(next){
  try{
    const salt = await bcrypt.genSalt(7)
    const hashedPassword= await bcrypt.hash(this.password,salt)
    this.password=hashedPassword
    next()
  }catch(error){
    next(error)
  }
})


module.exports = mongoose.model("Admins",admins)
