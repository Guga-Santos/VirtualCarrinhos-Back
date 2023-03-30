import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarsController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const { body } = req;
    const newCar = await this._service.create(body);
    return res.status(201).json(newCar);
  }
}