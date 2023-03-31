import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Cars from '../../../models/CarsModel';
import CarsService from '../../../service/Cars';
import {
  carMock,
  carMockWithId,
  updateCarMock,
  updatedCarMock
} from '../../mocks/carMocks';

describe('Cars Service Suite Tests', () => {
  const carModel = new Cars();
  const carService = new CarsService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);

    sinon.stub(carModel, 'read')
      .onCall(0).resolves([carMockWithId]) 
			.onCall(1).resolves(null); 

      sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId) 
			.onCall(1).resolves(null); 

      sinon.stub(carModel, 'update')
      .onCall(0).resolves(updatedCarMock) 
			.onCall(1).resolves(null); 

      sinon.stub(carModel, 'delete')
      .onCall(0).resolves(carMockWithId) 
			.onCall(1).resolves(null);
    
  })

  after(() => {
    sinon.restore();
  })

  describe('Create Cars', () => {
    it('On success', async() => {
      const newCar = await carService.create(carMock);

			expect(newCar).to.be.deep.equal(carMockWithId);
    })

    it('On failure', async() => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError);
    })
  })

  describe('Read All Cars', () => {
    it('On success', async() => {
      const newCar = await carService.read();
			expect(newCar).to.be.deep.equal([carMockWithId]);
    })

    it('On failure', async() => {
      const newCar = await carService.read();
			expect(newCar).to.be.deep.equal(null);
    })
  })

  describe('ReadOne Car', () => {
		it('On success', async () => {
			const newCar = await carService.readOne(carMockWithId._id);

			expect(newCar).to.be.deep.equal(carMockWithId);
		});

		it('On failure', async () => {
    let error;
			try {
				await carService.readOne(carMockWithId._id);
			} catch (err:any) {
       error = err
			}

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

  describe('Update Car', () => {
		it('On success', async () => {
			const newCar = await carService.update(carMockWithId._id, updateCarMock);

			expect(newCar).to.be.deep.equal(updatedCarMock);
		});

		it('On failure', async () => {
    let error;
			try {
				await carService.update(carMockWithId._id, updateCarMock);
			} catch (err:any) {
       error = err
			}

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

  describe('Delete Car', () => {
    it('On success', async() => {
      const deletedCar = await carService.delete(carMockWithId._id);
			expect(deletedCar).to.be.deep.equal(carMockWithId);

    })

    it('On failure', async() => {
      let error;
			try {
				await carService.delete(carMockWithId._id);
			} catch (err:any) {
       error = err
			}

      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
    })
  })