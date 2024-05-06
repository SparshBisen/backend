// THE MODEL IS REFERRED FROM THE FOLLOWING LINK: https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj
// here we have used bcrypt library for handling passwords linke encryption, decryption, etc
// for tocken we are going to use jwt(jsonwebtoken) package


// link for downloading liberaries:   https://www.npmjs.com/package/bcrypt

import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";    // for encryption we have to use hooks (middleware) which are in mongoose liberary, here we are using Pre hook  
                                // LINK : https://mongoosejs.com/docs/middleware.html#pre
                                // just before saving the date this middleware will do what you actually want, here we want to encrypt the password
                                // so we will code accrdingly 


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // we are getting a url here, we are going to use 
                     //a cloudinary service which will give us the image, videos url, if we upload  [ i guess :) ]
        required: true
    },
    coverImage: {
        type: String
    },
    // this is important *******______*****
    watchHistory: [
        {
            type: mongoose.Schema.ObjectId, 
            ref: "videos"                   // here we have use array because a single user can watch multiple videos so to keep the 
                                            // record of the videos we are using arrays, this will contain the video ids
                                            // here we will use mongoose package which is known as mongoose aggregrate pagination
                                            
                                            // ***--->> this package will help us to write aggregration queries
                                            // LINK FOR THE PACKAGE : https://www.npmjs.com/package/mongoose-aggregate-paginate-v2
        }
    ],
    password: {
        type: String,                           
        required: [true, "password is required"],

    },
    refreshTokens: {
        type: String,
    }
}, 
{timepstamps: true}) // this will contain the createdAt and updatedAt section of the model

//------------------//------------------//------------------//------------------//------------------//------------------//------------------//------------------

userSchema.pre("save", async function(next) {       // actions before any key event in backend we use 'pre', some tasks which should be done before any action.
    if(this.isModified("password")){                //  in arrow function we done have the reference of 'this'.
        this.password = bcrypt.hash(this.password, 10)
        next()
    }
    
})  // here since we are saving the password we will use save middleware 
            /*      here next is used because we are using middleware so to shift from one state to other we are using next      */
                                                // LINK : (for differnt middleware for different case) https://mongoosejs.com/docs/middleware.html

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this.id,
            email : this.email,
            username : this.username,
            fullname : this.fullname,
        },

        process.env.ACCESS_TOKEN_SECREAT,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXIPRY
        }
    )
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id : this.id,
        },

        process.env.REFRESH_TOKEN_SECREAT,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)