// this is a general function which takes inpute and gives output accordingly, we have to talk to database multiple times so 
// its better to make a generalized version
// this is also known as utility function



// THERE ARE 2 WAYS: USING PROMISES AND TRY&CATCH


// THIS IS USING PORMISES

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((error)=>next(error))
    }
}



export { asyncHandler }


// THIS IS USING TRY AND CATCH.

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(rew,res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })

    }
}
*/
