import { IUser } from '../../interfaces/IUser';

declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}