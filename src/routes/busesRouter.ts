import { BusesController } from '../controllers/busesController'
import { Express, Request, Response } from "express";
import { BusesProxy } from "../proxy/busesProxy";

export class BusesRouter {
  constructor(app: Express, busesProxy: BusesProxy) {
    this.configureRoutes(app, new BusesController(busesProxy));
  }

  private configureRoutes(app: Express, busesController: BusesController): void {
    app.route('/').get(busesController.getBuses);
  }
}