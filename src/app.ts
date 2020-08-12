import express, { Express, Request, Response } from 'express';
import { BusesRouter } from './routes/busesRouter';
import { BusesProxy } from './proxy/busesProxy';
const cors = require('cors');

export class App {
  private app: Express = express();

  constructor(port: Number) {
    this.app.use(cors());
    this.initRoutes();

    this.app.listen(port, () => {
      console.log(`Server running on ${port}`);
    })
  }

  private initRoutes(): void {
    const busesRouter = new BusesRouter(this.app, new BusesProxy());
  }
}