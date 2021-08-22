import { Response, Request } from 'express';


export const index = (req: Request, res: Response) => {
	return res.status(200).json({"status": "Ok"});
};

