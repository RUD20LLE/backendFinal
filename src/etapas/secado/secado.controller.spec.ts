import { Test, TestingModule } from '@nestjs/testing';
import { SecadoController } from './secado.controller';

describe('SecadoController', () => {
  let controller: SecadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecadoController],
    }).compile();

    controller = module.get<SecadoController>(SecadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
