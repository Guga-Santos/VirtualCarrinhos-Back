import { IUser } from "../../interfaces/IUser"

const simpleUserMock = {
  email: "some@email.com",
  password: "some_password",
}

const wrongUserMock = {
  email: "wrong@email.com",
  password: "some_wrong_password"
}

const userWithoutPasswordMock = {
  email: "some@email.com"
}

const loginUserMockWithId: IUser & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  id: "97104966-cefe-11ed-afa1-0242ac120002",
  name: "New User",
  email: "some@email.com",
  password: "some_password",
  role: "user"
}


export {
  simpleUserMock,
  wrongUserMock,
  userWithoutPasswordMock,
  loginUserMockWithId
}

