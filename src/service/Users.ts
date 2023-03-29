import { ErrorTypes } from "../errors/catalog";
import { IModel } from "../interfaces/IModel";
import IService from "../interfaces/IService";
import { IUser, UserZodSchema } from "../interfaces/IUser";

class UsersService implements IService<IUser> {
  private _user:IModel<IUser>;

  constructor(model: IModel<IUser>) {
    this._user = model;
  }

  public async create(obj: unknown): Promise<IUser> {
    const parsed = UserZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    return this._user.create(parsed.data);
  }

  public async read(): Promise<IUser[] | null> {
    const list = this._user.read();

    return list ?? [];
  }

  public async readOne(_id: string): Promise<IUser> {
    const user = await this._user.readOne(_id);
    if (!user) throw new Error(ErrorTypes.EntityNotFound);

    return user;
  }

  public async update(_id: string, obj: Partial<IUser>): Promise<IUser | null> {
    const updated = await this._user.update(_id, obj);
    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }

  public async delete(_id: string): Promise<IUser | null> {
    const deleted = await this._user.delete(_id);
    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

    return deleted;
  }
}

export default UsersService;