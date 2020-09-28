import {
	Request, Response, RequestHandler, NextFunction,
} from 'express';

export function asyncWrapper(callback: (req: Request, res: Response, next: NextFunction) => void): RequestHandler {
	return (req: Request, res: Response, next: NextFunction): Promise<void> => Promise.resolve().then(() => callback(req, res, next)).catch(next);
}
