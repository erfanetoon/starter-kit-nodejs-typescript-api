import { NextFunction, Request, Response } from "express";

interface ErrorData {
  status: number;
  message: string;
  data: any;
}

const ErrorHandler = (
  error: ErrorData,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { status = 500, message, data } = error;

  error = {
    status,
    message: status === 500 || !message ? "Server Problem" : message,
    ...(data && data),
  };

  res.status(status).send(error);
};

export default ErrorHandler;
