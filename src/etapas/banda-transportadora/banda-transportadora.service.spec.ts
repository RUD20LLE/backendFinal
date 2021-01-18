import { Test, TestingModule } from '@nestjs/testing';
import { BandaTransportadoraService } from './banda-transportadora.service';

describe('BandaTransportadoraService', () => {
  let service: BandaTransportadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandaTransportadoraService],
    }).compile();

    service = module.get<BandaTransportadoraService>(
      BandaTransportadoraService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
