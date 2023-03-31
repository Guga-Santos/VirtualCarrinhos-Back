import Users from "../../../models/UserModel";
import UsersService from "../../../service/Users";

import { expect } from "chai";
import * as sinon from 'sinon';
import { ZodError } from "zod";
import { userMock, userMockWithId } from "../../mocks/userMocks";


describe('Users Service Suite Tests', () => {
  const userModel = new Users();
  const userService = new UsersService(userModel);

  before(() => {
    sinon.stub(userModel, 'create').resolves(userMockWithId);

    sinon.stub(userModel, 'read')
    .onCall(0).resolves([userMockWithId])
    .onCall(1).resolves(null);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create User', () => {
    it('On success', async () => {
      const newUser = await userService.create(userMock);
      expect(newUser).to.be.deep.equal(userMockWithId);
    })

    it('On failure', async () => {
      let error;
      try {
        await userService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    })
  })

  describe('Read All Users', () => {
    it('On success', async() => {
      const list = await userService.read();
      expect(list).to.be.deep.equal([userMockWithId]);
    })

    it('On failure', async() => {
      const list = await userService.read();
      expect(list).to.be.deep.equal(null);
    })
  })
})