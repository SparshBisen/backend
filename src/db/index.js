import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`/n MongoDB Connected !! ${connectionInstance.connection.host}`) 
        // important line to be seen while outputting the sentence of successful connection
    } catch (error) {
        console.log("MONGODB Connection FAILED", error) // it is important to have console.log for error, it helps in debugging 
        process.exit(1); // ****IMP: there are multiple types of exits so you can have a look on differnt type of exit
    }
}

export default connectDB;  // "keyword :   **'default'**  "