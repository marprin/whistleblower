import * as bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import Logger from './lib/logger';
import { routesMapping } from './routes';

// Library Init
dotenv.config();
const env = process.env;
const app = express();

// Set the express config
app.set('port', env.APP_PORT);
app.set('host', env.APP_HOST);

// Set the library for the application
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());

// Set the cors
const corsOrigin = env.CORS_ORIGIN || '*';
const listCorsOrigin = corsOrigin.split(',');
const corsOptionsDelegate = ((req: any, callback: any) => {
	let corsOptions;
	if(listCorsOrigin.indexOf(req.header('Origin')) !== -1) {
		corsOptions = {origin: true};
	} else {
		corsOptions = {origin: false};
	}
	callback(null, corsOptions);
});
app.use(cors(corsOptionsDelegate));

// Register all routes in here
routesMapping(app);

// Set the 404 Not found handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	Logger.info(`Receive unknown request to ${req.path} path`);
	return res.status(404).json({error: "The requested endpoint is not found"}).end();
});


// Set the default error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
	Logger.error(err.stack);
	return res.status(500).json({error: "Something went wrong!"}).end();
});

export default app;

