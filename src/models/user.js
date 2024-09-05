import mongoose from "mongoose";
 
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String
})

export const User=mongoose.models.users || mongoose.model('users',UserSchema)