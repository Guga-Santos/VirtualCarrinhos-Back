import { Request, Response } from 'express';
import LoginService from '../service/Login';

export default class LoginController {
  constructor(private _service: LoginService) {}

  public async Login(req: Request, res: Response) {
    const { body } = req;
    const user = await this._service.Login(body);

    return res.status(200).json(user);
  }
}