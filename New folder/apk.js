const express=require('express')
const mongoose = require('mongoose')
const path=require('path')
const app=express()
const bodyParser = require('body-parser');
const api = require('../New folder/server/api')


mongoose.connect('mongodb://127.0.0.1:27017/hr')
app.use(express.static(path.join(__dirname,'dist/dummy')))
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())
app.use('/api',api)
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/dist/index.html'));
})






app.listen(2000,()=>{
console.log("Server started at 9000");
}
)

