import { Request, Response } from 'express';
import { IAccessories } from '../interfaces/IAccessories';
import IService from '../interfaces/IService';

export default class CarsController {
  constructor(private _service: IService<IAccessories>) {}

  public async create(req: Request, res: Response) {
    const { body } = req;
    const newAcessory = await this._service.create(body);
    return res.status(201).json(newAcessory);
  }

  public async read(req: Request, res: Response) {
    const list = await this._service.read();

    return res.status(200).json(list);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const acessory = await this._service.readOne(id);

    return res.status(200).json(acessory);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    const updated = await this._service.update(id, body);

    return res.status(201).json(updated);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    await this._service.delete(id);
    return res.status(204).end('Successfully deleted');
  }
}