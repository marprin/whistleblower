import app from './app';
import process from 'process';
import Logger from './src/lib/logger';


const port = app.get('port');
const host = app.get('host');
const env = app.get('env');

process.stdin.resume();

// Start the server
const server = app.listen(port, () => {
	Logger.info(`Server is running at http://${host}:${port} with env: ${env}`);
});

const terminateHandler = (signal: string) => {
	Logger.info(`${signal} signal received: Closing the HTTP Server`);
	server.close(() => {
		Logger.info("HTTP server closed");
		process.exit();
	});
};

process.on('SIGINT', terminateHandler);
process.on('SIGTERM', terminateHandler);

export default server;
