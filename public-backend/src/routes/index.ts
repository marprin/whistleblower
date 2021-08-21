import * as healthz from '../handler/healthz';
import * as whistle from '../handler/whistleblower';
import { Express } from 'express';

export const routesMapping = (app: Express) => {
	const prefix = process.env.APP_PREFIX;

	app.get(`${prefix}/healthz`, healthz.index);
	app.post(`${prefix}/whistleblower`, whistle.submit);
};



