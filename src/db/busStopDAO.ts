import { app } from '../server';
import { BusStop } from '../models/busStop';
import { Position } from '../models/position';

export class BusStopDAO {
  public getBusStops(): BusStop[] {
    let busStops: BusStop[] = [];

    app.retrieveDBClient().query(
      "SELECT * FROM parada"
    ).then(result => {
      busStops = result.rows.map(busStop =>
        new BusStop(busStop.id, busStop.name, new Position(parseFloat(busStop.lat), parseFloat(busStop.lon))));
    }).catch(err => {
      console.error(err.stack);
    });

    return busStops;
  }

  public getBusStop(id: Number): BusStop {
    let busStop: BusStop;

    app.retrieveDBClient().query(
      "SELECT * FROM parada WHERE id = $1", [id]
    ).then(result => {
      busStop = result.rows[0];
    }).catch(err => {
      console.error(err.stack);
    });

    return busStop;
  }
}