import { Express } from 'express';
import { BusesController } from '../controllers/busesController';
import { BusesProxy } from "../proxy/busesProxy";

export class BusesRouter {
  constructor(app: Express, busesProxy: BusesProxy) {
    this.configureRoutes(app, new BusesController(busesProxy));
  }

  private configureRoutes(app: Express, busesController: BusesController): void {
    app.route('/buses').get(busesController.getBuses);
    app.route('/bus/:busline/:carnumber').get(busesController.getBus);
  }
}