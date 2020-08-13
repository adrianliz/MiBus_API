import { Request, Response } from 'express';
import { BusStop } from '../models/busStop';
import { app } from '../server';

export class BusStopsController {
  public getBusStops = async (req: Request, res: Response) => {
    const result = await app.retrieveDBClient().query<BusStop>(
      "SELECT * FROM parada"
    );

    res.send(result.rows || []);
  }

  public getBusStop = async (req: Request, res: Response) => {
    const result = await app.retrieveDBClient().query<BusStop>(
      "SELECT * FROM parada WHERE id = $1", [parseInt(req.params.id) || 0]
    )

    if (result.rows.length == 0) {
      res.status(200).send({message: "Bus stop don't found"});
    } else {
      res.send(result.rows[0]);
    }
  }
}