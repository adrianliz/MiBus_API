import { Request, Response } from 'express';
import { app } from '../server';
import { BusStop } from '../models/busStop';
import { Position } from '../models/position';

export class BusStopsController {
  public getBusStops = async (req: Request, res: Response) => {
    const result = await app.retrieveDBClient().query(
      "SELECT * FROM parada"
    );

    res.send(result.rows.map(busStop => 
      new BusStop(busStop.name, new Position(parseFloat(busStop.lat), parseFloat(busStop.lon)))) || []);
  }

  public getBusStop = async (req: Request, res: Response) => {
    const result = await app.retrieveDBClient().query(
      "SELECT * FROM parada WHERE id = $1", [parseInt(req.params.id) || 0]
    )

    if (result.rows.length == 0) {
      res.status(200).send({message: "Bus stop don't found"});
    } else {
      res.send(new BusStop(result.rows[0].name, new Position(parseFloat(result.rows[0].lat), parseFloat(result.rows[0].lon))));
    }
  }
}