import mongoose from "mongoose";
let config={
    isConnected:0
}

export  async function connectDb(){
    if(config.isConnected)
    {
        return
    }
   else{ 
   await mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log("Connection Succesfull",config.isConnected);
        config.isConnected=1;
        return res;
            })
   }
}