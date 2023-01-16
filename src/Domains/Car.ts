import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carParams: ICar) {
    super(carParams);
    this.doorsQty = carParams.doorsQty;
    this.seatsQty = carParams.seatsQty;
  }
}

export default Car;