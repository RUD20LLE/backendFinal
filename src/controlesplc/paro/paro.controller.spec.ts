import { Test, TestingModule } from '@nestjs/testing';
import { ParoController } from './paro.controller';

describe('ParoController', () => {
  let controller: ParoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParoController],
    }).compile();

    controller = module.get<ParoController>(ParoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
