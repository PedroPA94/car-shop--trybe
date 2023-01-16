import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../../src/Domains/Motorcycle';

describe('A função de criar motos', function () {
  it('Deve criar motos com sucesso', async function () {
    const inputMotorcycle: IMotorcycle = {
      category: 'Trail',
      engineCapacity: 900,
      model: 'Honda',
      year: 2020,
      color: 'Blue',
      buyValue: 30.000,
    };
    const outputMotorcycle = new Motorcycle({
      category: 'Trail',
      engineCapacity: 900,
      model: 'Honda',
      year: 2020,
      color: 'Blue',
      buyValue: 30.000,
      status: false,
      id: '63319d80feb9f483ee823ac5',
    });
    Sinon.stub(Model, 'create').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.create(inputMotorcycle);

    expect(result).to.be.deep.equal(outputMotorcycle);

    Sinon.restore();
  });
});