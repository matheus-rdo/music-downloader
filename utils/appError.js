
class AppError {
    constructor(description, httpCode = 500, isOperational = true) {
        Error.call(this);
        Error.captureStackTrace(this);
        this.description = description;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
    }
};

module.exports = AppError;