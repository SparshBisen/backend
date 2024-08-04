import { Router } from "express";
import { registerUser } from "../contorllers/user.contorller.js";

const router = Router()

router.route("/register").post(
    // here we are handling the images and coverImages which are supposed to be uploiaded
    // here these things are supposed to be uploaded and checked if the correct format is 
    // being followed, we are are using this as a middleware.
    upload.fields([
        {
            name: "Avatar",
            maxCount : 1
        },
        {
            name: "coverImage",
            maxCount : 1
        }
    ])
)
// router.route("/login").post(login)

export default router