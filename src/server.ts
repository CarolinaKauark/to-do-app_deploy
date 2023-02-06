import { App } from './app';
import 'dotenv/config';

const RAILWAY_PORT = process.env.PORT as string;

new App().start(RAILWAY_PORT);

