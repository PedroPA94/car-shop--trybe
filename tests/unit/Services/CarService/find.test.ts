import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../../src/Domains/Car';
import CarService from '../../../../src/Services/CarService';

describe('A função de listar carros', function () {
  it('Lista todos os carros', async function () {
    const outputCars: Car[] = [
      new Car({
        doorsQty: 2,
        seatsQty: 5,
        model: 'Fusca',
        year: 1962,
        color: 'Blue',
        buyValue: 30.000,
        status: false,
        id: '63319d80feb9f483ee823ac5',
      }),
      new Car({
        doorsQty: 4,
        seatsQty: 5,
        model: 'Gol',
        year: 2010,
        color: 'Grey',
        buyValue: 10.000,
        status: true,
        id: '63319d80feb9f483ee823ac6',
      }),
    ];
    Sinon.stub(Model, 'find').resolves(outputCars);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(outputCars);

    Sinon.restore();
  });

  it('Lista corretamente um carro pelo seu id', async function () {
    const testId = '63319d80feb9f483ee823ac6';
    const outputCar = new Car({
      doorsQty: 4,
      seatsQty: 5,
      model: 'Gol',
      year: 2010,
      color: 'Grey',
      buyValue: 10.000,
      status: true,
      id: '63319d80feb9f483ee823ac6',
    });
    Sinon.stub(Model, 'findById').resolves(outputCar);

    const service = new CarService();
    const result = await service.getById(testId);

    expect(result).to.be.deep.equal(outputCar);

    Sinon.restore();
  });

  it('Gera erro ao tentar listar carro com id inválido', async function () {
    const testId = '63319d80feb9f483ee823a';

    const service = new CarService();
    try {
      await service.getById(testId);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Retorna nulo para carro inexistente', async function () {
    const testId = '63319d80feb9f483ee823ac5';
    Sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.getById(testId);

    expect(result).to.be.equal(null);

    Sinon.restore();
  });
});