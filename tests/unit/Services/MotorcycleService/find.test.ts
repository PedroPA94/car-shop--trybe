import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('A função de listar motos', function () {
  it('Lista todas as motos', async function () {
    const outputMotorcycles: Motorcycle[] = [
      new Motorcycle({
        category: 'Trail',
        engineCapacity: 900,
        model: 'Honda',
        year: 2020,
        color: 'Blue',
        buyValue: 30.000,
        status: false,
        id: '63319d80feb9f483ee823ac5',
      }),
      new Motorcycle({
        category: 'Street',
        engineCapacity: 600,
        model: 'Yamaha',
        year: 2020,
        color: 'Grey',
        buyValue: 10.000,
        status: true,
        id: '63319d80feb9f483ee823ac6',
      }),
    ];
    Sinon.stub(Model, 'find').resolves(outputMotorcycles);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(outputMotorcycles);

    Sinon.restore();
  });

  it('Lista corretamente uma moto pelo seu id', async function () {
    const testId = '63319d80feb9f483ee823ac6';
    const outputMotorcycle = new Motorcycle({
      category: 'Street',
      engineCapacity: 600,
      model: 'Yamaha',
      year: 2020,
      color: 'Grey',
      buyValue: 10.000,
      status: true,
      id: '63319d80feb9f483ee823ac6',
    });
    Sinon.stub(Model, 'findById').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.getById(testId);

    expect(result).to.be.deep.equal(outputMotorcycle);

    Sinon.restore();
  });

  it('Gera erro ao tentar listar moto com id inválido', async function () {
    const testId = '63319d80feb9f483ee823a';

    const service = new MotorcycleService();
    try {
      await service.getById(testId);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Retorna nulo para moto inexistente', async function () {
    const testId = '63319d80feb9f483ee823ac5';
    Sinon.stub(Model, 'findById').resolves(null);

    const service = new MotorcycleService();
    const result = await service.getById(testId);

    expect(result).to.be.equal(null);

    Sinon.restore();
  });
});