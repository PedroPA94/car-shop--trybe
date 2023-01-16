import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';

describe('A função de criar carros', function () {
  it('Deve criar carros com sucesso', async function () {
    const inputCar: ICar = {
      doorsQty: 2,
      seatsQty: 5,
      model: 'Fusca',
      year: 1962,
      color: 'Blue',
      buyValue: 30.000,
    };
    const outputCar = new Car({
      doorsQty: 2,
      seatsQty: 5,
      model: 'Fusca',
      year: 1962,
      color: 'Blue',
      buyValue: 30.000,
      status: false,
      id: '63319d80feb9f483ee823ac5',
    });
    Sinon.stub(Model, 'create').resolves(outputCar);

    const service = new CarService();
    const result = await service.create(inputCar);

    expect(result).to.be.deep.equal(outputCar);

    Sinon.restore();
  });
});