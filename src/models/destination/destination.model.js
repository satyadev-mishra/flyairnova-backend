import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,
        unique:true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Destination = mongoose.model('Destination', destinationSchema);