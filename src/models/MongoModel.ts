import { isValidObjectId, Model } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model!:Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[] | null> {
    return this._model.find();
  }
  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id });
  }
  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    if (Object.keys(obj).length === 0) throw new Error(ErrorTypes.EmptyBody);
    return this._model.findOneAndUpdate({ _id }, obj, { new: true, versionKey: false });
  }
  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete({ _id });
  }
}

export default MongoModel;