import { Request, Response } from "express";
import AcessoriesController from "../../../controllers/Acessories";
import Acessories from "../../../models/AcessoriesModel";
import AcessoriesService from "../../../service/Acessories";

import { expect } from "chai";
import * as sinon from 'sinon';
import { acessoryMock, acessoryMockWithId } from "../../mocks/acessoryMocks";
import { carMock } from "../../mocks/carMocks";


describe('Acessories Controller Suite Tests', () => {
  const acessoryModel = new Acessories();
  const acessoryService = new AcessoriesService(acessoryModel);
  const acessoryController = new AcessoriesController(acessoryService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(acessoryService, 'create').resolves(acessoryMock);
    sinon.stub(acessoryService, 'read').resolves([acessoryMockWithId]);
    sinon.stub(acessoryService, 'readOne').resolves(acessoryMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  after(() => {
    sinon.restore();
  })

  describe('Create a new Acessory', () => {
    it('On success', async () => {
      req.body = carMock;
      await acessoryController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(acessoryMock)).to.be.true;
    })
  })

  describe('Read all Acessories', () => {
    it('On success', async () => {
      await acessoryController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([acessoryMockWithId])).to.be.true;
    })

  })

  describe('ReadOne Acessory', () => {
    it('On success', async () => {
      req.params = { id: acessoryMockWithId._id };
      await acessoryController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(acessoryMockWithId)).to.be.true;
    })

  })
})