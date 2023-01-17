import { Model } from 'mongoose';
import Sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('A função de deletar motos', function () {
  it('Deve deletar motos com sucesso', async function () {
    const testId = '63319d80feb9f483ee823ac5';
    Sinon.stub(Model, 'deleteOne').resolves({ acknowledged: true, deletedCount: 1 });

    const service = new MotorcycleService();
    const result = await service.delete(testId);

    expect(result).to.be.equal(1);

    Sinon.restore();
  });

  it('Gera erro ao tentar deletar motos com id inválido', async function () {
    const testId = '63319d80feb9f483ee823a';

    const service = new MotorcycleService();
    try {
      await service.delete(testId);
    } catch (err) {
      expect((err as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});