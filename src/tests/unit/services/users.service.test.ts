import Users from "../../../models/UserModel";
import UsersService from "../../../service/Users";

import { expect } from "chai";
import * as sinon from 'sinon';
import { ZodError } from "zod";
import { ErrorTypes } from "../../../errors/catalog";
import { updatedUserMock, updateUserMock, userMock, userMockWithId } from "../../mocks/userMocks";


describe('Users Service Suite Tests', () => {
  const userModel = new Users();
  const userService = new UsersService(userModel);

  before(() => {
    sinon.stub(userModel, 'create').resolves(userMockWithId);

    sinon.stub(userModel, 'read')
    .onCall(0).resolves([userMockWithId])
    .onCall(1).resolves(null);

    sinon.stub(userModel, 'readOne')
    .onCall(0).resolves(userMockWithId)
    .onCall(1).resolves(null);

    sinon.stub(userModel, 'update')
    .onCall(0).resolves(updatedUserMock)
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

  describe('ReadOne User', () => {
    it('On success', async () => {
      const user = await userService.readOne(userMockWithId._id);
      expect(user).to.be.deep.equal(userMockWithId);
    })
    it('On failure', async () => {
      let error;
      try {
      await userService.readOne(userMockWithId._id);
      } catch (err: any){
        error = err;
      }

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })

  describe('Update User', () => {
    it('On success', async () => {
      const user = await userService.update(userMockWithId._id, updateUserMock);
      expect(user).to.be.deep.equal(updatedUserMock);
    })
    it('On failure', async () => {
      let error;
      try {
      await userService.update(userMockWithId._id, updateUserMock);
      } catch (err: any){
        error = err;
      }

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })
})