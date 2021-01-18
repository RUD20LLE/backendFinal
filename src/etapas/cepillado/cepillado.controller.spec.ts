import { Test, TestingModule } from '@nestjs/testing';
import { CepilladoController } from './cepillado.controller';

describe('CepilladoController', () => {
  let controller: CepilladoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CepilladoController],
    }).compile();

    controller = module.get<CepilladoController>(CepilladoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
