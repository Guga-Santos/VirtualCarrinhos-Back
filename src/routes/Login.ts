import { Router } from 'express';
import LoginController from '../controllers/Login';
import User from '../models/UserModel';
import LoginService from '../service/Login';

const route = Router();

const user = new User();
const service = new LoginService(user);
const loginController = new LoginController(service);

route
  .post('/login', (req, res) => loginController.Login(req, res));

export default route;