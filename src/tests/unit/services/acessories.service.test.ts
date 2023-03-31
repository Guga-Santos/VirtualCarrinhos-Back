import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';

import Acessories from "../../../models/AcessoriesModel";
import AcessoriesService from "../../../service/Acessories";
import { acessoryMock, acessoryMockWithId } from '../../mocks/acessoryMocks';

describe('Acessories Service Suite Tests', () => {
  const acessoryModel = new Acessories();
  const acessoryService = new AcessoriesService(acessoryModel);

  before(() => {
    sinon.stub(acessoryModel, 'create').resolves(acessoryMockWithId);
    
    sinon.stub(acessoryModel, 'read')
      .onCall(0).resolves([acessoryMockWithId])
      .onCall(1).resolves(null);
  })
  
  after(() => {
    sinon.restore();
  })

  describe('Create Acessories', () => {
    it('On success', async () => {
      const newAcessory = await acessoryService.create(acessoryMock)

      expect(newAcessory).to.be.deep.equal(acessoryMockWithId);
    })

    it('On failure', async () => {
      let error;
      try {
        await acessoryService.create({});
      } catch(err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError);
    })
  })

  describe('Reall All Acerrories', () => {
    it('On success', async () => {
      const list = await acessoryService.read()
      expect(list).to.be.deep.equal([acessoryMockWithId]);
    })
    it('On failure', async () => {
      const list = await acessoryService.read();
      expect(list).to.be.deep.equal([]);
    })
  })
})