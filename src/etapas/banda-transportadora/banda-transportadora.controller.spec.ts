import { Test, TestingModule } from '@nestjs/testing';
import { BandaTransportadoraController } from './banda-transportadora.controller';

describe('BandaTransportadoraController', () => {
  let controller: BandaTransportadoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandaTransportadoraController],
    }).compile();

    controller = module.get<BandaTransportadoraController>(
      BandaTransportadoraController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
