export interface RawBusObject extends Object {
  readonly lat: string
  readonly lon: string
  readonly est: string
  readonly cap: string
}

export interface Position {
  readonly lat: number
  readonly lon: number
}

export class Bus {
  public readonly carNumber: number;
  public readonly busLine: string;
  public readonly position: Position;
  public readonly state: string;
  public readonly speed: number;
  public readonly previousStop: string;
  public readonly nextStop: string;

  constructor(params: RawBusObject) {
    this.carNumber = parseInt(params.cap.replace(/.*{Coche:}(\d+).*/, "$1"));
    this.busLine = params.cap.replace(/.*{Viaje:}(.*(A|B|P):.*),\s{Parada:}.*/, "$2");
    this.position = {
      lat: parseFloat(params.lat), 
      lon: parseFloat(params.lon)
    }
    this.state = params.est;
    this.speed = parseInt(params.cap.replace(/.*{Velocidad:}(\d+).*/, "$1"));
    this.previousStop = params.cap.replace(/.*{Parada:}(.*),\s{Parada siguiente:}.*/, "$1");
    this.nextStop = params.cap.replace(/.*{Parada siguiente:}(.*),\s{Pasajeros:}.*/, "$1");
  }
}