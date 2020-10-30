import { app } from '../server';
import { BusStop } from '../models/busStop';

export class BusStopDAO {
  public async getBusStops(): Promise<BusStop[]> {
    const result = await app.retrieveDBClient().query<BusStop>(
      "SELECT * FROM parada"
    )

    return result.rows || [];
  }

  public async getBusStop(id: Number): Promise<BusStop> {
    const result = await app.retrieveDBClient().query<BusStop>(
      "SELECT * FROM parada WHERE id = $1", [id]
    )

    return result.rows[0];
  }
}