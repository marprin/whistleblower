import * as bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { corsOptionsDelegate } from './src/lib/cors';
import { ErrorHandler, NotFoundHandler } from './src/lib/custom-handler';
import { DatabaseConfiguration, Mysql } from './src/lib/database';
import morganMiddleware from './src/lib/middleware';
import { routesMapping } from './src/routes';


export const init = () => {
	// Library Init
	dotenv.config();
	const env = process.env;
	const app = express();

	// Set the express config
	app.set('port', env.APP_PORT);
	app.set('host', env.APP_HOST);

	// Set the library for the application
	registerLibrary(app);

	// Set the cors
	const corsOrigin = env.CORS_ORIGIN || '*';
	const listCorsOrigin = corsOrigin.split(',');
	app.use(cors(corsOptionsDelegate(listCorsOrigin)));

	const dbConf: DatabaseConfiguration = {
		host: env.DB_HOST || 'localhost',
		port: parseInt(String(env.DB_PORT)) || 3306,
		user: env.DB_USER,
		password: env.DB_PASS,
		database: env.DB_NAME,
		debug: (String(env.DB_DEBUG)) === 'true' ? true : false,
		connectionLimit: parseInt(String(env.DB_CONN_LIMIT)),
		queueLimit: parseInt(String(env.DB_QUEUE_LIMIT)),
	};

	// Create database connection
	const db = new Mysql(dbConf)
	db.testConnection();


	// Register all routes in here
	routesMapping(app);

	// Register custom handler
	app.use(NotFoundHandler);
	app.use(ErrorHandler);

	return app;
};

const registerLibrary = (app: express.Express) => {
	app.use(compression());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(helmet());
	app.use(morganMiddleware);
};
