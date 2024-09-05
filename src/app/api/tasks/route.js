import mongoose from "mongoose";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/connect";
connectDb()
export async function GET(){
  await connectDb();
  const result=await Task.find({});
  return NextResponse.json(result)
}
//create task
export async function POST(req){
  await connectDb();
  const {title,description,userId}=await req.json()
  const result=await  Task.create({
    title,description,userId
      })
    console.log(result)
    return NextResponse.json(result)
}
export async function DELETE(req, { params }) {
  await connectDb();
  const { taskId } = params;
  const result=await Task.findByIdAndDelete(taskId)
  console.log(result)
  return NextResponse.json(result)
}
export async function PUT(req, { params }) {
 try {
  await connectDb();
   const { taskId } = params;
   const data=await req.json();
   console.log(data)
   const result=await Task.findByIdAndUpdate(taskId,{...data})
   console.log(result)
   return NextResponse.json(result)
 } catch (error) {
  return NextResponse.json(error.message)
 }
}