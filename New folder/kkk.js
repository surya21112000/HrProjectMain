const express= require('express')
const app = express();


 app.get('/',function(req,res){
    res.send("Welcome Surya")

 })



app.listen(8090,()=>{
    console.log("Server started at 5000");
})