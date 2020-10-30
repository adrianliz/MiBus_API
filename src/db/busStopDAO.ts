import { app } from '../server';
import { BusStop } from '../models/busStop';
import { Position } from '../models/position';

export class BusStopDAO {
  public async getBusStops(): Promise<BusStop[]> {
    const result = await app.retrieveDBClient().query(
      "SELECT * FROM parada"
    )

    return result.rows.map(busStop => 
      new BusStop(busStop.id, busStop.name, new Position(parseFloat(busStop.lat), parseFloat(busStop.lon)))) || [];
  }

  public async getBusStop(id: Number): Promise<BusStop> {
    const result = await app.retrieveDBClient().query(
      "SELECT * FROM parada WHERE id = $1", [id]
    )

    const busStop = result.rows[0];
    return new BusStop(busStop.id, busStop.name, new Position(parseFloat(busStop.lat), parseFloat(busStop.lon)));
  }
}