import { Request, Response } from "express";
import CarsController from "../../../controllers/Acessories";
import Cars from "../../../models/CarsModel";
import CarsService from "../../../service/Cars";

import { expect } from "chai";
import * as sinon from 'sinon';
import { carMock } from "../../mocks/carMocks";

describe('Cars Controller Suite Tests', () => {
  const carModel = new Cars();
  const carService = new CarsService(carModel);
  const carController = new CarsController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create Cars', () => {
    it('On success', async() => {
      req.body = carMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    })

    it('On failure', async() => {

    })
  })
})