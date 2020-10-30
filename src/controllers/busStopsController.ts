import { Request, Response } from 'express';
import { BusStopDAO } from '../db/busStopDAO';

export class BusStopsController {
  private busStopDAO: BusStopDAO;

  constructor(busStopDAO: BusStopDAO) {
    this.busStopDAO = busStopDAO;
  }

  public getBusStops = async (req: Request, res: Response) => {
    try {
      res.send(await this.busStopDAO.getBusStops());
    } catch (err) {
      res.status(400).send({ message: "Error retrieving bus stops" });
      console.error(err);
    }
  }

  public getBusStop = async (req: Request, res: Response) => {
    try {
      res.send(await this.busStopDAO.getBusStop(parseInt(req.params.id)));
    } catch (err) {
      res.status(400).send({ message: "Bus stop don't found" });
      console.error(err);
    }
  }
}