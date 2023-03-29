import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import MongoModel from './MongoModel';

const UsersMongooseSchema = new Schema<IUser>({
  id: String,
  name: String,
  email: String,
  password: String,
  role: String,
}, { versionKey: false });

class Acessories extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('Users', UsersMongooseSchema)) {
    super(model);
  }
}

export default Acessories;