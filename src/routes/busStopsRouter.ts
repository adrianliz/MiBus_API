import { Express } from 'express';
import { BusStopsController } from '../controllers/busStopsController';
import { BusStopDAO } from '../db/busStopDAO';

export class BusStopsRouter {
  constructor(app: Express, busStopDAO: BusStopDAO) {
    this.configureRoutes(app, new BusStopsController(busStopDAO));
  }

  private configureRoutes(app: Express, busStopsController: BusStopsController): void {
    app.route('/stops').get(busStopsController.getBusStops);
    app.route('/stop/:id').get(busStopsController.getBusStop);
  }
}