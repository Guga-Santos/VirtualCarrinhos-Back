/* eslint-disable sonarjs/no-duplicate-string */
import { Router } from 'express';
import AcessoryController from '../controllers/Acessories';
import Acessory from '../models/AcessoriesModel';
import AcessoryService from '../service/Acessories';

const route = Router();

const acessory = new Acessory();
const acessoryService = new AcessoryService(acessory);
const acessoryController = new AcessoryController(acessoryService);

route
  .post('/acessories', (req, res) => acessoryController.create(req, res))
  .get('/acessories/:id', (req, res) => acessoryController.readOne(req, res))
  .get('/acessories', (req, res) => acessoryController.read(req, res))
  .put('/acessories/:id', (req, res) => acessoryController.update(req, res))
  .delete('/acessories/:id', (req, res) => acessoryController.delete(req, res));

export default route;