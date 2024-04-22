import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log("MONGODB Connection Error", error)
        process.exit(1); // ****IMP: there are multiple types of exits so you can have a look on differnt type of exit
    }
}