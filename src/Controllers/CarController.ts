import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  public async getAll() {
    const cars = await this.service.getAll();
    return this.res.status(200).json(cars);
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.getById(id);
      if (car) {
        return this.res.status(200).json(car);
      }
      return this.res.status(404).json({ message: 'Car not found' });
    } catch (err) {
      this.next(err);
    }
  }

  public async update() {
    const car: ICar = {
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status,
    };
    const { id } = this.req.params;

    try {
      const updatedCar = await this.service.update(id, car);
      if (updatedCar) {
        return this.res.status(200).json(updatedCar);
      }
      return this.res.status(404).json({ message: 'Car not found' }); 
    } catch (err) {
      this.next(err);
    }
  }
}

export default CarController;