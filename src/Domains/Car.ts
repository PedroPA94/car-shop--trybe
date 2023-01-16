import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(carParams: ICar) {
    this.id = carParams.id;
    this.model = carParams.model;
    this.year = carParams.year;
    this.color = carParams.color;
    this.status = carParams.status || false;
    this.buyValue = carParams.buyValue;
    this.doorsQty = carParams.doorsQty;
    this.seatsQty = carParams.seatsQty;
  }
}

export default Car;