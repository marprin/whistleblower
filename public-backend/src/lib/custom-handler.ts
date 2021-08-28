import { Request, Response, NextFunction } from 'express';
import Logger from './logger';


export const NotFoundHandler = (req: Request, res: Response, next: NextFunction) => {
	Logger.error(`Receive unknown request to ${req.path} path`);
	return res.status(404).json({error: "The requested endpoint is not found"}).end();
};

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	Logger.error(err.stack);
	return res.status(500).json({error: "Something went wrong!"}).end();
};


