import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use are used for configuration or middlewares 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    // for extrea knowledge of differenct usecase of cors press ctrl + space
}))


// here we are taking json form as an input
app.use(expressxpress.json({limit: "16kb"}))       


//configuration for getting data from URL
app.use(express.urlencoded({extended: true, limit: "16kb"}))


// to store files or folders in the server
app.use(express.static("public")) 
// here the public folder will come in use, here we will store all the data and folder which are supposed to be in server



export { app }