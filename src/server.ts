import { App } from './app';
import 'dotenv/config';

const RAILWAY_PORT = `0.0.0.0:${process.env.PORT}`;

new App().start(RAILWAY_PORT);

