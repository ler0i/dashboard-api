import { Container } from 'inversify';
import { App } from './app';

// async function bootstrap() {
// 	const logger = new LoggerService();
// 	const app = new App(
// 		logger,
// 		new UserController(logger),
// 		new ExeptionFilter(logger)
// 	);
// 	await app.init();
// }
// bootstrap();

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}
