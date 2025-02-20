import mongoose from "mongoose";
import { DB_NAME } from "../contants";

 const connectDB = async() => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`Database Connected Successfully...${connectionInstance}`)

    } catch (error) {
        console.error(`ERROR: Could not connect database---> ${error}`);
        // throw new error;
        process.exit();
    }
}

export default connectDB;