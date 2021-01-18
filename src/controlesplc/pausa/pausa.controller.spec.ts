import { Test, TestingModule } from '@nestjs/testing';
import { PausaController } from './pausa.controller';

describe('PausaController', () => {
  let controller: PausaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PausaController],
    }).compile();

    controller = module.get<PausaController>(PausaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
