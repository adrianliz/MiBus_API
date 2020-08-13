import { Request, Response } from "express";
import { BusesProxy } from '../proxy/busesProxy';

export class BusesController {
  private busesProxy: BusesProxy;

  constructor(busesProxy: BusesProxy) {
    this.busesProxy = busesProxy;
  }

  public getBuses = async (req: Request, res: Response) => {
    res.send(this.busesProxy.getBuses() || []);
  }

  public getBus = async (req: Request, res: Response) => {
    const busLine = req.params.busline;
    const carNumber = parseInt(req.params.carnumber);

    let bus = this.busesProxy.getBus(busLine, carNumber);

    if (bus != null) {
      res.send(this.busesProxy.getBus(busLine, carNumber));
    } else {
      res.status(200).send({message: "Bus not found"});
    }
  }
}