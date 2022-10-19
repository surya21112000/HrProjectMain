const express=require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Post = require('./model/post')
const Admins = require('./model/admins')
const empDetails=require('./model/employeeDetails')
const leaved = require('./model/leave')
// const admins = require('./model/admins')
router.get("/posts",(req,res)=>{

    Post.find().then(rec=>{
        if(rec){
            res.send(rec)
        }
        else{
            res.send("Error Fetching data")
        }
    })

})
router.get("/leave",(req,res)=>{

  leaved.find().then(rec=>{
      if(rec){
          res.send(rec)
      }
      else{
          res.send("Error Fetching data")
      }
  })

})
router.get("/employeeDetails",(req,res)=>{

  empDetails.find().then(rec=>{
      if(rec){
          res.send(rec)
      }
      else{
          res.send("Error Fetching data")
      }
  })

})
router.get("/admins",(req,res)=>{

  Admins.find().then(rec=>{
      if(rec){
          res.send(rec)
      }
      else{
          res.send("Error Fetching data")
      }
  })

})
router.post("/posts", function(req, res) {
    console.log(req.body);
    const post = new Post({
      _id: mongoose.Types.ObjectId(),
        email:req.body.email,
        password:req.body.password,

    })

   
    post.save(function(err, rec) {
      if(err) {
        return res.status(400).send("error while creating a post")
      }
      res.send(rec);
    })
  });
  router.post("/admins", function(req, res) {
 
    console.log(req.body);
    const post = new Admins({
      _id: mongoose.Types.ObjectId(),
        email:req.body.email,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname

    })

   
    post.save(function(err, rec) {
      if(err) {
        return res.status(404).send("error while creating a post")
      }
      res.send(rec);
    })
  });
  router.post("/employeeDetails", function(req, res) {
   
    console.log(req.body);
    const post = new empDetails({
      _id: mongoose.Types.ObjectId(),
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        empID:req.body.empID,
        salary:req.body.salary,
        dob:req.body.dob,
        qualification:req.body.qualification,
        doj:req.body.doj,
        designation:req.body.designation,
        address:req.body.address,

    })

   
    post.save(function(err, rec) {
      if(err) {
        return res.status(404).send(err)
      }
      res.send(rec);
    })
  });
  router.post("/leave", function(req, res) {
   
    console.log(req.body);
    const leave = new leaved({
      _id: mongoose.Types.ObjectId(),
        firstdate:req.body.firstdate,
        seconddate:req.body.seconddate,
        leavetype:req.body.leavetype,
        totaldays:req.body.totaldays,
        email:req.body.email,
        reason:req.body.reason,
        

    })
    leave.save(function(err, rec) {
      if(err) {
        return res.status(404).send(err)
      }
      res.send(rec);
    })})

module.exports= router