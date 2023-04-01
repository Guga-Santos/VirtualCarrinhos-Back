import UsersController from "../../../controllers/Users";
import Users from "../../../models/UserModel";
import UsersService from "../../../service/Users";

describe('Users Controller Suite Tests', () => {
  const userModel = new Users();
  const userService = new UsersService(userModel);
  const userController = new UsersController(userService);

  before(() => {});

  after(() => {});
})