import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('A função de atualizar motos', function () {
  it('Deve atualizar motos com sucesso', async function () {
    const testId = '63319d80feb9f483ee823ac5';
    const inputMotorcycle: Partial<IMotorcycle> = {
      color: 'Yellow',
      buyValue: 35.000,
    };
    const outputMotorcycle = new Motorcycle({
      category: 'Trail',
      engineCapacity: 900,
      model: 'Honda',
      year: 2020,
      color: 'Yellow',
      buyValue: 35.000,
      status: false,
      id: '63319d80feb9f483ee823ac5',
    });
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.update(testId, inputMotorcycle);

    expect(result).to.be.deep.equal(outputMotorcycle);

    Sinon.restore();
  });

  it('Gera erro ao tentar atualizar moto com id inválido', async function () {
    const testId = '63319d80feb9f483ee823a';
    const inputMotorcycle: Partial<IMotorcycle> = {
      color: 'Yellow',
      buyValue: 35.000,
    };

    const service = new MotorcycleService();
    try {
      await service.update(testId, inputMotorcycle);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});