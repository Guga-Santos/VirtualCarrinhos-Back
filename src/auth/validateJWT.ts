/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import JWT from '../middlewares/jwt';
import Users from '../models/UserModel';
import UsersService from '../service/Users';

interface JwtPayload {
  data: {
    user: IUser & { _id: string }
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  
  try {
    const jwt = new JWT();
    const decoded = await jwt.decodeToken(token) as JwtPayload;

    const userModel = new Users();
    const userService = new UsersService(userModel);
    const user = await userService.readOne(decoded.data.user._id);
    
    if (!user) {
      return res.status(401).json({ message: 'User Not Found' });
    }

    if (user.role !== 'dev' && user.role !== 'admin') {
      return res.status(401).json({ message: 'Unauthorized!' });
    }

    return next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
