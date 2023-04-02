import { ILoginBody } from '../interfaces/ILoginBody';
import JWT from '../middlewares/jwt';
import Users from '../models/UserModel';

class LoginService {
  private _user: Users;

  constructor(model: Users) {
    this._user = model;
  }

  public async Login(body: ILoginBody) {
    const user = await this._user.findOne(body.email);
    if (!user) {
      return { status: 404, message: 'User Not Found' };
    }
    if (user?.password !== body.password) {
      return { status: 401, message: 'Wrong Password' };
    }

    const jwt = new JWT();
    const token = await jwt.createToken(user);

    const decode = await jwt.decodeToken(token);
    console.log(decode);

    return { status: 200, message: token };
  }
}

export default LoginService;