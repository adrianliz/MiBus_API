import { BusesController } from '../controllers/busesController'
import { Express } from "express";
import { BusesProxy } from "../proxy/busesProxy";
import { BusStopsController } from '../controllers/busStopsController';

export class BusesRouter {
  constructor(app: Express, busesProxy: BusesProxy) {
    this.configureBusesRoutes(app, new BusesController(busesProxy));
    this.configureBusStopsRoutes(app, new BusStopsController());
  }

  private configureBusesRoutes(app: Express, busesController: BusesController): void {
    app.route('/buses').get(busesController.getBuses);
    app.route('/bus/:busline/:carnumber').get(busesController.getBus);
  }

  private configureBusStopsRoutes(app: Express, busStopsController: BusStopsController): void {
    app.route('/stops').get(busStopsController.getBusStops);
    app.route('/stop/:id').get(busStopsController.getBusStop);
  }
}