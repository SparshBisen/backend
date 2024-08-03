// here we are regestering the user.
import { asyncHandler } from "../utils/asyncHandler.js";

// for regestering the user we will have method

const registerUser = asyncHandler(async(req, res) => {
    return res.status(200).json({
        message: "ok"    // this will give a json response.
    })
})

export { registerUser }