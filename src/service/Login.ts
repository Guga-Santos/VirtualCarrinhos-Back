import { ILoginBody } from '../interfaces/ILoginBody';
import Users from '../models/UserModel';

class LoginService {
  private _user: Users;

  constructor(model: Users) {
    this._user = model;
  }

  public async Login(body: ILoginBody) {
    const user = await this._user.findOne(body.email);
    return user;
  }
}

export default LoginService;