var mongoose=require('mongoose')
var Schema=mongoose.Schema

var UserSchema=new Schema({
    name:String,
    age:String,
    hobbies:[String]
},{usetimestamps:true})

var UserModel=mongoose.model('User',UserSchema)
module.exports=UserModel;