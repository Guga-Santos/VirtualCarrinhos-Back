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

  public async read(req: Request, res: Response) {
    const list = await this._service.read();

    return res.status(200).json(list);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._service.readOne(id);

    return res.status(200).json(car);
  }
}