import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicleParams: IVehicle) {
    this.id = vehicleParams.id;
    this.model = vehicleParams.model;
    this.year = vehicleParams.year;
    this.color = vehicleParams.color;
    this.status = vehicleParams.status || false;
    this.buyValue = vehicleParams.buyValue;
  }
}

export default Vehicle;