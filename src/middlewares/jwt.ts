import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || 'Lucena';

export default class JWT {
  private _secret: string;

  constructor() {
    this._secret = secret;
  }
  public async createToken(obj: IUser) {
    const token = jwt.sign({ data: { user: obj } }, this._secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });

    return token;
  }

  public async decodeToken(token: string) {
    const decode = jwt.verify(token, this._secret);

    return decode;
  }
}