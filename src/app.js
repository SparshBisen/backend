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

app.use(cookieParser())



//routes
import userRoughter from './routes/user.routes.js'

// routes declaration
app.use("/users", userRoughter)   
// this will give the control to the user.route.js file where the further actions will be continued,
// futher actions like login or other will be declared in the user file. 

// possible url structure: http://localhost:8000/users/(login or register)

export { app }