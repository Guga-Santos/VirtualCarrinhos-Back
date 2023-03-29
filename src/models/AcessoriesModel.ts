import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IAccessories } from '../interfaces/IAccessories';
import MongoModel from './MongoModel';

const carsMongooseSchema = new Schema<IAccessories>({
  id: String,
  name: String,
  image: String,
}, { versionKey: false });

class Acessories extends MongoModel<IAccessories> {
  constructor(model = mongooseCreateModel('Acessories', carsMongooseSchema)) {
    super(model);
  }
}

export default Acessories;