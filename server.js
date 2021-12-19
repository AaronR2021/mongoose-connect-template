var express = require('express');
var mongoose = require('mongoose');
var User=require('./models/user')

mongoose.connect('mongodb+srv://admin:jHq89Zh3gj7XfyDi@cluster0.rpnj4.mongodb.net/testmongoose?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err?err:"connected")
})

var app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{console.log('in get');})
app.post('/',(req,res)=>{console.log('outside',req.body);User.create(req.body,(err,createdUser)=>{console.log(err,createdUser);res.send(createdUser)})})

app.listen(3000,console.log('Port:3000'));