import { Test, TestingModule } from '@nestjs/testing';
import { PausaService } from './pausa.service';

describe('PausaService', () => {
  let service: PausaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PausaService],
    }).compile();

    service = module.get<PausaService>(PausaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
