import { expect } from 'chai';
import * as sinon from 'sinon';
import Users from "../../../models/UserModel";
import LoginService from "../../../service/Login";
import {
  loginUserMockWithId,
  simpleUserMock,
  wrongUserMock
} from '../../mocks/loginMocks';

describe('Login Service Suite Tests', () => {
  const userModel = new Users();
  const loginService = new LoginService(userModel);

  before(() => {
    sinon.stub(userModel, 'findOne')
      .onCall(0).resolves(loginUserMockWithId)
      .onCall(1).resolves()
      .onCall(2).resolves(loginUserMockWithId)
  })

  after(() => {
    sinon.restore();
  })

  describe('Login', () => {
    it('On success', async () => {
      const user = simpleUserMock;
      const loggedIn = await loginService.Login(user);

      expect(loggedIn.status).to.be.equal(200);
    })

    it('On "not an user" failure', async () => {
      const user = simpleUserMock;
      const loggedIn = await loginService.Login(user);

      expect(loggedIn.status).to.be.equal(404);
      expect(loggedIn.message).to.be.equal('User Not Found');
    })

    it('On password failure', async () => {
      const user = wrongUserMock;
      const loggedIn = await loginService.Login(user);

      expect(loggedIn.status).to.be.equal(401);
      expect(loggedIn.message).to.be.equal('Wrong Password');
    })
  })


})