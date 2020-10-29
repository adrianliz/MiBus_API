import express, { Express } from 'express';
import { Client } from 'pg';
import { BusesRouter } from './routes/busesRouter';
import { BusStopsRouter } from './routes/busStopsRouter';
import { BusesProxy } from './proxy/busesProxy';
import { BusStopDAO } from './db/busStopDAO';
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
      await this.dbClient.connect();
    } catch (err) {
      console.error(err);
    }
  }

  public retrieveDBClient(): Client {
    return this.dbClient;
  }

  private initRoutes(): void {
    const busesProxy = new BusesProxy();
    const busStopDAO = new BusStopDAO();

    new BusesRouter(this.app, busesProxy, busStopDAO);
    new BusStopsRouter(this.app, busStopDAO);
  }
}