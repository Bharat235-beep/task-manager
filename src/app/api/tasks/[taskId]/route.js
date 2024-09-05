import { connectDb } from "@/helper/connect";
import { Task } from "@/models/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

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