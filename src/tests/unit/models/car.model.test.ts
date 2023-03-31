import { expect } from 'chai';
import { after, before, describe, it } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Cars from '../../../models/CarsModel';
import {
  carMock,
  carMockWithId
} from '../../mocks/carMocks';

describe('Cars Model Suite Tests', () => {
  const carModel = new Cars();

  before(() => {
    sinon.stub(Model, 'create').resolves();
  });

  after(() => {
    sinon.restore();
  });

  describe('Ensure a car is create', () => {
    it('Successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });
});