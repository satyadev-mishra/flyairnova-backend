import mongoose, { mongo } from "mongoose";

const packageSchema = new mongoose.Schema({
    packageTitle: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true,
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Destination',
        required: true,
    },
    tripDayCount: {
        type: Number,
        required: true,
        default:0
    },
    price: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,

    }
    ,
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

export const Package=mongoose.model('Package',packageSchema)