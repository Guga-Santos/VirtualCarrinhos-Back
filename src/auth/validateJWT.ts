import { NextFunction, Request, Response } from 'express';
import JWT from '../middlewares/jwt';
import Users from '../models/UserModel';
import UsersService from '../service/Users';

interface JwtPayload {
  data: {
    userId: string
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
    const user = await userService.readOne(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'User Not Found' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
