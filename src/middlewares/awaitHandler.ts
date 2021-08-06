import { NextFunction, Request, Response } from 'express';

const AwaitHandlerFactory = (middleware: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await middleware(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

export default AwaitHandlerFactory;
