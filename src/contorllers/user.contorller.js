// here we are regestering the user.
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

// for regestering the user we will have method

const registerUser = asyncHandler(async(req, res) => {
    // THE BELOW STEPS ARE THE IMPORTANT STEPS WHICH SHOULD BE IMPORTNAT TO CREATE A NEW USER, THIS INCLUDES THE \
    // UPDATATOIN OF USER IN THE DB AND OTHER IMPORTANT CONDITIONS LIKE NEW USER, OR THE CORRECT FORMAT OF THE 
    // EMAIL, AND THE RULES WHICH SHOULD BE FOLOWED.

    // get user details ftom frontene
    // validation - not empty email, correct email?
    // check if already exits
    // check for images and avatar  (these are in user.models.js)
    // upload them to cloudinary
    // create user object -- create entry in db
    // remove password and refresh token field
    // check for user creation
    // return response

    const {fulName, email, username, password} = req.body
    console.log("email: ", email)


    // if(fullName === ""){
    //     throw new ApiError(400, "fullname is required")
    // }
// step 2
    if(
        [fullname, email, username, password].some(()=>field?.trim() === "")
    ){
        throw new ApiError(400, "All field are required")
    }

// step 3
    const existedUser = User.findOne({
        $or: [{email},{username}]
    })

    if(existedUser) {
        throw new ApiError(409, "user with email or username already exists")
    }

// step 4

})

export { registerUser }