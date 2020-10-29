import fetch from 'node-fetch';
import parser from 'fast-xml-parser';
import { Bus, RawBusObject } from '../models/bus';

export class BusesProxy {
  private readonly BUSES_REFRESH: number = 30000;
  private readonly BUS_NOMRAL_STATE: string = "n";
  private buses: Bus[];

  constructor() {
    this.buses = [];
    this.loadBuses();

    setInterval(() => {
      this.loadBuses();
    }, parseInt(process.env.BUSES_REFRESH) || this.BUSES_REFRESH);
  }

  private async loadBuses(): Promise<void> {
    try {
      let result = await fetch(process.env.BUSES_API);
      let jsonBuses = parser.parse(await result.text());
      
      let tmpBuses = this.parseBuses(jsonBuses.list.marker);
      if (tmpBuses.length > 0) {
        this.buses = tmpBuses;
      }
    } catch (err) {
      console.error(err)
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

      if (this.validateBus(bus)) {
        buses.push(bus);
      }
    }

    return buses;
  }

  private validateBus(bus: Bus): boolean {
    return bus.state == (process.env.BUS_NORMAL_STATE || this.BUS_NOMRAL_STATE);
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