import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IAccessories } from '../interfaces/IAccessories';
import MongoModel from './MongoModel';

const AcessoriesMongooseSchema = new Schema<IAccessories>({
  name: String,
  image: String,
}, { versionKey: false });

class Acessories extends MongoModel<IAccessories> {
  constructor(model = mongooseCreateModel('Acessories', AcessoriesMongooseSchema)) {
    super(model);
  }
}

export default Acessories;