import { Position } from './position';

export class BusStop {
  public readonly name: String;
  public readonly position: Position;

  constructor(name: String, position: Position) {
    this.name = name;
    this.position = position;
  }
}