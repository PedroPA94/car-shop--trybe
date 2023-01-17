import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  private notFoundMessage() {
    return this.res.status(404).json({ message: 'Motorcycle not found' }); 
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async getAll() {
    const motorcycles = await this.service.getAll();
    return this.res.status(200).json(motorcycles);
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.getById(id);
      if (motorcycle) {
        return this.res.status(200).json(motorcycle);
      }
      return this.notFoundMessage();
    } catch (err) {
      this.next(err);
    }
  }

  public async update() {
    const motorcycle: IMotorcycle = {
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status,
    };
    const { id } = this.req.params;

    try {
      const updatedMotorcycle = await this.service.update(id, motorcycle);
      if (updatedMotorcycle) {
        return this.res.status(200).json(updatedMotorcycle);
      }
      return this.notFoundMessage();
    } catch (err) {
      this.next(err);
    }
  }

  public async delete() {
    const { id } = this.req.params;

    try {
      const successfulDelete = await this.service.delete(id);
      if (successfulDelete) {
        return this.res.status(204).end();
      }
      return this.notFoundMessage(); 
    } catch (err) {
      this.next(err);
    }
  }
}

export default MotorcycleController;