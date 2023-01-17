import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

routes.delete(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).delete(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

const motorcyclesId = '/motorcycles/:id';

routes.get(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

routes.put(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

routes.delete(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default routes;