import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../../src/Services/CarService';

describe('A função de deletar carros', function () {
  it('Deve deletar carros com sucesso', async function () {
    const testId = '63319d80feb9f483ee823ac5';
    Sinon.stub(Model, 'deleteOne').resolves({ acknowledged: true, deletedCount: 1 });

    const service = new CarService();
    const result = await service.delete(testId);

    expect(result).to.be.equal(1);

    Sinon.restore();
  });

  it('Gera erro ao tentar deletar carro com id inválido', async function () {
    const testId = '63319d80feb9f483ee823a';

    const service = new CarService();
    try {
      await service.delete(testId);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});