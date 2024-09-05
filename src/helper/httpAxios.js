import axios from "axios";

export const httpAxios=axios.create({
    // baseURL:'http://localhost:3000/',
     baseURL:'https://task-manager-gamma-liart.vercel.app/',
})
