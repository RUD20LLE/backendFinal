import { Test, TestingModule } from '@nestjs/testing';
import { ContinuarController } from './continuar.controller';

describe('ContinuarController', () => {
  let controller: ContinuarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinuarController],
    }).compile();

    controller = module.get<ContinuarController>(ContinuarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
