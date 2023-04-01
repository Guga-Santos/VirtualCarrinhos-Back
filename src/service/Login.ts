import { ILoginBody } from '../interfaces/ILoginBody';
import { IValidate } from '../interfaces/IValidate';
import Users from '../models/UserModel';

class LoginService {
  private _user: Users;

  constructor(model: Users) {
    this._user = model;
  }

  public async Login(body: ILoginBody): Promise<IValidate> {
    const user = await this._user.findOne(body.email);
    if (!user) {
      return { status: 404, message: 'User Not Found' };
    }
    if (user?.password !== body.password) {
      return { status: 401, message: 'Wrong Password' };
    }

    return { status: 200, message: user.id };
  }
}

export default LoginService;