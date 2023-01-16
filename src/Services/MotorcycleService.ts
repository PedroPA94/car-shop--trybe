import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.findAll();
    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    return this.createMotorcycleDomain(motorcycle);
  }
}

export default MotorcycleService;