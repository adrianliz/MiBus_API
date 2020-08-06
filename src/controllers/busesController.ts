import { Request, Response } from "express";
import { BusesProxy } from '../proxy/busesProxy';

export class BusesController {
  private busesProxy: BusesProxy;

  constructor(busesProxy: BusesProxy) {
    this.busesProxy = busesProxy;
  }

  public getBuses = async (req: Request, res: Response) => {
    res.send(this.busesProxy.getBuses());
  }
}