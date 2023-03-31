import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  name: 'Carrinho 1',
  code: 'cod-001',
  description: 'Primeiro carrinho do nosso banco',
  mesures: '120mm x 140mm',
  wheels: '4 rodas redondas',
  image: 'http://img.img1111.jpg',
};

const carMockWithId: ICar & { _id: string } = {
  _id: '6426cd1eeae432de4d9121b3',
  name: 'Carrinho 1',
  code: 'cod-001',
  description: 'Primeiro carrinho do nosso banco',
  mesures: '120mm x 140mm',
  wheels: '4 rodas redondas',
  image: 'http://img.img1111.jpg',
};

const updateCarMock: Partial<ICar> = {
  name: 'Novo Carrinho 1',
  wheels: '6 rodas pneumáticas'
}

const updatedCarMock: ICar & { _id: string} = {
  _id: '6426cd1eeae432de4d9121b3',
  name: 'Novo Carrinho 1',
  code: 'cod-001',
  description: 'Primeiro carrinho do nosso banco',
  mesures: '120mm x 140mm',
  wheels: '6 rodas pneumáticas',
  image: 'http://img.img1111.jpg',
}

export {
  carMock,
  carMockWithId,
  updateCarMock,
  updatedCarMock
};

