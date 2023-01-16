import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycleParams: IMotorcycle) {
    super(motorcycleParams);
    this.category = motorcycleParams.category;
    this.engineCapacity = motorcycleParams.engineCapacity;
  }
}

export default Motorcycle;