import fetch from 'node-fetch';
import parser from 'fast-xml-parser';
import { Bus, RawBusObject } from '../models/bus';

export class BusesProxy {
  private buses: Bus[];

  constructor() {
    this.loadBuses();

    setInterval(() => {
      try {
        this.loadBuses();
      } catch (err) {
        console.log(err);
      }
    }, parseInt(process.env.BUSES_REFRESH));
  }

  private async loadBuses(): Promise<void> {
    let result = await fetch(process.env.BUS_API);
    let jsonBuses = parser.parse(await result.text());
    
    let tmpBuses = this.parseBuses(jsonBuses.list.marker);
    if (tmpBuses.length > 0) {
      this.buses = tmpBuses;
    }
  }

  private parseBuses(jsonBuses: object[]): Bus[] {
    let buses: Bus[] = [];

    for (let i = 0; i < jsonBuses.length; i++) {
      buses.push(new Bus(jsonBuses[i] as RawBusObject));
    }

    return buses;
  }

  public getBuses(): Bus[] {
    return this.buses;
  }

  public getBus(busLine: string, carNumber: number): Bus {
    for (let bus of this.buses) {
      if ((bus.busLine == busLine) && (bus.carNumber == carNumber)) {
        return bus;
      }
    }
  }
}