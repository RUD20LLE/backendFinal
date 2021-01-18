import { Test, TestingModule } from '@nestjs/testing';
import { EnjabonadoController } from './enjabonado.controller';

describe('EnjabonadoController', () => {
  let controller: EnjabonadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnjabonadoController],
    }).compile();

    controller = module.get<EnjabonadoController>(EnjabonadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
