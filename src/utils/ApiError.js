// to have a structure for getting the error we are using the Error class, this is present in node.js api error part.
//  https://nodejs.org/api/errors.html
// this is basically API Error filing

class ApiError extends Error{
// here Error is a class, have a look in the documentation.

    constructor(
        statuscode,
        message="something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }

}

export { ApiError }