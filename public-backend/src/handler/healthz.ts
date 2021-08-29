import { Request, Response } from 'express';

export class Healthz {
	constructor() {

	}

	public index(req: Request, res: Response) {
		return res.status(200).json({"status": "OK"});
	}
}
