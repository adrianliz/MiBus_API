import fetch from 'node-fetch';
import parser from 'fast-xml-parser';
import { Bus, RawBusObject } from '../models/bus';
import { nextTick } from 'process';

export class BusesProxy {
  private buses: Bus[];

  constructor() {
    this.loadBuses();
    
    setInterval(() => {
      this.loadBuses();
    }, parseInt(process.env.BUSES_REFRESH) || 30000);
  }

  private async loadBuses(): Promise<void> {
    try {
      let result = await fetch(process.env.BUS_API);
      let jsonBuses = parser.parse(await result.text());
      
      let tmpBuses = this.parseBuses(jsonBuses.list.marker);
      if (tmpBuses.length > 0) {
        this.buses = tmpBuses;
      }
    } catch (err) {
      console.log(err);
    }
  }

  private parseBuses(jsonBuses: object[]): Bus[] {
    let buses: Bus[] = []

    parseLoop:
    for (let i = 0; i < jsonBuses.length; i++) {
      const bus = new Bus(jsonBuses[i] as RawBusObject);
      
      for (const b of buses) {
        if (b.equals(bus)) {
          break parseLoop;
        }
      }

      buses.push(bus);
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