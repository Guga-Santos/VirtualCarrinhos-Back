import { Request, Response } from "express";
import CarsController from "../../../controllers/Acessories";
import Cars from "../../../models/CarsModel";
import CarsService from "../../../service/Cars";

import { expect } from "chai";
import * as sinon from 'sinon';
import {
  carMock,
  carMockWithId,
  updateCarMock,
  updatedCarMock
} from "../../mocks/carMocks";

describe('Cars Controller Suite Tests', () => {
  const carModel = new Cars();
  const carService = new CarsService(carModel);
  const carController = new CarsController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'read').resolves([carMockWithId]);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);
    sinon.stub(carService, 'update').resolves(updatedCarMock);
    sinon.stub(carService, 'delete').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create Car', () => {
    it('On success', async() => {
      req.body = carMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    })

    it('On failure', async() => {

    })
  })

  describe('Read all Cars', () => {
    it('On success', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMockWithId])).to.be.true;
    })

    it('On failure', async () => {})
  })

  describe('ReadOne Car', () => {
    it('On success', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    })

    it('On failure', async () => {})
  })

  describe('Update Car', () => {
    it('On success', async () => {
      req.params = { id: carMockWithId._id };
      req.body = updateCarMock;
      await carController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(updatedCarMock)).to.be.true;
    })

    it('On failure', async () => {})
  })

  describe('Delete Car', () => {
    it('On success', async () => {
      req.params = { id: carMockWithId._id };
      await carController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    })

    it('On failure', async () => {})
  })
})