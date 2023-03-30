import { Router } from 'express';
import CarsController from '../controllers/Cars';
import Cars from '../models/CarsModel';
import CarsService from '../service/Cars';

const route = Router();

const car = new Cars();
const carService = new CarsService(car);
const carController = new CarsController(carService);

route
  .post('/cars', (req, res) => carController.create(req, res))
  .get('/cars/:id', (req, res) => carController.readOne(req, res))
  .get('/cars', (req, res) => carController.read(req, res))
  .put('/cars/:id', (req, res) => carController.update(req, res))
  .delete('/cars/:id', (req, res) => carController.delete(req, res));

export default route;