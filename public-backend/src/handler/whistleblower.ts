import { Request, Response } from 'express';
import { SubmitWhistleblowerEntity } from '../entity/whistleblower';

export class WhistleBlower {
	constructor() {

	}

	submit = async (req: Request, res: Response) => {
		let payload;
		try {
			payload = await SubmitWhistleblowerEntity.validateAsync(req.body);
		} catch (err) {
			return res.status(422).json({"errors": err.details});
		}

		return res.status(201).json({"message": "The whistle is received"});
	}
}