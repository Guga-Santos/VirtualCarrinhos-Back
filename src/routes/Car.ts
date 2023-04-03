import { Router } from 'express';
import validateJWT from '../auth/validateJWT';
import CarsController from '../controllers/Cars';
import Cars from '../models/CarsModel';
import CarsService from '../service/Cars';

const route = Router();

const car = new Cars();
const carService = new CarsService(car);
const carController = new CarsController(carService);

route
  .get('/cars/:id', (req, res) => carController.readOne(req, res))
  .get('/cars', (req, res) => carController.read(req, res))
  .use((req, res, next) => validateJWT(req, res, next))
  .post('/cars', (req, res) => carController.create(req, res))
  .put('/cars/:id', (req, res) => carController.update(req, res))
  .delete('/cars/:id', (req, res) => carController.delete(req, res));

export default route;