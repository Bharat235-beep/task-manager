import { connectDb } from '@/helper/connect'
import { Task } from '@/models/task';
import { User } from '@/models/user'
import { NextResponse } from 'next/server'

// export async function GET(req,{params}){
//     const {userId}=params
//  const result=await  User.findById(userId)
// return NextResponse.json(result)
// }
export async function GET(req,{params}){
    try {
      await connectDb();
          const {userId}=params
      const result=await Task.find({userId:userId});
      return NextResponse.json(result)     
    } catch (error) {
       console.log(error)
       return NextResponse.json({message:error.message},{status:404})
    }
   }
export async function POST(req,{params}){
    try {
      await connectDb();
          const {userId}=params
          const data=await req.json();
          console.log(data)
      const result=await Task.create({
       ...data,
       userId:userId
      })
      return NextResponse.json(result)     
    } catch (error) {
       console.log(error)
       return NextResponse.json({message:error.message},{status:500})
    }
   }
   