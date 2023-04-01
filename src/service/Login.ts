import Users from '../models/UserModel';

class LoginService {
  private _user: Users;

  constructor(model: Users) {
    this._user = model;
  }

  public async findOne(email: string) {
    const user = await this._user.findOne(email);
    return user;
  }
}

export default LoginService;