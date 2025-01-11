class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true; // Operational errors are trusted and can be handled
  
      // Use Error instead of error
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default AppError;
  