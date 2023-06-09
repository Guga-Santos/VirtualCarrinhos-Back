/* eslint-disable sonarjs/no-duplicate-string */
import { Router } from 'express';
import validateJWT from '../auth/validateJWT';
import UsersController from '../controllers/Users';
import User from '../models/UserModel';
import UsersService from '../service/Users';

const route = Router();

const user = new User();
const userService = new UsersService(user);
const userController = new UsersController(userService);

route.use((req, res, next) => validateJWT(req, res, next));

route
  .post('/users', (req, res) => userController.create(req, res))
  .get('/users/:id', (req, res) => userController.readOne(req, res))
  .get('/users', (req, res) => userController.read(req, res))
  .put('/users/:id', (req, res) => userController.update(req, res))
  .delete('/users/:id', (req, res) => userController.delete(req, res));

export default route;