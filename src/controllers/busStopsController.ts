import { Request, Response } from 'express';
import { BusStopDAO } from '../db/busStopDAO';

export class BusStopsController {
  private busStopDAO: BusStopDAO;

  constructor(busStopDAO: BusStopDAO) {
    this.busStopDAO = busStopDAO;
  }

  public getBusStops = async (res: Response) => {
    res.send(this.busStopDAO.getBusStops());
  }

  public getBusStop = async (req: Request, res: Response) => {
    const busStop = this.busStopDAO.getBusStop(parseInt(req.params.id));
      
    if (busStop != null) {
      res.send(busStop);
    } else {
      res.status(200).send({ message: "Bus stop don't found" });
    }
  }
}