import { User } from "@/models/user";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { connectDb } from "@/helper/connect";
connectDb();
export async function POST(req) {
   try {
     await connectDb();
     const { email,password} = await req.json();
     const user=await User.findOne({email})
    if(user==null){
      return NextResponse.json({message:'Email not exist'},{status:404})
    }
    else{
     const response=NextResponse.json(user)
     const check= bcrypt.compareSync(password,user.password)
     if(check){
      const token= jwt.sign({userId:user._id},process.env.JWT_SECRET)
      console.log('token',token)
       response.cookies.set('task-manager',token)
     //  const verify=jwt.verify(token,process.env.JWT_SECRET)
     //  console.log('verify',verify)
     return response;
     }else{
      return NextResponse.json({message:'Password not matched!!'},{status:404})
    }}
  } catch (error) {
    
    return NextResponse.json({message:error.message},{status:404})
   }

}