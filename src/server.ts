require('dotenv').config();
import { App } from './app';

const port = parseInt(process.env.APP_PORT) || 8000
export const app = new App(port);