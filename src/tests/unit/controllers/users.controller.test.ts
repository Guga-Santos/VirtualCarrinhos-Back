import UsersController from "../../../controllers/Users";
import Users from "../../../models/UserModel";
import UsersService from "../../../service/Users";

import { expect } from "chai";
import { Request, Response } from "express";
import * as sinon from 'sinon';
import { userMock } from "../../mocks/userMocks";

describe('Users Controller Suite Tests', () => {
  const userModel = new Users();
  const userService = new UsersService(userModel);
  const userController = new UsersController(userService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(userService, 'create').resolves(userMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create a new User', () => {
    it('On success', async () => {
      req.body = userMock;
      await userController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(userMock)).to.be.true;
    })
  })
})