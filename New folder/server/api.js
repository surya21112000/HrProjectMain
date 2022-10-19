const express=require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Post = require('./model/post')
const Admins = require('./model/admins')
const empDetails=require('./model/employeeDetails')
const leaved = require('./model/leave')
const bcrypt = require('bcrypt')
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
        name:req.body.name,
        status:req.body.status,
        remarks:req.body.remarks

    })
    leave.save(function(err, rec) {
      if(err) {
        return res.status(404).send(err)
      }
      res.send(rec);
    })})
    router.put('/leave/:id/:updatedStatus', function(req, res) {
      leaved.findById(req.params.id, function(err, rec) {

        if(err) {
          return res.status(400).send("cannot find the post with given id")
        }
        if(!rec) {
          return res.status(404).send("Post not found")
        }
        console.log(rec.status)
       rec.status=req.params.updatedStatus
        rec.save();
        res.send(rec);
      })
    })
    router.put('/leaves/:id/:updatedStatus', function(req, res) {
      leaved.findById(req.params.id, function(err, rec) {

        if(err) {
          return res.status(400).send("cannot find the post with given id")
        }
        if(!rec) {
          return res.status(404).send("Post not found")
        }
        console.log(rec.status)
       rec.remarks=req.params.updatedStatus
        rec.save();
        res.send(rec);
      })
    })


module.exports= router
