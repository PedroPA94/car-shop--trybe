import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';

describe('A função de atualizar carros', function () {
  it('Deve atualizar carros com sucesso', async function () {
    const testId = '63319d80feb9f483ee823ac5';
    const inputCar: Partial<ICar> = {
      color: 'Yellow',
      buyValue: 35.000,
    };
    const outputCar = new Car({
      doorsQty: 2,
      seatsQty: 5,
      model: 'Fusca',
      year: 1962,
      color: 'Yellow',
      buyValue: 35.000,
      status: false,
      id: '63319d80feb9f483ee823ac5',
    });
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(outputCar);

    const service = new CarService();
    const result = await service.update(testId, inputCar);

    expect(result).to.be.deep.equal(outputCar);

    Sinon.restore();
  });

  it('Gera erro ao tentar atualizar carro com id inválido', async function () {
    const testId = '63319d80feb9f483ee823a';
    const inputCar: Partial<ICar> = {
      color: 'Yellow',
      buyValue: 35.000,
    };

    const service = new CarService();
    try {
      await service.update(testId, inputCar);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});