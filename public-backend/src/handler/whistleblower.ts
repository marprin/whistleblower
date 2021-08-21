import { Response, Request } from 'express';


export const submit = (req: Request, res: Response) => {

	return res.status(201).json({"message": "The whistle is received"})
}
