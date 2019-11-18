class CustomError extends Error {
    constructor( code=500,...args) {
        super(...args)
        Error.captureStackTrace(this, CustomError);

        this.code = code;
    }
}

module.exports = {
    CustomError
}