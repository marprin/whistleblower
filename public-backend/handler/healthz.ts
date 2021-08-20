import { Response, Request } from 'express';


export const index = (req: Request, res: Response) => {
	return res.json({"status": "Ok"});
};

