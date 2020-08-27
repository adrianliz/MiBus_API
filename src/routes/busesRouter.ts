import { Express } from 'express';
import { BusesController } from '../controllers/busesController';
import { BusesProxy } from '../proxy/busesProxy';
import { BusStopDAO } from '../db/busStopDAO';

export class BusesRouter {
  constructor(app: Express, busesProxy: BusesProxy, busStopDAO: BusStopDAO) {
    this.configureRoutes(app, new BusesController(busesProxy, busStopDAO));
  }

  private configureRoutes(app: Express, busesController: BusesController): void {
    app.route('/buses').get(busesController.getBuses);
    app.route('/bus/:busline/:carnumber').get(busesController.getBus);
    app.route('/buses/stop/:id').get(busesController.getNextBusesStop);
  }
}