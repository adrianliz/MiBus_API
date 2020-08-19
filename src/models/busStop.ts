import { Position } from './position';

export class BusStop {
  public readonly id: Number
  public readonly name: String;
  public readonly position: Position;

  constructor(id: Number, name: String, position: Position) {
    this.id = id;
    this.name = name;
    this.position = position;
  }
}