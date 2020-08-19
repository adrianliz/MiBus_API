import { Request, Response } from 'express';
import { BusStopDAO } from '../db/busStopDAO';

export class BusStopsController {
  private busStopDAO: BusStopDAO;

  constructor(busStopDAO: BusStopDAO) {
    this.busStopDAO = busStopDAO;
  }

  public getBusStops = async (req: Request, res: Response) => {
    res.send(await this.busStopDAO.getBusStops());
  }

  public getBusStop = async (req: Request, res: Response) => {
    try {
      res.send(await this.busStopDAO.getBusStop(parseInt(req.params.id)));
    } catch (err) {
      res.status(200).send({ message: "Bus stop don't found" });
    }
  }
}