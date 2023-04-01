import { Request, Response } from "express";
import AcessoriesController from "../../../controllers/Acessories";
import Acessories from "../../../models/AcessoriesModel";
import AcessoriesService from "../../../service/Acessories";

import { expect } from "chai";
import * as sinon from 'sinon';
import { acessoryMock } from "../../mocks/acessoryMocks";
import { carMock } from "../../mocks/carMocks";


describe('Acessories Controller Suite Tests', () => {
  const acessoryModel = new Acessories();
  const acessoryService = new AcessoriesService(acessoryModel);
  const acessoryController = new AcessoriesController(acessoryService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(acessoryService, 'create').resolves(acessoryMock);

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
})