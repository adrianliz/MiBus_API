import express, { Express, Request, Response } from 'express';
import { Client } from 'pg';
import { BusesRouter } from './routes/busesRouter';
import { BusStopsRouter } from './routes/busStopsRouter';
import { BusesProxy } from './proxy/busesProxy';
const cors = require('cors');

export class App {
  private app: Express = express();
  private dbClient: Client;

  constructor(port: Number) {
    this.app.use(cors());
    
    this.initDB();
    this.initRoutes();

    this.app.listen(port, () => {
      console.log(`Server running on ${port}`);
    })
  }

  private async initDB() {
    const config = {
      database: process.env.PGDATABASE || "mibus",
      host: process.env.PGHOST || "localhost",
      password: process.env.PGPASSWORD || "postgres",
      user: process.env.PGUSER || "postgres",
    };

    this.dbClient = new Client(config);

    try {
      this.dbClient.connect();
    } catch (err) {
      console.log(err);
    }
  }

  public retrieveDBClient(): Client {
    return this.dbClient;
  }

  private initRoutes(): void {
    const busesProxy: BusesProxy = new BusesProxy();

    const busesRouter = new BusesRouter(this.app, busesProxy);
    const busStopsRouter = new BusStopsRouter(this.app);
  }
}