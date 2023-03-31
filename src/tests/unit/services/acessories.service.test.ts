import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';

import Acessories from "../../../models/AcessoriesModel";
import AcessoriesService from "../../../service/Acessories";
import {
  acessoryMock,
  acessoryMockWithId,
  updateAcessoryMock,
  updatedAcessoryMock
} from '../../mocks/acessoryMocks';

describe('Acessories Service Suite Tests', () => {
  const acessoryModel = new Acessories();
  const acessoryService = new AcessoriesService(acessoryModel);

  before(() => {
    sinon.stub(acessoryModel, 'create').resolves(acessoryMockWithId);
    
    sinon.stub(acessoryModel, 'read')
      .onCall(0).resolves([acessoryMockWithId])
      .onCall(1).resolves(null);

    sinon.stub(acessoryModel, 'readOne')
      .onCall(0).resolves(acessoryMockWithId)
      .onCall(1).resolves(null);

    sinon.stub(acessoryModel, 'update')
      .onCall(0).resolves(updatedAcessoryMock)
      .onCall(1).resolves(null);

    sinon.stub(acessoryModel, 'delete')
      .onCall(0).resolves(acessoryMockWithId)
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

  describe('Read All Acerrories', () => {
    it('On success', async () => {
      const list = await acessoryService.read()
      expect(list).to.be.deep.equal([acessoryMockWithId]);
    })
    
    it('On failure', async () => {
      const list = await acessoryService.read();
      expect(list).to.be.deep.equal(null);
    })
  })

  describe('ReadOne Acessory', () => {
    it('On success', async () => {
      const acessory = await acessoryService.readOne(acessoryMockWithId._id);
      expect(acessory).to.be.deep.equal(acessoryMockWithId);
    })

    it('On failure', async () => {
      let error;
      try {
        await acessoryService.readOne(acessoryMockWithId._id);
      } catch  (err: any) {
        error = err
      }
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    })
  })

  describe('Update Acessory', () => {
		it('On success', async () => {
			const acessory = await acessoryService.update(acessoryMockWithId._id, updateAcessoryMock);

			expect(acessory).to.be.deep.equal(updatedAcessoryMock);
		});

		it('On failure', async () => {
    let error;
			try {
				await acessoryService.update(acessoryMockWithId._id, updateAcessoryMock);
			} catch (err:any) {
       error = err
			}

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

  describe('Delete Acessory', () => {
    it('On success', async() => {
      const deletedCar = await acessoryService.delete(acessoryMockWithId._id);
			expect(deletedCar).to.be.deep.equal(acessoryMockWithId);

    })

    it('On failure', async() => {
      let error;
			try {
				await acessoryService.delete(acessoryMockWithId._id);
			} catch (err:any) {
       error = err
			}

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
  });
})