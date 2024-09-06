import { connectDb } from "@/helper/connect";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
connectDb()
export async function POST(req, res) {
    try {
        await connectDb();
        const { name, email, password } = await req.json()
        const res=await User.find({email:email})
        let response;
        if(res.length>0){
            return  NextResponse.json({ message: 'Email already exist!!' }, { status: 404 })
        }
        else{
   const hash= bcrypt.hashSync(password, 10, async (err, hash) => {
        if(err)
            throw err
        else{
           
            }
            return hash
            // await User.create({
            //     name: name,
            //     email: email,
            //     password: hash
            // }).then((value) => {
            //     console.log(value)
            //     return NextResponse.json(value,{ success: true, message: "User Created Succesfully!!" })
            // }).catch((err)=>{
            //     console.log(err.message)
            //     return  NextResponse.json({ message: err.message }, { status: 404 })
            // })
        })
        const user=await User.create({
            name,
            email,
            password:hash
        })
        response= NextResponse.json(user)
        const token= jwt.sign({userId:user._id},process.env.JWT_SECRET)
        console.log('token',token)
         response.cookies.set('task-manager',token)
        return response
    }
   
    } catch (err) {
    //    return NextResponse.error(  'Email already exist.' , { status: 500 })
    console.log(err)
      return  NextResponse.json({ message: err.message }, { status: 404 })
    }
}
export const GET=async()=>{
    await connectDb();
    let token=cookies().get('task-manager').value
    console.log(token)
    let data= jwt.verify(token,process.env.JWT_SECRET)
    console.log(data)
let result=await User.findById(data.userId).select('-password');
return NextResponse.json(result)
}