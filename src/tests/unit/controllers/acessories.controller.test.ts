import { Request } from "express";
import AcessoriesController from "../../../controllers/Acessories";
import Acessories from "../../../models/AcessoriesModel";
import AcessoriesService from "../../../service/Acessories";

describe('Acessories Controller Suite Tests', () => {
  const acessoryModel = new Acessories();
  const acessoryService = new AcessoriesService(acessoryModel);
  const acessoryController = new AcessoriesController(acessoryService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {})

  after(() => {})
})