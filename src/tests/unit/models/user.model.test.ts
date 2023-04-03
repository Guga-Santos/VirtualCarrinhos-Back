import { expect } from 'chai';
import * as sinon from 'sinon';
import Users from "../../../models/UserModel";
import { userMockWithId } from "../../mocks/userMocks";

describe('User Model Suite Tests', () => {
  const users = new Users();

  before(() => {
    sinon.stub(users._model, 'findOne')
      .onCall(0).resolves(userMockWithId)
      .onCall(1).resolves(null);
  })

  after(() => {
    sinon.restore();
  })
  describe('FindOne', () => {
    it('On success', async () => {
      const user = await users.findOne(userMockWithId.email)

      expect(user).to.be.deep.equal(userMockWithId);
    })

    it('On failure', async () => {
      const user = await users.findOne(userMockWithId.email)

      expect(user).to.be.deep.equal(null);
    })
  })
})