import { ErrorTypes } from '../errors/catalog';
import { AccessoriesZodSchema, IAccessories } from '../interfaces/IAccessories';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class AcessoriesService implements IService<IAccessories> {
  private _acessory: IModel<IAccessories>;

  constructor(model: IModel<IAccessories>) {
    this._acessory = model;
  }

  public async create(obj: unknown): Promise<IAccessories> {
    const parsed = AccessoriesZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    return this._acessory.create(parsed.data);
  }

  public async read(): Promise<IAccessories[] | null> {
    const list = await this._acessory.read();

    return list;
  }

  public async readOne(_id: string): Promise<IAccessories> {
    const acessory = await this._acessory.readOne(_id);
    if (!acessory) throw new Error(ErrorTypes.EntityNotFound);

    return acessory;
  }

  public async update(_id: string, obj: Partial<IAccessories>): Promise<IAccessories | null> {
    const updated = await this._acessory.update(_id, obj);
    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }

  public async delete(_id: string): Promise<IAccessories | null> {
    const deleted = await this._acessory.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

    return deleted;
  }
}

export default AcessoriesService;