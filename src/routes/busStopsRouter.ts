import { Express } from 'express';
import { BusStopsController } from '../controllers/busStopsController';

export class BusStopsRouter {
  constructor(app: Express) {
    this.configureRoutes(app, new BusStopsController());
  }

  private configureRoutes(app: Express, busStopsController: BusStopsController): void {
    app.route('/stops').get(busStopsController.getBusStops);
    app.route('/stop/:id').get(busStopsController.getBusStop);
  }
}