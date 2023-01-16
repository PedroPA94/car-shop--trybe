import { NextFunction, Request, Response } from 'express';

const errors = [
  { status: 422, message: 'Invalid mongo id' },
];

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const errorCode = errors.find((err) => err.message === error.message)?.status || 500;
    res.status(errorCode).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;