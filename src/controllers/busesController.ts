import { Request, Response } from 'express';
import { Bus } from '../models/bus';
import { BusesProxy } from '../proxy/busesProxy';
import { BusStopDAO } from '../db/busStopDAO';

export class BusesController {
  private busesProxy: BusesProxy;
  private busStopDAO: BusStopDAO;

  constructor(busesProxy: BusesProxy, busStopDAO: BusStopDAO) {
    this.busesProxy = busesProxy;
    this.busStopDAO = busStopDAO;
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

  public getNextBusesStop = async (req: Request, res: Response) => {
    try {
      const busStop = await this.busStopDAO.getBusStop(parseInt(req.params.id));
      const buses = this.busesProxy.getBuses();

      let busesStop: Bus[] = [];

      for (const bus of buses) {
        if ((bus.nextStop != "") && (bus.speed > 0)) {
          if (parseInt(bus.nextStop.match(/(\d+)/)[0]) == busStop.id) {
            busesStop.push(bus);
          }
        }
      }

      res.send(busesStop);
    } catch (err) {
      res.status(200).send({ message: "Bus stop don't found" });
    }
  }
}