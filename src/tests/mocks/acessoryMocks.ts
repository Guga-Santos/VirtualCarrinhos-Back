import { IAccessories } from "../../interfaces/IAccessories";

const acessoryMock: IAccessories = {
    name: "Acessório 1",
    description: "Primeiro acessório do nosso banco",
    image: "http://img.img2222.jpg"
  }

const acessoryMockWithId: IAccessories & { _id: string } = {
  _id: "64272b4fc9ba053c73cfe610",
  name: "Acessório 1",
  description: "Primeiro acessório do nosso banco",
  image: "http://img.img2222.jpg"
}

const updateAcessoryMock: Partial<IAccessories> = {
  name: "New Acessório 1",
  description: "Uma nova descrição"
}

const updatedAcessoryMock: IAccessories & { _id: string } = {
  _id: "64272b4fc9ba053c73cfe610",
  name: "New Acessório 1",
  description: "Uma nova descrição",
  image: "http://img.img2222.jpg"
}

export {
  acessoryMock,
  acessoryMockWithId,
  updateAcessoryMock,
  updatedAcessoryMock
};
