import { Express } from 'express';
import { Healthz } from '../handler/healthz';
import { WhistleBlower } from '../handler/whistleblower';

export const routesMapping = (app: Express) => {
	const prefix = process.env.APP_PREFIX;
	const healthzController = new Healthz()
	const whistleblowerController = new WhistleBlower();

	app.get(`${prefix}/healthz`, healthzController.index.bind(healthzController));
	app.post(`${prefix}/whistleblower`, whistleblowerController.submit.bind(whistleblowerController));
};



