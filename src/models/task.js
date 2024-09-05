import mongoose from "mongoose";
 const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },
    AddedDate:{
        type:Date,
        default:Date()
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }
 })
 export const Task=mongoose.models.tasks || mongoose.model('tasks',TaskSchema)