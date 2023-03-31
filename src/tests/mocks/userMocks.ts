import { IUser } from "../../interfaces/IUser";

const userMock: IUser = {
  id: "97104966-cefe-11ed-afa1-0242ac120002",
  name: "New User",
  email: "user@email.com",
  password: "password",
  role: "user"
}

const userMockWithId: IUser & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  id: "97104966-cefe-11ed-afa1-0242ac120002",
  name: "New User",
  email: "user@email.com",
  password: "password",
  role: "user"
}

const updateUserMock = {
  name: 'Updated User',
  role: 'admin'
}

const updatedUserMock: IUser & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  id: "97104966-cefe-11ed-afa1-0242ac120002",
  name: 'Updated User',
  email: "user@email.com",
  password: "password",
  role: 'admin'
}

export {
  userMock,
  userMockWithId,
  updateUserMock,
  updatedUserMock
};
