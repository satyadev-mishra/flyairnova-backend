import mongoose from "mongoose";
const userScheema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        length: 8,
        required:true,
    },
    role:{
        type: String,
        enum: ['admin', 'sub-admin', 'employee'],
        default: 'admin',
        required:true
    }
},{timestamps:true})

export const User = mongoose.model('User',userScheema)