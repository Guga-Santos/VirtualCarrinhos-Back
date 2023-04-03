/* eslint-disable sonarjs/no-duplicate-string */
import { Router } from 'express';
import UsersController from '../controllers/Users';
import User from '../models/UserModel';
import UsersService from '../service/Users';

const route = Router();

const user = new User();
const userService = new UsersService(user);
const userController = new UsersController(userService);

route
  .post('/users', (req, res, next) => userController.create(req, res, next))
  .get('/users/:id', (req, res, next) => userController.readOne(req, res, next))
  .get('/users', (req, res, next) => userController.read(req, res, next))
  .put('/users/:id', (req, res, next) => userController.update(req, res, next))
  .delete('/users/:id', (req, res, next) => userController.delete(req, res, next));

export default route;