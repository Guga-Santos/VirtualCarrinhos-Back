import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
// import { ErrorTypes } from '../../../errors/catalog';
import Cars from '../../../models/CarsModel';
import CarsService from '../../../service/Cars';
import {
  carMock,
  carMockWithId
} from '../../mocks/carMocks';

describe('Cars Service Suite Tests', () => {
  const carModel = new Cars();
  const carService = new CarsService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
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
})