import { connectDb } from "@/helper/connect";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
connectDb()
export async function POST(req){
   await connectDb();
   const res= cookies().delete('task-manager')
   console.log('cookie deleted')

   return  NextResponse.json({message:'Successfully logged out!!'})
   
}