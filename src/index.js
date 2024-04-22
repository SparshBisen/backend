// require('dotenv').config({path: './env'});
// the above line will work properly but it will create lot of irregularityies, so it is not a good practice.
// ALSO THIS LINE IS COPIED FROM THE DOCUMENTATION OF NPM, so have a look properly


// -------------------------------------

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// --------------------------------------

import dotenv from 'dotenv';
import connectDB from './db/index.js';  // main code is in index.js file of db folder

dotenv.config({
    path: "./env"
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("connection failed conneting mongo db")
})    // this is done while setting up server connection with database
















/*



----------- THIS IS FIRST APPROACH FOR CONNECTION DB -----------------
import express from "epxress"
import { addListener } from "nodemon";

const app = express();

(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        // here we are connecting the database and we have to use
        // await and then while connection we have to use ${process.env.MONGODB_URI} which is present in .env folder and after that 
        // we are supposed to add the name of the database which is ${DB_NAME}
        
        app.on("err", (ERROR) => {
            console.log("error: ", err);
            throw ERROR
        })

        app.listen(rocess.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } 
    catch (error) {
        console.error("ERROR: ", error);
        throw err
    }
})()


*/