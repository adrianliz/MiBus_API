import { Request, Response } from 'express';
import { app } from '../server';
import { Bus } from '../models/bus';
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

  public getBusesStop = async (req: Request, res: Response) => {
    const result = await app.retrieveDBClient().query(
      "SELECT * FROM parada WHERE id = $1", [parseInt(req.params.id) || 0]
    );

    if (result.rows.length == 0) {
      res.status(200).send({ message: "Bus stop don't found" });
    } else {
      const buses: Bus[] = this.busesProxy.getBuses();
      const busStop = result.rows[0];

      let busesStop: Bus[] = [];

      for (const bus of buses) {
        if (bus.nextStop.match(/(\d+)/)[0] == busStop.id) {
          busesStop.push(bus);
        }
      }

      res.send(busesStop);
    }
  }
}